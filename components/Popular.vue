<template>
  <div class="ma-md">
    <h3>Popular</h3>
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in popular" :key="index" class="col-md-3" style="padding: 4px">
          <img :src="item['img']" />
          <div class="caption">{{ item["caption"] }}</div>
          <div class="font-12" style="color: #4F4F4F">{{ item['publishDate'] }} Hari lalu</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
const popular = [
  {
    img: "../assets/images/popular/popular.png",
    caption: "Sering Keluar Rumah dan Kunjungi Daerah",
    publishDate: '2'
  },
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