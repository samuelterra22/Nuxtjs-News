<template>
  <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
    <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
      <a
        :href="article.url"
        target="_blank"
      >
        <img
          class="w-full h-64"
          :src="article.urlToImage"
          alt="Sunset in the mountains"
        >
      </a>
      <div class="p-6 flex flex-col justify-between ">
        <h3
          class="font-medium text-grey-darkest mb-4 leading-normal"
          :title="article.title "
        >
          {{ article.title | truncate(44) }}
        </h3>
        <p class="inline-flex items-center">
          <span class="text-grey-dark text-sm">
            Leia Mais
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
