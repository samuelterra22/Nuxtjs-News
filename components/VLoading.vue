<template>
  <div class="w-full h-full">
    <template v-if="isLoading">
      <div class="w-full h-full flex items-center text-center flex-wrap text-white">
        <div class="lds-facebook m-auto">
          <div /><div /><div />
        </div>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'VLoading',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: 'Loading'
    }
  },
  data: () => ({})
}
</script>

<style scoped>
</style>
