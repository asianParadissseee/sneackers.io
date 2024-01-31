<script setup>

import {Card} from "@/entity/card/index.js";
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card :image-url="`/sneakers/sneakers-1.jpg`" :title="`Мужские кроссы Nike`" :price="1000" :is-added="true"/>
    <Card :image-url="`/sneakers/sneakers-2.jpg`" :title="`Мужские кроссы Puma`" :price="2000" :is-added/>
    <Card :image-url="`/sneakers/sneakers-3.jpg`" :title="`Мужские кроссы Adidas`" :price="100000" />
    <Card :image-url="`/sneakers/sneakers-4.jpg`" :title="`Мужские кроссы Lacoste`" :price="9999"/>
  </div>
</template>

<style scoped lang="scss">

</style>
