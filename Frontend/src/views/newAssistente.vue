<template>
  <div class="newAssistente">
    <CreateAssistente />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateAssistente from "@/components/CreateAssistente.vue";
export default {
  name: "newAssistente",
  components: {
    CreateAssistente,
  },
};
</script>