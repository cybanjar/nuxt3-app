<template>
  <div class="ma-md">
    <h3>Top Playlist</h3>
    <div class="container">
      <div class="row text-center">
        <div v-for="(item, index) in topPlaylist" :key="index" class="col-md-3">
          <img :src="item['img']" />
          <div class="caption">{{ item["caption"] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
const topPlaylist = [
  {
    img: "../assets/images/top/kuliner.png",
    caption: "Suara Jelajah Makanan",
  },
  {
    img: "../assets/images/top/music.png",
    caption: "Konser Musik Akustik",
  },
  {
    img: "../assets/images/top/seleb.png",
    caption: "Eksklusif Interview Artis",
  },
  {
    img: "../assets/images/top/backpack.png",
    caption: "Wisata Alam Eksotik",
  },
  // {
  //   img: "../assets/images/top/suara.png",
  //   caption: "Berita Terbaik sepanjang 2019",
  // },
];
</script>

<style lang="scss">
.top-paylist {
  position: absolute;
  img {
    width: 210px;
    height: auto;
    position: relative;
  }
  .caption {
    text-align: center;
    font-size: 14px;
  }
}
</style>