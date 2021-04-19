<template>
  <div class="container">
    <h1 class="page-title">Graphic Art</h1>
    <viewer :dataSource="dataSource"></viewer>
  </div>
</template>

<script>
import db from "static/data/graphic.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  }
};
</script>
