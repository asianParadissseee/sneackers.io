<template>
  <div class="bg-white w-4/5 h-full rounded-xl m-auto shadow-xl mt-14">
    <base-layout>
      <div class="p-10">
        <div class="flex justify-between items-center p-10">
          <Title :bold="true" :margin-bottom="8">
            Все кроссовки
          </Title>
          <div class="flex  gap-3">
            <SortItems  :sort-items="sortItems?.value" :on-change-select="onChangeSelect"/>
            <Input :placeholder="'Поиск...'"/>
          </div>
        </div>
        <CardList :items="items"/>
      </div>
    </base-layout>
  </div>
</template>

<script setup>
import {BaseLayout} from "./providers/layouts/index.js";
import {Title} from "@/shared/ui/title/index.js";
import {CardList} from "@/widgets/card-list/index.js";
import {Input} from "@/shared/ui/input/index.js";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import {SortItems} from "@/features/sort-items/index.js";

const items = ref([])
const sortItems = ref("")

onMounted(async () => {
  try {
    const {data} = await axios.get("https://480bfc7b3642f183.mokky.dev/items")
    items.value = data
  } catch (e) {
    console.log(e)
  }
})

watch(sortItems, async () => {
  try {
    const {data} = await axios.get("https://480bfc7b3642f183.mokky.dev/items?sortBy=" + sortItems?.value)
    items.value = data
  } catch (e) {
    console.log(e)
  }
})

const onChangeSelect = (e) => {
  sortItems.value = e.target.value
}

</script>

<style scoped>

</style>
