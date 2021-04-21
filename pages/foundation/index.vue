<template>
  <div class="container">
    <h1 class="page-title">The Foundation</h1>
    <TabNav :dataSource="page"></TabNav>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const page = await context.$content("foundation").fetch();
    return { page };
  }
};
</script>
