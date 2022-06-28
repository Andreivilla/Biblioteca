<template>
  <div class="Createassistente">
    <form @submit="createAssistente">
      <label for="cpf">cpf:</label><br />
      <input type="text" v-model="cpf" /><br />
       <label for="nome">nome:</label><br />
      <input type="text" v-model="nome" /><br />
       <label for="bibliotecarioId">bibliotecario Id:</label><br />
      <input type="number" v-model="bibliotecarioId" /><br />
 
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Createassistente",
  el: "#Createassistente",
  components: {},
  data() {
    return {
      cpf : "",
      nome: "",
      bibliotecarioId : 1

    };
  },
  mounted() {},
  methods: {
    async createAssistente(assistente) {
      assistente = {
      cpf : this.cpf,
      nome: this.nome,
      bibliotecarioId : this.bibliotecarioId
      };
      console.log(JSON.stringify(assistente));
      this.$store.dispatch("createAssistente", JSON.stringify(assistente)).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>