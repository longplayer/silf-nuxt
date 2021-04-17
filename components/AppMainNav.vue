<template>
  <div class="app-main-nav">
    <logo class="m-0" />
    <nav>
      <ul>
        <li>
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news" class="nav-link">News</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/foundation" class="nav-link">The Foundation</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/artist" class="nav-link">The Artist</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/early" class="nav-link">Early Works</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/surrealism" class="nav-link">Surrealism</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/graphic" class="nav-link">Graphic Art</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/photorealism" class="nav-link">Photorealism</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sculptures" class="nav-link">Sculptures</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/poetic" class="nav-link">Poetic Art</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/latest" class="nav-link">Latest Aquisitions</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/biography" class="nav-link">Biography</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/bibliography" class="nav-link">Bibliography</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <logo :color="'blue'" class="mt-auto" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.app-main-nav {
  @apply flex flex-col justify-start
    border-r border-gray-900;

  & .app-logo {
    width: 100%;
  }

  & nav,
  & .app-logo {
    @apply flex-none;
  }

  & li {
    @apply m-0 p-0;
  }

  & .nav-link {
    @apply block h-8 px-2 border-b border-gray-900 transition-colors
      text-sm leading-8 text-center tracking-wide;

    &:hover {
      background-color: #64758c;
      color: #fff;
    }
  }

  & .nuxt-link-exact-active {
    @apply bg-gray-600;
  }
}
</style>
