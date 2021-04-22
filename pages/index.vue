<template>
  <div class="container">
    <div class="content">
      <h1 class="title">CHIRSTIAN SILVAIN</h1>
      <h2 class="sub-title">Foundation</h2>
      <div class="logo-box">
        <Logo />
        <div class="fb-box">
          <a
            href="https://www.facebook.com/Christian-Silvain-Stichting-1732606323636467/?fref=ts"
            target="_blank"
          >
            <img
              src="~/assets/img/fb-default.png"
              alt="Facebook logo"
              title="Visit our Facebook page"
              class="logo-w"
            />
          </a>
        </div>
      </div>
      <NuxtLink :to="'/news'" class="enter-site">Enter</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home"
};
</script>

<style lang="postcss" scoped>
.container {
  background-image: url("~/assets/img/introback.jpg");
  @apply m-0 bg-center bg-cover bg-no-repeat w-full min-w-full text-center justify-end items-center;
}

.content {
  width: 240px;
  transform: translate(-100%, 0);
}

.title {
  @apply text-2xl text-white;
}

.sub-title {
  @apply text-xl text-gray-400 uppercase;
}

.logo-box {
  @apply relative my-2;
}

.fb-box {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  @apply absolute;

  & a img {
    @apply transition-transform;
  }
  & a:hover img {
    transform: scale(1.1);
  }
}

.app-logo {
  @apply w-full;
}
.enter-site {
  @apply uppercase text-gray-400;

  &:hover {
    @apply text-gray-200;
  }
}
</style>
