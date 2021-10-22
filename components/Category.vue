<template>
  <div class="ma-md">
    <h3>Category</h3>
    <div class="container" style="overflow-x: scroll; overflow-y: hidden; height: 200px">
      <div class="row text-center" style="width: auto; white-space:nowrap;">
        <div v-for="(item, index) in category" :key="index" class="col-md-2" style="display: inline-block">
          <img :src="item['img']" />
          <div class="caption">{{ item["caption"] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
const category = [
  {
    img: "../assets/images/category/news.png",
    caption: "News",
  },
  {
    img: "../assets/images/category/entertainment.png",
    caption: "Entertainment",
  },
  {
    img: "../assets/images/category/sport.png",
    caption: "Sport",
  },
  {
    img: "../assets/images/category/lifestyle.png",
    caption: "Lifestyle",
  },
  {
    img: "../assets/images/category/travel.png",
    caption: "Travel",
  },
  {
    img: "../assets/images/category/otomotif.png",
    caption: "Otomotif",
  },
  {
    img: "../assets/images/category/health.png",
    caption: "Health",
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