<template>
  <section class="bg-white py-4 font-sans">
    <div class="container m-auto max-w-xl flex items-baseline justify-start border-b-2 border-grey-light mb-10">
      <h2
        v-for="(item) in items"
        :key="item.key"
        class="text-base font-bold tracking-wide uppercase py-4 px-6 hover:text-black"
        :class="selected === item.key ? 'border-b-2 border-black -mb-4' : 'text-grey-dark cursor-pointer'"
        @click="selectTab(item)"
      >
        {{ item.value }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    items: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    selectTab(item) {
      if (item.key !== this.selected) {
        this.$emit('selected', item)
      }
    }
  }
}
</script>

<style scoped>
</style>
