<script setup>
import {inject} from "vue";

defineProps(
    {
      id: Number,
      imageUrl: String,
      title: String,
      price: Number,
      isFavorite: Boolean,
      isAdded: Boolean,
      onClickFavorite: Function,
      onClickAdd: Function
    }
)

</script>
<template>
  <div
      class="relative  bg-white border border-slate-100 rounded-3xl p-10 cursor-pointer hover:-translate-y-2 transition hover:shadow-xl">
    <img @click="onClickFavorite" :src="isFavorite ? '/like-1.svg' :  '/like-2.svg'" alt="like"
         class="absolute top-8 left-8"/>
    <img :src="imageUrl" alt="sneakers"/>
    <p class="mt-2">
      {{ title }}
    </p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-500">Цена:</span>
        <b>{{ price }} $</b>
      </div>
      <img @click="onClickAdd" :src="isAdded ? `/plus.svg` : `/checked.svg` " alt="plus"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
