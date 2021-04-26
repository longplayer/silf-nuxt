<template>
  <div class="app-page">
    <!-- lateral navigation -->
    <app-main-nav></app-main-nav>

    <!-- header -->
    <header>
      <h1>CHRISTIAN SILVAIN</h1>
      <h2>FOUNDATION</h2>
    </header>

    <!-- content -->
    <main class="page-content">
      <Nuxt />
    </main>
  </div>
</template>

<style lang="postcss">
/* layout */
.app-page {
  transform: translate(0, 10vh);
  @apply container mx-auto grid border border-gray-900;
  grid-template-columns: 220px 4fr;
  grid-template-rows: 80px 3fr;

  & .app-main-nav {
    @apply bg-gray-700 text-gray-200;
    @apply row-span-3;
  }

  & header {
    background-color: #3b5997;
    height: 80px;
    @apply col-span-2 col-start-2;
    @apply flex justify-between items-center;
  }

  & main {
    background-color: #e5e5e5;
    @apply row-span-2 col-span-2 col-start-2;
  }
}

/* typography */
header {
  & h1,
  & h2 {
    @apply text-white mx-4 text-xl font-normal;
  }

  & h2 {
    @apply font-light text-gray-200;
  }
}

/* components */
.app-viewer,
.tab-nav {
  @apply mt-8;
}

/* Viewer.vue */
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

  & .viewer-nav--tabs {
    /* common layout */
    @apply flex flex-nowrap items-stretch justify-between
    border-gray-900 mb-2 mr-2;
    background-color: #3b5997;

    @screen md {
      @apply justify-start;
    }

    & .viewer-nav--item {
      @apply flex-auto;

      @screen md {
        flex: 0 0 auto;
      }
    }

    & .viewer-nav--link {
      background-color: #3b5997;
      @apply flex p-6 h-full w-full items-center
      uppercase text-center justify-center text-gray-300 hover:text-gray-100 font-normal;

      @screen md {
        @apply px-2 py-2;
      }
      @screen lg {
        @apply px-4;
      }

      &.active {
        cursor: default;
        @apply bg-white hover:bg-white text-gray-900;
      }
      &.disabled {
        cursor: default;
        color: #6c8ac6;
      }
      &:hover {
        background-color: #5470ab;
      }

      & .viewer-nav--inner-link {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        @apply flex-auto;
      }
    }

    /* horizontal layout */
    &.tab-h {
      flex: 1 1 100%;
      @apply ml-auto border-b;

      & .viewer-nav--item {
        flex: 1 1 100%;
        @apply lg:flex-1;
      }
    }

    /* vertical layout */
    &.tab-v {
      @apply block relative h-full;
      @apply border-r;
      background-color: #3b5997;

      & .viewer-nav--item {
        flex: 1 1 100%;
      }

      @screen lg {
        & .viewer-nav--link {
          @apply text-left py-2;
        }
      }
    }
  }

  & .app-viewer--ingrid {
    @apply grid pr-2 mb-auto;
    gap: 1px;
    @screen lg {
      @apply gap-2;
    }

    &.viewer--grid-3 {
      @apply grid-cols-3;
    }
    &.viewer--grid-4 {
      @apply grid-cols-4;
    }
    &.viewer--grid-5 {
      @apply grid-cols-5;
    }
    &.viewer--grid-6 {
      @apply grid-cols-6;
    }
    &.viewer--grid-7 {
      @apply grid-cols-7;
    }
    &.viewer--grid-8 {
      @apply grid-cols-8;
    }

    & .app-viewer--item {
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

/* TabNav.vue */
.tab-nav {
  @apply grid border border-gray-900 w-full h-full;
  grid-template-columns: 1fr;
  background-color: inherit;

  /* vertical layout */
  &.tab-nav--v {
    @screen lg {
      grid-template-columns: 240px 1fr;
    }
  }
}
</style>
