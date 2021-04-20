<template>
  <div class="container">
    <h1 class="page-title">Bibliography</h1>
    <TabNav :dataSource="page" :tanvanOpt="config"></TabNav>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const page = await context.$content("bibliography").fetch();
    console.log(page);
    return { page };
  },
  data() {
    return {
      config: {
        horizontalNav: false
      }
    };
  }
};
</script>
