<template>
  <div class="wrapper">
    <SideBar />
    <div class="selection">
      <Bubles />
      <div class="card">
        <img :src="Hendra" alt="Hendra" />
        <div class="description" href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
          <h2>Hendra</h2>
          <p>Japanese Breakfast</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './components/sidebar/SideBar.vue';
import Bubles from './components/Bubles.vue';

import Aldwin from "./assets/images/team/aldwin.jpg";
import Burhan from "./assets/images/team/burhan.jpg";
import Hendra from "./assets/images/team/hendra.jpg";
import Miguel from "./assets/images/team/miguel.png";
import Murilo from "./assets/images/team/murilo.jpg";
import Simon from "./assets/images/team/simon.jpg";
import Synil from "./assets/images/team/synil.jpg";

const devTeams = ref([[
  { name: "aldwin", src: Aldwin },
  { name: "burhan", src: Burhan },
  { name: "hendra", src: Hendra },
  { name: "miguel", src: Miguel },
  { name: "murilo", src: Murilo },
  { name: "simon", src: Simon },
  { name: "synil", src: Synil },
]])
</script>

<style scoped lang="scss">
.selection {
  background-color: #0c192c;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .card {
    display: block;
    width: 300px;
    font-size: 1rem;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s;
    z-index: 9999;
    position: relative;

    img {
      height: 360px;
    }

    .description {
      display: block;
      padding: 1em 0.5em;
      color: #515151;
      position: relative;
      z-index: 9999;
      background-color: #ffffff;

      h2 {
        text-align: center;

        font: {
          size: 20px;
          weight: 700;
        }
      }

      p {
        text-align: center;
      }
    }
  }
}
</style>
