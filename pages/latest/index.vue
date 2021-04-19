<template>
  <div class="container">
    <h1 class="page-title">Latest Aquisitions</h1>
    <viewer :dataSource="dataSource"></viewer>
  </div>
</template>

<script>
import db from "static/data/latest.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  }
};
</script>
