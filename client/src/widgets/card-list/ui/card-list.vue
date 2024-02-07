<script setup>
import {Card} from "@/entity/card/index.js";
import {inject} from "vue";

defineProps({
  items: Array
})

const onClickAdd = () => {
  alert("Add")
}

const emit = defineEmits(["addToFavorite"])

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
        :is-favorite="item.isFavorite"
        :id="item.id"
        :on-click-favorite="()=>emit('addToFavorite', item)"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
