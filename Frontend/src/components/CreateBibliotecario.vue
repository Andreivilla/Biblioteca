<template>
  <div class="CreateBibliotecario">
    <form @submit="createBibliotecario">
      <label for="cpf">cpf:</label><br />
      <input type="text" v-model="cpf" /><br />
       <label for="nome">nome:</label><br />
      <input type="text" v-model="nome" /><br />
  
 
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateBibliotecario",
  el: "#CreateBibliotecario",
  components: {},
  data() {
    return {
      cpf : "",
      nome: "",

    };
  },
  mounted() {},
  methods: {
    async createBibliotecario(bibliotecario) {
      bibliotecario = {
      cpf : this.cpf,
      nome: this.nome,
      };
      console.log(JSON.stringify(bibliotecario));
      this.$store.dispatch("createBibliotecario", JSON.stringify(bibliotecario)).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>