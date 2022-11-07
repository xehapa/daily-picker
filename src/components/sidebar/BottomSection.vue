<template>
    <section>
        <div class="left">
            <h3>Available</h3>
            <div class="member">
                <img :src="Aldwin" alt="">
                <span class="name">Aldwin</span>
            </div>
            <div class="member">
                <img :src="Burhan" alt="">
                <span class="name">Burhan</span>
            </div>
            <div class="member">
                <img :src="Hendra" alt="">
                <span class="name">Hendra</span>
            </div>
            <div class="member">
                <img :src="Miguel" alt="">
                <span class="name">Miguel</span>
            </div>
            <div class="member">
                <img :src="Murilo" alt="">
                <span class="name">Murilo</span>
            </div>
            <div class="member">
                <img :src="Synil" alt="">
                <span class="name">Sy</span>
            </div>
            <div class="member">
                <img :src="Simon" alt="">
                <span class="name">Simon</span>
            </div>
        </div>
        <div class="right">
            <h3>On Leave</h3>
        </div>
    </section>
</template>

<script setup lang="ts">
import Aldwin from './../../assets/images/team/aldwin.jpg'
import Burhan from './../../assets/images/team/burhan.jpg'
import Hendra from './../../assets/images/team/hendra.jpg'
import Miguel from './../../assets/images/team/miguel.png'
import Murilo from './../../assets/images/team/murilo.jpg'
import Synil from './../../assets/images/team/simon.jpg'
import Simon from './../../assets/images/team/synil.jpg'
</script>

<style scoped lang="scss">
h3 {
    color: #11283c;
    font-weight: 700;
    text-transform: uppercase;
}

.left {
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    background-color: lighten(#11283c, 25);
    flex-wrap: wrap;
    padding: 20px;

    overflow: {
        x: hidden;
        y: auto;
    }

    ;
    height: 100%;
}

.right {
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    background-color: #e84778;

    overflow: {
        x: hidden;
        y: auto
    }

    ;
}

.member {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2px 10px;
    border-radius: 2px;
    margin-bottom: 5px;
    background: #fff center center no-repeat;
    box-sizing: border-box;
    height: 40px;
    box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s;

    &:hover {
        transform: translateY(-0.5rem) scale(1.0125);
        box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
    }

    &:last-child {
        margin-bottom: 0;
    }

    img {
        width: auto;
        height: 100%;
    }

    .name {
        font-size: 14px;
        text-transform: uppercase;
    }
}
</style>