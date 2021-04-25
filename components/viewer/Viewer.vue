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

<style lang="postcss">
.app-viewer {
  @apply flex w-full h-full;
  background-color: inherit;
  max-width: 710px;
  @screen xl {
    max-width: inherit;
  }

  & .app-viewer--grid {
    max-width: inherit;
    flex: 0 2 auto;

    @screen md {
      max-width: 110px;
    }
    @screen lg {
      flex: 0 0 300px;
      max-width: 300px;
    }
  }
  & .app-viewer--view {
    @apply flex-auto hidden md:block;
    flex: 0 3 auto;

    @screen lg {
      flex: 1 1 auto;
    }
  }
}

.app-viewer--grid {
  user-select: none;

  & .app-viewer--ingrid {
    @apply grid pr-2 mb-auto;
    gap: 1px;
    @screen lg {
      @apply gap-2;
    }
  }

  & .app-viewer--item {
    text-overflow: hidden;
    overflow: hidden;

    & .app-viewer--link {
      @apply relative block w-full h-full;

      & .app-viewer--thumb {
        @apply object-cover h-full w-full transition-opacity duration-700 opacity-50;
      }

      & .app-viewer--label {
        @apply absolute invisible;
      }

      &:hover .app-viewer--thumb,
      &:active .app-viewer--thumb,
      &:focus .app-viewer--thumb {
        @apply opacity-100;
      }
    }

    &.selected {
      & .app-viewer--link {
        @apply border border-gray-300;
        border-color: red;

        & .app-viewer--thumb {
          @apply opacity-100;
        }
      }
    }
  }
}
.app-viewer--view {
  @apply relative bg-gray-300;

  & .app-viewer--view-close {
    @apply absolute top-0 right-0 block md:hidden;
  }

  & .app-viewer--fig {
    @apply w-full h-full flex flex-wrap;
    @screen xl {
      @apply flex-nowrap;
    }

    & .app-viewer--image-wrapper {
      flex: 1 1 auto;
      background-color: #545454;
      @apply block;
      @screen xl {
        flex: 0 0 auto;
      }
    }

    & .app-viewer--image {
      flex: 1 1 auto;
      width: 100%;
      height: auto;
      @screen xl {
        @apply object-contain h-full;
      }
    }
    & .app-viewer--caption {
      width: 100%;
      height: 30%;
      flex: 1 1 auto;
      @apply p-4 h-auto;
      @screen xl {
        @apply ml-auto;
      }

      & .caption-title {
        @apply font-bold pb-4;
      }
      & .caption-desc {
      }
    }
  }
}

/* .fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 1s;
} */
</style>
