<template>
  <div class="container">
    <h1 class="page-title">Early Works</h1>
    <viewer :dataSource="dataSource" :compConfig="{ gridSize: 5 }"></viewer>
  </div>
</template>

<script>
import db from "static/data/early.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  }
};
</script>
