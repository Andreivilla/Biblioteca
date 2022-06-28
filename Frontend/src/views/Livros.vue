<template>
  <div class="Livros">
    <ShowLivros />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowLivros from "@/components/ShowLivros.vue";

export default {
  name: "Livros",
  components: {
    ShowLivros,
  },
};
</script>

<style scoped>
.home {
  width: 25%;
}
</style>