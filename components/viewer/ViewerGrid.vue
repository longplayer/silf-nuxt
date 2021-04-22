<template>
  <div
    v-if="data.isLoaded"
    class="app-viewer--grid"
    :class="'grid-cols-' + data.config.gridSize"
  >
    <div
      class="app-viewer--item"
      v-for="(item, index) in data.list"
      :class="{ selected: selectedIndex === index }"
      :key="index"
    >
      <a
        href="#"
        class="app-viewer--link"
        :title="item.title"
        @click.prevent="newData({ data: data.list[index], index })"
      >
        <img
          class="app-viewer--thumb"
          :src="require(`@/assets/img/artworks/${item.thumb}`)"
          :alt="item.title"
        />
        <span class="app-viewer--label">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  methods: {
    newData(payload) {
      this.selectedIndex = payload.index;
      this.$emit("dataChanged", payload.data);
    }
  }
};
</script>
