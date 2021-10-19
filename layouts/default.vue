<template>
  <div class="flex justify-content-start">
    <TheSidebar />
    <nav class="header bg-dark">
      header
      <slot></slot>
    </nav>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import TheSidebar from "~/components/TheSidebar.vue";
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