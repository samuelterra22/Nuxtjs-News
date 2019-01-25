<template>
  <div>
    <the-navbar />
    <nuxt />
    <the-footer />
  </div>
</template>

<style>
</style>
<script>
import TheNavbar from '../components/TheNavbar'
import TheFooter from '../components/TheFooter'

export default {
  name: 'DefaultLayout',
  components: { TheFooter, TheNavbar }
}
</script>

<style scoped>
</style>
