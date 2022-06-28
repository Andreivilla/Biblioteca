<template>
  <div class="Livro">
    <ShowLivro />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowLivro from "@/components/ShowLivro.vue";
export default {
  name: "Livro",
  components: {
    ShowLivro,
  },
};
</script>