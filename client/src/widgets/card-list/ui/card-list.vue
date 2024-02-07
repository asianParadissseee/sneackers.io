<script setup>
import {Card} from "@/entity/card/index.js";

defineProps({
  items: Array
})

const onClickAdd = () => {
  alert("Add")
}
const onClickFavourite =  () => {
  alert("Add")
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
        v-for="item in items"
        :key="item.id"
        :image-url="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :on-click-add="onClickAdd"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
