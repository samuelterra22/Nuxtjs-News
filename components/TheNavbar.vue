<template>
  <nav class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden items-center">
    <div class="flex items-center">
      <a
        href="/"
        class="mr-4 w-32"
      >
        <img
          src="https://stitches-cdn.hyperyolo.com/logo.png"
          class="rounded-full w-full"
          alt="logo"
        >
      </a>
      <input
        type="search"
        placeholder="Search"
        class="text-sm transition focus:outline-0 border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-1 px-2 pl-10 appearance-none leading-normal ds-input"
      >
      <ul class="text-sm text-grey-dark list-reset flex items-center">
        <li>
          <a
            href="#"
            class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline"
          >
            Status
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline"
          >
            Questions
          </a>
        </li>
      </ul>
    </div>
    <ul class="text-sm text-grey-dark list-reset flex items-center">
      <li>
        <a
          href="#"
          class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline"
        >
          Log In
        </a>
      </li>
      <li>
        <button class="bg-black hover:bg-grey-darker text-white ml-4 py-2 px-3">
          Sign Up
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
</style>
