<template>
  <div class="flex flex-col gap-5 ">
    <div class="flex gap-2">
          <span>
            Итого:
          </span>
      <div class="flex-1 border-b border-dashed"/>
      <b>9999 $.</b>
    </div>

    <div class="flex gap-2">
          <span>
            Налог:
          </span>
      <div class="flex-1 border-b border-dashed"/>
      <b>1500 $.</b>
    </div>
    <Button :disabled="false" :padding="true" :left-icon="true" class="mt-7">
      Оформить заказ
    </Button>
  </div>
</template>

<script setup>
import {Button} from "@/shared/ui/button/index.js";
</script>

<style lang="scss" scoped>

</style>
