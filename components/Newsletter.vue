<template>
  <section class="antialiased font-sans w-full bg-grey-lighter text-left text-black py-8">
    <div class="container mx-auto max-w-xl py-8 font-normal leading-normal">
      <h3 class="text-2xl">
        Grow Your Business
      </h3>
      <p class="">
        Build high performing teams, establish design practices, mentor and grow the next generation of great
        designers, and design interfaces and experiences.
      </p>
      <div class="max-w-sm mt-4 sm:flex">
        <input
          type="email"
          class="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0"
          name="email"
          placeholder="Enter your email"
          required=""
        >
        <button
          class="uppercase text-sm text-white focus:outline-0 w-full sm:w-auto bg-black hover:bg-grey-darkest focus:bg-grey-light tracking-wide px-6"
        >
          Subscribe
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style scoped>
</style>
