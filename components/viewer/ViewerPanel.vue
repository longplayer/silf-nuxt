<template>
  <div v-if="data.isLoaded" class="app-viewer--view">
    <figure class="app-viewer--fig">
      <img
        :src="require(`@/assets/img/artworks/${data.activeData.image}`)"
        :alt="data.activeData.title"
        :width="data.activeData.width"
        :height="data.activeData.height"
        class="app-viewer--image"
      />
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
  }
};
</script>
