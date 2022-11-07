<template>
    <div class="sidebar">
        <TopSection class="top" />
        <BottomSection class="bottom" />
    </div>
</template>

<script setup lang="ts">
import TopSection from './TopSection.vue'
import BottomSection from './BottomSection.vue'
</script>

<style scoped lang="scss">
.sidebar {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;

    .top {
        height: 40%;
        padding: 20px;
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .bottom {
        height: 60%;
        display: flex;
        flex-basis: 100%;
        justify-content: center;
    }
}
</style>