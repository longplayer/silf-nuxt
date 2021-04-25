<template>
  <div class="container">
    <h1 class="page-title">Poetic Art</h1>
    <viewer :dataSource="dataSource" :compConfig="config"></viewer>
  </div>
</template>

<script>
import db from "static/data/poetic.json";
export default {
  computed: {
    dataSource() {
      return db;
    }
  },
  data() {
    return {
      config: {
        gridSize: 6,
        nPanels: 4
      }
    };
  }
};
</script>
