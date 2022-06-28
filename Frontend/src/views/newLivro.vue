<template>
  <div class="newLivro">
    <CreateLivro />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateLivro from "@/components/CreateLivro.vue";
export default {
  name: "newLivro",
  components: {
    CreateLivro,
  },
};
</script>