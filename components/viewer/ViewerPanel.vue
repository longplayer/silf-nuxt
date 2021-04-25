<template>
  <div v-if="data.isLoaded" class="app-viewer--view">
    <button
      class="app-viewer--view-close"
      title="close"
      @click.prevent="closeViewer"
    >
      close
    </button>
    <figure class="app-viewer--fig">
      <span
        class="app-viewer--image-wrapper"
        :width="data.activeData.width"
        :height="data.activeData.height"
      >
        <img
          :src="require(`@/assets/img/artworks/${data.activeData.image}`)"
          :alt="data.activeData.title"
          :width="data.activeData.width"
          :height="data.activeData.height"
          class="app-viewer--image"
        />
      </span>
      <figcaption class="app-viewer--caption">
        <h1 class="caption-title" v-html="data.activeData.title"></h1>
        <div class="caption-desc" v-html="data.activeData.description"></div>
      </figcaption>
    </figure>
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
  methods: {
    closeViewer(ev) {
      console.log("CLOSE VIEWER", ev);
    }
  }
};
</script>
