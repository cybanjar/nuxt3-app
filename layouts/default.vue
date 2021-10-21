<template>
  <div class="flex justify-content-start">
    <TheSidebar />
    <div class="header bg-dark">
      <div class="flex justify-content-between">
        <div class="pl-lg pt-sm">
          <img class="pr-sm" v-for="(item, index) in iconsHeader" :key="index" :src="item['img']" />
        </div>
        <div>
          ok
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import TheSidebar from "~/components/TheSidebar.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log(iconsHeader);
});

const iconsHeader = [
  {
    img: "../assets/images/icons/Icon_Arkadia1.png",
  },
  {
    img: "../assets/images/icons/Icon_suara.png",
  },
  {
    img: "../assets/images/icons/Icon_bolatimes.png",
  },
  {
    img: "../assets/images/icons/Icon_hitekno.png",
  },
  {
    img: "../assets/images/icons/Icon_dewiku.png",
  },
  {
    img: "../assets/images/icons/Icon_mobimoto.png",
  },
  {
    img: "../assets/images/icons/Icon_guideku.png",
  },
  {
    img: "../assets/images/icons/Icon_Himedik.png",
  },
  {
    img: "../assets/images/icons/Icon_serbada.png",
  },
];
</script>

<style lang="scss">
ul {
  padding: 0 48px;
  li {
    list-style: none;
    padding: 4px 0;
    cursor: pointer;
  }
}

.follow-us {
  padding: 0 48px;
  img {
    padding: 0 6px 0 0;
    flex-wrap: wrap;
  }
}
</style>