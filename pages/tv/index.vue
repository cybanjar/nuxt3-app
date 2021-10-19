<script lang="ts">
export default {
  layout: "default",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
const searchText = ref("");
const myData = ref([]) as any;

async function onSearch() {
  const data = await fetch(`/api/hello?search=${searchText.value}`);
  const json = await data.json();
  console.log("json: ", json);

  myData.value = json;
}

// const { data }: { data: any } = await useFetch("/api/hello?search=girls", {});
// const { data } = await useAsyncData("searchData", () =>
//   $fetch("/api/hello?search=mash")
// );
</script>

<template>
  <div>
    <form class="centering" @submit.prevent="onSearch">
      <input type="text" v-model="searchText" autofocus />
      <button type="submit">Search TV</button>
    </form>

    <div class="flex">
      <div v-for="show in myData" :key="show">
        <img style="padding: 4px; border-radius: 20px" :src="show.show?.image?.medium" />
      </div>
    </div>
    <!-- <h1>Page Index</h1>
    {{ data }} -->
  </div>
</template>

<style>
.centering {
  display: flex;
  justify-content: center;
} 

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>