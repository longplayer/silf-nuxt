<template>
  <div class="container">
    <h1 class="page-title">Early Works</h1>
    <viewer :dataSourceURL="'/data/early.json'"></viewer>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     artworks: []
  //   };
  // },
  // async fetch() {
  //   this.artworks = await this.$axios.$get("/data/early.json");
  // }
  // async asyncData({ $content, $axios }) {
  //   const data = {};
  //   if (process.server) {
  //     // console.log("server side");
  //     data.artworks = {};
  //     // FS is unable to found!!! even with: npm install --save fs
  //     // data.artworks = JSON.parse(
  //     //   fs.readFileSync("../static/data/early.json", "utf8")
  //     // );
  //   } else {
  //     // console.log("front side");
  //     data.artworks = await $axios.get("/data/early.json").then(res => {
  //       console.log(res.data, {
  //         artworks: res.data.artworks
  //       });
  //       return {
  //         artworks: res.data.artworks
  //       };
  //     });
  //   }
  //   console.log(data);
  //   // Classic $content loading:
  //   // const page = await $content("early").fetch();
  //   // return {
  //   //   page
  //   // };
  // },
  // computed() {
  //   // loadedArtworks() {
  //   //   return this
  //   // }
  // }
};
</script>
