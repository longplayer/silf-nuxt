<template>
  <div class="container">
    <h1 class="page-title">Sculptures</h1>
    <viewer :dataSource="dataSource" :compConfig="{ gridSize: 4 }"></viewer>
  </div>
</template>

<script>
import db from "static/data/sculptures.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  }
};
</script>
