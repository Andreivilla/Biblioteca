<template>
  <div class="ShowAllBooks">
    <ul>
      <li v-for="livro in livros" :key="livro.id_livro">
        <h1 @click="setLivro(livro)" style="cursor: pointer">{{ livro.titulo }}</h1>
        <img
          style="cursor: pointer"
          class="cover"
          v-bind:src="livro.capalivro"
          @click="setLivro(livro)"
        />
        <br />
         autor: {{ livro.autores }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowAllBooks",
  el: "#ShowAllBooks",
  components: {},
  data() {
    return {
      livros: [],
      selectedLivro: {}
    };
  },
  methods: {
    async setLivro(livro) {
      this.$store.commit("updateLivro", livro);
          this.$router.push("/getlivro");
    },
  },
  async mounted() {
    const livros = await this.$store.dispatch("getLivros");
    this.livros = livros;
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cover {
  width: 35%;
  height: auto;
}
.ShowAllBooks  {
  display: flex;
}
</style>
