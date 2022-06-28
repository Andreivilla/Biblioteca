<template>
  <div class="CreateUsuario">
    <form @submit="createUsuario">
        <label for="nome">nome:</label><br />
        <input type="text" v-model="nome" /><br />
        <label for="numLivros">numero de Livros:</label><br />
        <input type="number" v-model="numLivros" /><br />
        <label for="endereco">endereco:</label><br />
        <input type="text" v-model="endereco" /><br />
        <label for="telefone">telefone:</label><br />
        <input type="text" v-model="telefone" /><br />
        <label for="idtipo">id tipo:</label><br />
        <input type="number" v-model="idtipo" /><br />


  
 
        <br />
        <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateUsuario",
  el: "#CreateUsuario",
  components: {},
  data() {
    return {
      nome: "",
      multas: 0,
      numLivros: 0,
      endereco: "",
      telefone: "",
      idtipo: 1

    };
  },
  mounted() {},
  methods: {
    async createUsuario(usuario) {
      usuario = {
      nome: this.nome,
      multas: this.multas,
      numLivros:this.numLivros,
      endereco: this.endereco,
      telefone: this.telefone,
      idtipo: this.idtipo
      };
      console.log(JSON.stringify(usuario));
      this.$store.dispatch("createUsuario", JSON.stringify(usuario)).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>