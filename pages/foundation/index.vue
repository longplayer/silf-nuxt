<template>
  <div class="container">
    <h1 class="page-title">The Foundation</h1>
    <TabNav :data="page"></TabNav>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const page = await context.$content("foundation").fetch();

    console.log(">>ASYNCDATA");
    console.log(context, page, context.app.data());

    page.body.children.forEach(v => {
      if (v.type === "element") {
        console.log(v.tag, v.props.className);
      }
    });

    return {
      page
    };
  },
  data() {
    return {
      tabData: []
    };
  },
  mounted() {
    console.log(">>MOUNTED");
    // console.log(this.tabData);

    // this.page.body.children.forEach(v => {
    //   if (v.type === "element") {
    //     console.log(v.tag, v.props.className);
    //   }
    // });
  }
};
</script>
