<template>
  <div class="container">
    <h1 class="page-title">Surrealism</h1>
    <viewer :dataSource="dataSource"></viewer>
  </div>
</template>

<script>
import db from "static/data/surrealism.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  }
};
</script>
