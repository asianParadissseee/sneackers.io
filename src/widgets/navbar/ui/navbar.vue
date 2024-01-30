<template>
  <header class="flex items-center justify-between border-b border-slate-300 p-8">
    <div class="flex items-center gap-5">
      <img src="/logo.png" alt="logo" class="w-10"/>
      <div>
        <h2 class="text-xl font-bold uppercase">Sneakers.IO</h2>
        <p class="text-slate-400">Магазин лучших кросовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li class="flex items-center cursor-pointer gap-3 hover:text-black ">
        <img src="/cart.svg" alt="card"/>
        <b class="text-slate-500">1205 $</b>
      </li>
      <li class="flex items-center cursor-pointer gap-3 hover:text-black">
        <img src="/heart.svg" alt="card"/>
        <span class="text-slate-500">Закладки</span>
      </li>
      <li class="flex items-center cursor-pointer gap-3 hover:text-black">
        <img src="/profile.svg" alt="card"/>
        <span class="text-slate-500">Профиль</span>
      </li>

    </ul>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>
