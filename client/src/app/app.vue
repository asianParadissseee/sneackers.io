<template>
  <div class="bg-white w-4/5 h-full rounded-xl m-auto shadow-xl mt-14">
    <base-layout>
      <div class="p-10">
        <div class="flex justify-between items-center p-10">
          <Title :bold="true" :margin-bottom="8">
            Все кроссовки
          </Title>
          <div class="flex  gap-3">
            <SortItems :sort-items="filters.sortItems" :on-change-select="onChangeSelect"/>
            <SearchQuery :on-change-input="onChangeInput"/>
          </div>
        </div>
        <CardList :items="items" @add-to-favorite="addToFavorite"/>
      </div>
    </base-layout>
  </div>
</template>

<script setup>
import {BaseLayout} from "./providers/layouts/index.js";
import {Title} from "@/shared/ui/title/index.js";
import {CardList} from "@/widgets/card-list/index.js";
import {onMounted, reactive, ref, watch, provide} from "vue";
import axios from "axios";
import {SortItems} from "@/features/sort-items/index.js";
import {SearchQuery} from "@/features/search-query/index.js";

const items = ref([])

const filters = reactive({
  sortItems: "title",
  searchQuery: ""
})

const fetchFavorites = async () => {
  try {
    const {data: favoriteData} = await axios.get(`https://480bfc7b3642f183.mokky.dev/favorites`)
    items.value = items?.value.map(item => {
      const favorites = favoriteData.find(favorite => favorite.parentId === item.id)

      if (!favorites) {
        return item
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorites.id
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }
      item.isFavorite = true
      const {data} = axios.post(`https://480bfc7b3642f183.mokky.dev/favorites`, obj)
      item.favoriteId = data.id
      console.log(data)
    } else {
      item.isFavorite = false
      await axios.delete(`https://480bfc7b3642f183.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (e) {
    console.log(e)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortItems,
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const {data} = await axios.get(`https://480bfc7b3642f183.mokky.dev/items`, {
      params
    })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (e) {
    console.log(e)
  }
}
onMounted(async () => {
  await fetchItems();
  await fetchFavorites()
})

watch(() => filters.sortItems, fetchItems)

const onChangeSelect = (e) => {
  filters.sortItems = e.target.value
}
const onChangeInput = (e) => {
  console.log(e.target.value)
  filters.searchQuery = e.target.value
}
</script>

<style scoped>

</style>
