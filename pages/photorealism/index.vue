<template>
  <div class="container">
    <h1 class="page-title">Photorealism</h1>
    <viewer :dataSource="dataSource"></viewer>
  </div>
</template>

<script>
import db from "static/data/photorealism.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  }
};
</script>
