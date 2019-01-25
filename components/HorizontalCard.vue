<template>
  <div class="w-full lg:w-1/2 p-3">
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img
        class="block h-auto w-full lg:w-48 flex-none bg-cover"
        src="https://stitches-cdn.hyperyolo.com/demo-bg.png"
      >
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black text-xl mb-2 leading-tight">
          Can coffee make you a better developer?
        </div>
        <p class="text-grey-darker text-base">
          Read more
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCard'
}
</script>

<style scoped>
</style>
