<template>
  <div class="newBibliotecario">
    <CreateBibliotecario />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateBibliotecario from "@/components/CreateBibliotecario.vue";
export default {
  name: "newBibliotecario",
  components: {
    CreateBibliotecario,
  },
};
</script>