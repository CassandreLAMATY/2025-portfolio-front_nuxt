<template>
    <div class="loader-container">
        <FunLogo />
    </div>
</template>

<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100000;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to bottom, #99715b, #b6936d);
}

.loader-container::after {
    content: " ";

    box-sizing: border-box;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100001;

    display: block;

    width: calc(100% - 48px);
    height: 224px;
    margin: 24px;

    background-image: url("~/assets/images/svg/HeaderStars.svg");
    background-repeat: repeat-x;
    mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.02) 10%,
        rgba(0, 0, 0, 0.05) 20%,
        rgba(0, 0, 0, 0.1) 30%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.4) 60%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 0.6) 80%,
        rgba(0, 0, 0, 0.7) 90%,
        rgba(0, 0, 0, 1) 100%
    );
}

.loader-container > svg {
    fill: #443433;

    width: 48px;
    height: 48px;

    animation: logoAnimation 1s ease-in-out infinite;
}

@keyframes logoAnimation {
    0% {
        transform: rotate(0deg);
    }
    20% {
        transform: rotate(0deg);
    }
    80% {
        transform: rotate(370deg);
    }
    90% {
        transform: rotate(355deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
