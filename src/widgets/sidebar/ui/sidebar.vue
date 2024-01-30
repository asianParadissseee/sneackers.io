<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70">
    <aside class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <div class="flex items-center gap-3">
        <Arrow/>
        <Title>
          Корзина
        </Title>
      </div>
    </aside>
  </div>
</template>

<script setup>
import {Title} from "@/shared/ui/title/index.js";
import Arrow from "@/shared/assets/arrow.vue";
</script>

<style lang="scss" scoped>

</style>
