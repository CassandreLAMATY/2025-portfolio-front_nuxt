import { HandleError } from "~/utils/HandleError";

/**
 * Copy a string to the clipboard
 * @param text - The string to copy
 */
export function useClipboard() {
    /**
     * Copies a string to the clipboard using the appropriate method
     * @param text The string to copy
     */
    const copyToClipboard = async (text: string): Promise<void> => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text);
            } catch (e: unknown) {
                throw new Error(
                    "An error occurred while copying text:\n" +
                        HandleError.ensureError(e)
                );
            }
        } else {
            fallbackCopyTextToClipboard(text);
        }
    };

    /**
     * Fallback method for copying text to the clipboard if the Clipboard API is unavailable
     * @param text The string to copy
     */
    const fallbackCopyTextToClipboard = (text: string): void => {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "1px";
        textArea.style.height = "1px";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand("copy");
        } catch (e: unknown) {
            throw new Error(HandleError.ensureError(e).message);
        } finally {
            document.body.removeChild(textArea);
        }
    };

    return {
        copyToClipboard,
    };
}
