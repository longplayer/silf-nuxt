<template>
  <div class="container">
    <div class="inner-container">
      <h1 class="page-title">Biography</h1>
      <nuxt-content :document="page" />
    </div>
    <PageAside class="aside-container" :dataSource="asideContent"></PageAside>
  </div>
</template>

<script>
import asideContent from "static/data/bio-aside.json";
export default {
  async asyncData({ $content }) {
    const page = await $content("biography").fetch();
    return { page, asideContent };
  },
  mounted() {
    console.log(asideContent);
  }
};
</script>

<style lang="postcss" scoped>
/* 2 Cols layout withthe aside on right hand side */
.container {
  @apply flex flex-wrap justify-between items-stretch;
}
.inner-container {
  flex: 1 1 100%;
  @screen lg {
    flex: 1 1 0%;
  }
}
.aside-container {
  @apply ml-0 mt-8 bg-gray-300;
  max-width: inherit;

  @screen lg {
    @apply ml-16;
    flex: 0 0 auto;
    max-width: 190px;
  }
}
</style>
