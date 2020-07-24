<template>
  <div class="home">
    <hero />
  </div>
</template>

<script>
// @ is an alias to /src
import hero from "../components/Hero.vue";

export default {
  name: "Home",
  components: {
    hero,
  },
};
</script>
