<template>
  <div class="home">
    <ShowAllLivros />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowAllLivros from "@/components/ShowAllLivros.vue";

export default {
  name: "Home",
  components: {
    ShowAllLivros,
  },
};
</script>

<style scoped>
.home {
  width: 25%;
}
</style>