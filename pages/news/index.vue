<template>
  <div class="container">
    <h1>News</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'page',
  async asyncData ({ $content }) {
    const page = await $content('news').fetch()
    return {
      page
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex-wrap w-full;
}
</style>
