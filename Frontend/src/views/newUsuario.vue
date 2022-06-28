<template>
  <div class="newUsuario">
    <CreateUsuario />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUsuario from "@/components/CreateUsuario.vue";
export default {
  name: "newUsuario",
  components: {
    CreateUsuario,
  },
};
</script>