<template>
  <div class="app-nav">
    <logo />
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news">News</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/foundation">The Foundation</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/artist">The Artist</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/early">Early Works</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/surrealism">Surrealism</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/graphic">Graphic Art</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/photorealism">Photorealism</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sculptures">Sculptures</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/poetic">Poetic Art</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/latest">Latest Aquisitions</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/biography">Biography</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/bibliography">Bibliography</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <logo :color="'blue'" />
  </div>
</template>

<script>
export default {};
</script>
