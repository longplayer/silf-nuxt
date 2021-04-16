<template>
  <!-- <img class="app-logo" :src="require('../assets/img/logo-white.jpg')" /> -->
  <img class="app-logo" :src="coloredLogo" />
</template>

<script>
export default {
  data() {
    return {
      defaultColor: "white",
      altColor: "blue"
    };
  },

  props: {
    color: {
      type: String,
      required: false,
      default: "white"
    }
  },

  computed: {
    coloredLogo: function() {
      // there's only 2 colors
      let color =
        this.defaultColor === this.color ? this.defaultColor : this.altColor;

      return require(`@/assets/img/logo-${color}.jpg`);
    }
  }
};
</script>

<style>
.app-logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
