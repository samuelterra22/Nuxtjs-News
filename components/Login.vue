<template>
  <form class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8">
    <div class="relative border rounded mb-4 shadow appearance-none label-floating">
      <input
        id="username"
        class="w-full py-2 px-3 text-grey-darker leading-normal rounded"
        type="text"
        placeholder="Username"
      >
      <label
        class="absolute block text-grey-darker pin-t pin-l w-full px-3 py-2 leading-normal"
        for="username"
      >
        Username
      </label>
    </div>
    <div class="relative border rounded mb-4 shadow appearance-none label-floating">
      <input
        id="password"
        class="w-full py-2 px-3 text-grey-darker leading-normal rounded"
        type="password"
        placeholder="Password"
      >
      <label
        class="absolute block text-grey-darker pin-t pin-l w-full px-3 py-2 leading-normal"
        for="password"
      >
        Password
      </label>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-black hover:bg-black text-white py-2 px-4"
        type="button"
      >
        Sign In
      </button>
      <a
        class="inline-block align-baseline text-grey hover:text-grey-darker"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
</style>
