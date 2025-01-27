import { ref, type Ref } from "vue";
import Matter, { World } from "matter-js";

import type { Tag, TagsByCategory } from "~/types/Tag";
import type { StrapiResponse } from "~/types/StrapiResponse";
import { Alert } from "~/entities/Alert";

export const tags: Ref<TagsByCategory[] | null> = ref(null);

const alerts = useAlerts();

/**
 * Get all skill tags from Strapi sorted by category
 * @returns a reactive list of skill tags sorted by category
 */
export async function getSkillTags() {
    const api = useAsyncApi();

    const response = await api.get<StrapiResponse<Tag>>("/skill-tags", {
        populate: "*",
    });

    if (!response || !response.data.value || response.error.value) {
        alerts.addAlert(new Alert("Failed to fetch skill tags", "danger"));
        throw new Error("Failed to fetch skill tags");
    }

    const _tags: Tag[] = response.data.value.data;

    const categories: string[] = Array.from(
        new Set(_tags.map((tag: Tag) => tag.category))
    );

    const tagsByCategory = categories.map((category) => ({
        category,
        tags: _tags.filter((tag: Tag) => tag.category === category),
    }));

    tags.value = tagsByCategory;

    return tagsByCategory;
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- Matter.js implementation ---------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const Engine = Matter.Engine,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Events = Matter.Events;

const engine = Engine.create(),
    world = engine.world;
let render: Matter.Render,
    runner: Matter.Runner,
    isResizing = false;

/**
 * Initialize Matter.js
 * @param section section containing the boxes
 * @param boxes boxes containing the tags
 */
export function initMatter(
    section: HTMLElement,
    boxes: NodeListOf<HTMLElement>
): void {
    render = Render.create({
        element: section,
        engine: engine,
        options: {
            wireframes: false,
            showInternalEdges: false,
            width: section.clientWidth,
            height: section.clientHeight,
            background: "transparent",
        },
    });

    const boxBorders: Matter.Body[] = [];

    boxes.forEach((box) => {
        const positions = [
            {
                x: box.offsetLeft + box.clientWidth / 2,
                y: box.offsetTop - 9,
                width: box.clientWidth + 20,
                height: 21,
            },
            {
                x: box.offsetLeft - 9,
                y: box.offsetTop + box.clientHeight / 2,
                width: 21,
                height: box.clientHeight + 40,
            },
            {
                x: box.offsetLeft + box.clientWidth / 2,
                y: box.offsetTop + box.clientHeight + 9,
                width: box.clientWidth,
                height: 21,
            },
            {
                x: box.offsetLeft + box.clientWidth + 9,
                y: box.offsetTop + box.clientHeight / 2,
                width: 21,
                height: box.clientHeight + 40,
            },
        ];

        positions.forEach((pos) => {
            boxBorders.push(
                Bodies.rectangle(pos.x, pos.y, pos.width, pos.height, {
                    isStatic: true,
                })
            );
        });
    });

    Composite.add(world, boxBorders);

    engine.gravity.y = 0.6;

    runner = Runner.create();

    Render.run(render);
    Runner.run(runner, engine);
}

/**
 * Spawn tags inside the box
 * @param tags a list of tags from only 1 category
 */
export function spawnTags(
    box: HTMLElement,
    tags: NodeListOf<HTMLElement>
): void {
    const boxWidth = box.clientWidth;

    tags.forEach((tag, index) => {
        if (isResizing) return;

        const timeoutId = setTimeout(() => {
            if (isResizing) return;

            tag.style.display = "flex";

            const tagWidth = tag.clientWidth,
                tagHeight = tag.clientHeight;

            const randomX =
                    Math.ceil(Math.random() * (boxWidth / 3)) *
                    (Math.round(Math.random()) ? 1 : -1),
                initPoseX = (boxWidth - tagWidth) / 2 + randomX,
                initPoseY = tagHeight;

            tag.style.left = `${initPoseX}px`;
            tag.style.top = `${initPoseY}px`;

            const tagBody = Bodies.rectangle(
                box.offsetLeft + initPoseX + tagWidth / 2,
                box.offsetTop + initPoseY + tagHeight / 2,
                tagWidth + 2,
                tagHeight + 2,
                {
                    restitution: 0.5,
                    friction: 0.5,
                    chamfer: { radius: 24 },
                    label: "tag",
                }
            );

            Events.on(engine, "afterUpdate", () => {
                tag.style.left = `${
                    tagBody.position.x - tagWidth / 2 - box.offsetLeft
                }px`;
                tag.style.top = `${
                    tagBody.position.y - tagHeight / 2 - box.offsetTop
                }px`;
                tag.style.transform = `rotate(${tagBody.angle}rad)`;
            });

            Composite.add(world, tagBody);
        }, 400 * (index + 1));

        // Add timeout to the array to clear them on resize
        timeouts.push(timeoutId);

        punchTags(tags, box);
    });
}

const outOfBoundsListeners = new Map<Matter.Body, () => void>();

function removeOutOfBorderTags(
    tb: Matter.Body,
    box: HTMLElement,
    tag: HTMLElement
) {
    if (
        tb.position.x < box.offsetLeft - 30 ||
        tb.position.x > box.clientWidth + box.offsetLeft + 30 ||
        tb.position.y < box.offsetTop - 30 ||
        tb.position.y > box.clientHeight + box.offsetTop + 30
    ) {
        Composite.remove(world, tb);
        tag.style.display = "none";

        // Remove listener if tag is out of bounds
        const listener = outOfBoundsListeners.get(tb);
        if (listener) {
            Events.off(engine, "afterUpdate", listener);
            outOfBoundsListeners.delete(tb);
        }
    }
}

/**
 * Click anywhere inside the box to punch the tags that are inside the explosion radius
 * Delete tag if out of bounds
 * @param tags array of tags
 * @param box box containing the tags
 */
export function punchTags(
    tags: NodeListOf<HTMLElement>,
    box: HTMLElement
): void {
    box.addEventListener("click", (event: MouseEvent) => {
        const clickX = event.offsetX,
            clickY = event.offsetY;

        const explosionRadius = 100,
            explosionForce = 0.05;

        const bodies = Composite.allBodies(world),
            tagBodies = bodies.filter((body) => body.label === "tag");

        for (const tag of tags) {
            const tagX = tag.offsetLeft + tag.clientWidth / 2,
                tagY = tag.offsetTop + tag.clientHeight / 2;

            // Distance tag - click
            const dx = tagX - clickX,
                dy = tagY - clickY,
                d = Math.sqrt(dx * dx + dy * dy);

            if (d <= explosionRadius) {
                const tb = tagBodies.find(
                    (body) =>
                        Math.abs(body.position.x - (tagX + box.offsetLeft)) <
                            1 &&
                        Math.abs(body.position.y - (tagY + box.offsetTop)) < 1
                );

                if (tb) {
                    const forceMagnitude =
                            (1 - d / explosionRadius) * explosionForce,
                        forceX = (dx / d) * forceMagnitude,
                        forceY = (dy / d) * forceMagnitude;

                    Matter.Body.applyForce(tb, tb.position, {
                        x: forceX,
                        y: forceY,
                    });

                    if (!outOfBoundsListeners.has(tb)) {
                        const listener = () =>
                            removeOutOfBorderTags(tb, box, tag);
                        outOfBoundsListeners.set(tb, listener);
                        Events.on(engine, "afterUpdate", listener);
                    }
                }
            }
        }
    });
}

let actionTimeout: ReturnType<typeof setTimeout> | null = null;
const timeouts: ReturnType<typeof setTimeout>[] = []; // Store all timeouts to clear them on resize

/**
 * - Set cursor to loading
 * - Remove everything related to Matter.js
 * - Hide the tags
 *
 * 500ms after :
 * - Re-init Matter.js
 * - Re-spawn tags
 * - Set cursor to default
 * @param section section containing the boxes
 * @param boxes boxes containing the tags
 * @param tags every tag inside the section
 * @param timeout time before re-init Matter.js
 */
export function resetSkillsSection(
    section: HTMLElement,
    boxes: NodeListOf<HTMLElement>,
    tags: NodeListOf<HTMLElement>,
    timeout: number = 200
): void {
    isResizing = true;

    document.body.style.cursor = "progress";

    // Stop all timeouts to prevent any action during the resize and clear the array
    timeouts.forEach(clearTimeout);
    timeouts.length = 0;

    // Delete every listener
    outOfBoundsListeners.forEach((listener) => {
        Events.off(engine, "afterUpdate", listener);
    });
    outOfBoundsListeners.clear();

    // Reset Matter.js
    // @ts-ignore
    Events.off(engine, "afterUpdate");
    Composite.clear(world, false, true);
    World.clear(world, false);
    Engine.clear(engine);

    tags.forEach((tag) => {
        tag.style.display = "none";
    });

    setTimeout(() => {
        Render.stop(render);
        Runner.stop(runner);

        if (actionTimeout) {
            clearTimeout(actionTimeout);
        }

        // After 500ms, re-init Matter.js and re-spawn tags
        actionTimeout = setTimeout(() => {
            isResizing = false;

            initMatter(section, boxes);

            boxes.forEach((box) => {
                const boxTags: NodeListOf<HTMLElement> =
                    box.querySelectorAll(".skill-box--tag");
                spawnTags(box, boxTags);
            });

            document.body.style.cursor = "default";
        }, timeout);
    }, 100);
}

/**
 * On resize :
 * - Remove everything related to Matter.js
 * - Hide the tags
 *
 * After resize :
 * - Re-init Matter.js
 * - Re-spawn tags
 * @param section section containing the boxes
 * @param boxes boxes containing the tags
 * @param tags every tag inside the section
 */
export function watchResize(
    section: HTMLElement,
    boxes: NodeListOf<HTMLElement>,
    tags: NodeListOf<HTMLElement>
): void {
    window.addEventListener("resize", () => {
        resetSkillsSection(section, boxes, tags, 500);
    });
}
