<template>
    <div class="bubbles">
        <span style="--1:11;"></span>
        <span style="--1:12;"></span>
        <span style="--1:24;"></span>
        <span style="--1:10;"></span>
        <span style="--1:14;"></span>
        <span style="--1:23;"></span>
        <span style="--1:18;"></span>
        <span style="--1:16;"></span>
        <span style="--1:19;"></span>
        <span style="--1:20;"></span>
        <span style="--1:22;"></span>
        <span style="--1:25;"></span>
        <span style="--1:18;"></span>
        <span style="--1:21;"></span>
        <span style="--1:15;"></span>
        <span style="--1:13;"></span>
        <span style="--1:26;"></span>
        <span style="--1:17;"></span>
        <span style="--1:13;"></span>
        <span style="--1:28;"></span>
        <span style="--1:28;"></span>
        <span style="--1:13;"></span>
        <span style="--1:17;"></span>
        <span style="--1:26;"></span>
        <span style="--1:13;"></span>
        <span style="--1:15;"></span>
        <span style="--1:21;"></span>
        <span style="--1:18;"></span>
        <span style="--1:25;"></span>
        <span style="--1:22;"></span>
        <span style="--1:20;"></span>
        <span style="--1:19;"></span>
        <span style="--1:16;"></span>
        <span style="--1:18;"></span>
        <span style="--1:23;"></span>
        <span style="--1:14;"></span>
        <span style="--1:10;"></span>
        <span style="--1:24;"></span>
        <span style="--1:12;"></span>
        <span style="--1:11;"></span>
        <span style="--1:11;"></span>
        <span style="--1:12;"></span>
        <span style="--1:24;"></span>
        <span style="--1:10;"></span>
        <span style="--1:14;"></span>
        <span style="--1:23;"></span>
        <span style="--1:18;"></span>
        <span style="--1:16;"></span>
        <span style="--1:19;"></span>
        <span style="--1:20;"></span>
        <span style="--1:22;"></span>
        <span style="--1:25;"></span>
        <span style="--1:18;"></span>
        <span style="--1:21;"></span>
        <span style="--1:15;"></span>
        <span style="--1:13;"></span>
        <span style="--1:26;"></span>
        <span style="--1:17;"></span>
        <span style="--1:13;"></span>
        <span style="--1:28;"></span>
    </div>
</template>

<style scoped lang="css">
.bubbles {
    display: flex;
    position: absolute;
    z-index: 100;
    left: 0;
    bottom: 0;
    height: 100%;
}

.bubbles span {
    background-color: #A0D9A6;
    border-radius: 50%;
    height: 30px;
    margin: 0 4px;
    position: relative;
    width: 30px;
    box-shadow: 0 0 0 10px #A0D9A644,
        0 0 50px #A0D9A6,
        0 0 100px #A0D9A6;
    animation: animate 15s linear infinite;
    animation-duration: calc(125s / var(--1));
}

.bubbles span:nth-child(even) {
    background-color: #EB99A1;
    box-shadow: 0 0 0 10px #EB99A144,
        0 0 50px #EB99A1,
        0 0 100px #EB99A1;
}

@keyframes animate {
    0% {
        transform: translateY(100vh) scale(0);
    }

    100% {
        transform: translateY(-10vh) scale(1);
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        color: white;
        background: dimgray;
        height: 70px;
    }
}
</style>