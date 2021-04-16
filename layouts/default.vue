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

<style lang="postcss" scoped>
/* layout */
.app-page {
  @apply grid;
  grid-template-columns: 220px 4fr;

  & .app-main-nav {
    background-color: royalblue;
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
    @apply font-light;
  }
}
</style>
