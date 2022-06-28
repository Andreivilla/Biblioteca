<template>
  <div class="CreateLivro">
    <form @submit="createLivro">
      <label for="editora">editora:</label><br />
      <input type="text" v-model="editora" /><br />
      <label for="isbn">isbn:</label> <br />
      <input type="text" v-model="isbn" /><br />
       <label for="titulo">titulo:</label><br />
      <input type="text" v-model="titulo" /><br />
       <label for="autores">autores:</label><br />
      <input type="text" v-model="autores" /><br />
      <label for="capalivro">capa do livro:</label><br />
      <input type="text" v-model="capalivro" /><br />
      <label for="colecaoId">colecao Id:</label><br />
      <input type="number" v-model="colecaoId" /><br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateLivro",
  el: "#CreateLivro",
  components: {},
  data() {
    return {
      editora : "",
      isbn : "",
      titulo : "" ,
      autores : "",
      capalivro : "",
      colecaoId : 1,
    };
  },
  mounted() {},
  methods: {
    async createLivro(livro) {

      livro = {
      editora: this.editora ,
      isbn: this.isbn ,
      titulo: this.titulo,
      autores: this.autores ,
      capalivro: this.capalivro ,
      colecaoId: this.colecaoId
      };
      console.log(JSON.stringify(livro));
      this.$store.dispatch("createLivro", JSON.stringify(livro)).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>