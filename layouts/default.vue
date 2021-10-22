<template>
  <div class="flex justify-content-start">
    <TheSidebar />
    <div class="header bg-dark">
      <div class="flex justify-content-between items-center">
        <div class="pl-lg">
          <img
            class="pr-sm pt-sm"
            v-for="(item, index) in iconsHeader"
            :key="index"
            :src="item['img']"
          />
        </div>
        <div>
          <span class="font-12">
            {{ currentDate.substr(0,15) }}
          </span>
          <img
            class="pt-xs pr-sm"
            v-for="(i, index) in iconsHeaderRight"
            :key="index"
            :src="i['img']"
          />
        </div>
      </div>
      <div class="pa-md flex justify-content-start">
        <button class="button-live mr-md" type="button">Live</button>
        <img class="mr-lg" src="../assets/images/icons/live.png">
        <input type="text" class="button-search" placeholder="Masukkan kata kunci...">
      </div>
      <div>
        <img class="ads" src="../assets/images/icons/ads1.png">
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
  console.log(iconsHeader, iconsHeaderRight);
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

const iconsHeaderRight = [
  {
    img: "../assets/images/icons/Icon_FB.png",
  },
  {
    img: "../assets/images/icons/Icon_IG.png",
  },
  {
    img: "../assets/images/icons/Icon_Twitt.png",
  },
  {
    img: "../assets/images/icons/Icon_Youtube.png",
  },
];

let date = new Date();
const currentDate = date.toString();
console.log(currentDate.substr(0,15));

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

.button-live {
  background: #FF0000;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
}

.button-search {
  width: 30vw;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
}

.ads {
  width: 70vw;
  margin: 8px 16px;
}
</style>