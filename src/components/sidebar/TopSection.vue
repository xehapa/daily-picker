<template>
    <section>
        <header>
            <h1>Sourcr Daily</h1>
            <h2>Tuesday, November, 08 2022</h2>
        </header>
        <div class="localTime">
            <div>
                <img :src="AU_FLAG" alt="AU" class="flag">
                <span>11:00 AM</span>
            </div>
            <div>
                <img :src="ID_FLAG" alt="AU" class="flag">
                <span>04:05 AM</span>
            </div>
            <div>
                <img :src="MY_FLAG" alt="AU" class="flag">
                <span>04:05 AM</span>
            </div>
            <div>
                <img :src="PH_FLAG" alt="AU" class="flag">
                <span>04:05 AM</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AU_FLAG from './../../assets/images/flag/au.png'
import ID_FLAG from './../../assets/images/flag/id.png'
import MY_FLAG from './../../assets/images/flag/my.png'
import PH_FLAG from './../../assets/images/flag/ph.png'
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    h1 {
        display: block;
        color: #e0e0e0;
        text-align: center;
        flex-basis: 100%;

        font: {
            size: 24px;
            weight: 700;
        }
    }

    h2 {
        @extend h1;

        font: {
            size: 20px;
            weight: normal;
            color: #ffffff;
        }
    }
}

.localTime {
    display: flex;
    grid-template-columns: auto 1fr;
    color: #e0e0e0;
    font-size: 14px;
    justify-content: center;
    flex-basis: 100%;

    div {
        display: flex;
        box-sizing: border-box;
        padding: 10px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;


        .flag {
            display: block;
            max-width: 100%;
            margin: 0;
            flex-basis: 100px;
            width: 10px;
        }

        span {
            display: block;
            width: 100%;
            text-align: center;

            font: {
                size: 16px;
                weight: bold
            }
        }
    }
}
</style>