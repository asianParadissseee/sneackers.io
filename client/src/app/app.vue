<template>
  <div class="bg-white w-4/5 h-full rounded-xl m-auto shadow-xl mt-14">
    <base-layout>
      <div class="p-10">
        <div class="flex justify-between items-center p-10">
          <Title :bold="true" :margin-bottom="8">
            Все кроссовки
          </Title>
          <div class="flex  gap-3">
            <Select/>
            <Input :placeholder="'Поиск...'"/>
          </div>
        </div>
        <CardList :items="data"/>
      </div>
    </base-layout>
  </div>
</template>

<script setup>
import {BaseLayout} from "./providers/layouts/index.js";
import {Title} from "@/shared/ui/title/index.js";
import {CardList} from "@/widgets/card-list/index.js";
import {Input} from "@/shared/ui/input/index.js";
import {Select} from "@/shared/ui/select/index.js";
import {onMounted, ref} from "vue";

const sneakers = ref([])

onMounted()

const data = [
  {
    id: 1,
    title: "Кроссовки Black Puma",
    price: 9987,
    imageUrl: "/sneakers/6.jpg"
  },
  {
    id: 2,
    title: "Кроссовки Black Nike",
    price: 9987,
    imageUrl: "/sneakers/1.jpg"
  },
  {
    id: 3,
    title: "Кроссовки White Adidas",
    price: 9987,
    imageUrl: "/sneakers/2.jpg"
  },
  {
    id: 4,
    title: "Кроссовки Black Puma",
    price: 9987,
    imageUrl: "/sneakers/3.jpg"
  },
]

</script>

<style scoped>

</style>
