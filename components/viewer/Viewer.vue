<template>
  <div class="app-viewer">
    <!-- grid -->
    <viewer-grid-layout
      :data="{ isLoaded, config, list }"
      v-on:dataChanged="listenNewData"
    ></viewer-grid-layout>

    <!-- viewer -->
    <transition name="fade" mode="out-in">
      <component
        :is="'viewer-panel'"
        :data="{ isLoaded, activeData }"
        :key="activeData.id"
      ></component>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    compConfig: {
      type: Object,
      default: () => {
        return this.defaultConfig;
      }
    }
  },

  data() {
    return {
      activeData: {},
      isLoaded: false,
      list: [],
      config: {},
      defaultConfig: {
        gridSize: 6,
        nPanels: 1
      }
    };
  },

  created() {
    this.list = this.addIndex(this.dataSource);
    this.isLoaded = this.list.length > 0;
    this.activeData = this.isLoaded ? this.list[0] : {};
    this.config = { ...this.defaultConfig, ...this.compConfig }; // merge default with provided config
  },

  methods: {
    showItem(data) {
      this.activeData = data;
    },
    listenNewData(data) {
      // console.log(">change data", data);
      this.showItem(data);
    },
    addIndex(array) {
      return array.map((obj, index) => {
        Object.defineProperties(obj, {
          id: {
            value: index,
            writable: true
          }
        });
        return obj;
      });
    }
  }
};
</script>
