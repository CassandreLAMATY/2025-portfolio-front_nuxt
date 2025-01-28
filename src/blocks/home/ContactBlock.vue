<script setup lang="ts"></script>

<template>
    <section class="contact-container">
        <div class="contact">
            <div class="contact-top">
                <h2 class="title">Wanna get in touch&nbsp;?</h2>
                <p class="info">
                    You can contact me either by texting me on my social media
                    or by mail&nbsp;!
                </p>
                <div class="contact-top--content">
                    <div class="mail-container">
                        <span class="mail"
                            ><span>contact</span>@lamatycassandre.me</span
                        >
                        <button
                            class="mail-copy"
                            aria-label="copy"
                            type="button"
                            v-on:click="copyMailToClipboard()"
                            :disabled="isBtnDisabled"
                        >
                            <i class="mail-copy--icon fa-solid fa-copy"></i>
                        </button>
                    </div>
                    <div class="social-container">
                        <a
                            class="social-link"
                            href="https://www.behance.net/lamatycassandre"
                            target="_blank"
                        >
                            <button
                                class="social-btn"
                                type="button"
                                aria-label="Behance"
                            >
                                <font-awesome-icon
                                    :icon="['fab', 'square-behance']"
                                />
                                <span>Behance</span>
                            </button>
                        </a>

                        <a
                            class="social-link"
                            href="https://www.linkedin.com/in/cassandre-lamaty/"
                            target="_blank"
                        >
                            <button
                                class="social-btn"
                                type="button"
                                aria-label="Linkedin"
                            >
                                <font-awesome-icon
                                    :icon="['fab', 'linkedin']"
                                />
                                <span>Linkedin</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <!-- <form class="contact-form" action="">
                <h3 class="contact-form--title">Or you can use this nice form !</h3>
                <p class="contact-form--info">
                    <span>*</span> you’ll receive a confirmation by mail if you choose this option to make sure that I
                    received everything 🤗
                </p>

                <div class="form-content">
                    <div class="form-content--group form-content--group_line">
                        <div class="form-container" id="name-container">
                            <div class="form-title--container">
                                <label class="form-title" for="name">Who are you ?</label>
                            </div>

                            <div class="input-container">
                                <div>
                                    <input
                                        class="form-input"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe 🥸"
                                        v-model="name"
                                    />
                                </div>

                                <div class="validation"></div>
                            </div>
                        </div>

                        <div class="form-container" id="mail-container">
                            <div class="form-title--container">
                                <label class="form-title" for="mail">Type your e-mail here...</label>
                            </div>

                            <div class="input-container">
                                <input
                                    class="form-input"
                                    type="email"
                                    name="mail"
                                    id="mail"
                                    placeholder="john.doe@gmail.com"
                                    v-model="email"
                                />

                                <div class="validation"></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-content--group form-content--group_line object">
                        <div class="form-container" id="object-container">
                            <div class="form-title--container">
                                <label class="form-title" for="object">What do you want to talk about&nbsp;?</label>
                            </div>
                            <div class="form-select--container">
                                <div class="form-select--shadow"></div>
                                <select class="form-select" name="object" id="object" v-model="object">
                                    <option value="info">I would like some information</option>
                                    <option value="work">Let’s work together !</option>
                                    <option value="other">Something else</option>
                                </select>
                            </div>
                        </div>

                        <div class="object-container_other" v-if="object === 'other'">
                            <font-awesome-icon :icon="['fas', 'arrow-down']" class="object-arrow" />

                            <div>
                                <div class="input-container">
                                    <input
                                        class="form-input"
                                        type="text"
                                        name="object_other"
                                        id="object_other"
                                        placeholder="Snails"
                                        v-model="customObject"
                                    />

                                    <div class="validation"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-content--group">
                        <div class="form-container" id="message-container">
                            <div class="form-title--container">
                                <label class="form-title" for="message">Your message</label>
                            </div>

                            <div class="input-container">
                                <div class="message-area--container">
                                    <div class="message-shadow"></div>
                                    <textarea
                                        class="message"
                                        name="message"
                                        id="message"
                                        placeholder="I like snails 🐌"
                                        v-model="message"
                                    ></textarea>
                                </div>
                                <div class="validation">
                                    <span class="error">Please enter a valid name</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ButtonPrimary
                        title="Send my message !"
                        :icon="['fas', 'paper-plane']"
                        classes="btn_secondary btn_form"
                        type="submit"
                    />
                </div>
            </form> -->
        </div>
    </section>
</template>

<style>
@import url("@/assets/stylesheets/css/contact.css");
</style>
