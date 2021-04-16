<template>
  <div class="container">
    <div class="content">
      <h1 class="title">CHIRSTIAN SILVAIN</h1>
      <h2 class="sub-title">Foundation</h2>
      <div class="logo-box">
        <Logo />
        <div class="fb-box">
          <img
            src="~/assets/img/fb-default.png"
            alt="Facebook logo"
            title="Visit our Facebook page"
            class="logo-w"
          />
        </div>
      </div>
      <a href="news" class="uppercase text-gray-400">Enter</a>
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
  @apply m-0 bg-center bg-cover bg-no-repeat w-full min-w-full justify-end;
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
  @apply relative;
}

.fb-box {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  @apply absolute;
}

.app-logo {
  @apply w-full;
}
</style>
