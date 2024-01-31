<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70">
    <aside class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <SidebarHead/>
      <BasketList/>
      <SidebarDetails/>
    </aside>
  </div>
</template>

<script setup>
import SidebarHead from "./sidebar-head.vue";
import {BasketList} from "@/widgets/basket-list/index.js";
import SidebarDetails from "./sidebar-details.vue";
</script>

<style lang="scss" scoped>

</style>
