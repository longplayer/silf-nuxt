<template>
  <div class="app-page">
    <!-- header -->
    <header>
      <h1 class="title-header">CRHISTIAN SILVAIN</h1>
      <h2 class="title-header">FOUNDATION</h2>
    </header>

    <!-- lateral navigation -->
    <app-main-nav></app-main-nav>

    <!-- content -->
    <div class="page-content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.title-header {
  @apply text-xl font-normal;
}
</style>
