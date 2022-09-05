
<template>
  <div class="ShowLivro">
    <h1>{{ livro.titulo }}</h1>
        <img
          class="cover"
          v-bind:src="livro.capalivro"
        />
        <br />
         autor: {{ livro.autores }} <br>
         editora: {{livro.editora}} <br>
         isbn: {{livro.isbn}} <br>
        <br>
      <input type="number" v-model="usuarioId" />
      <button @click="createreserva">Reservar</button>
      <button @click="createempresta" >Emprestar</button>
      <button @click="devolverlivro" >Devolver</button>

  </div>
</template>

<script>
// import api from "../services/api";
export default {
  name: "ShowLivro",
  el: "#ShowLivro",
  components: {},
  props: {},
  data() {
    return {
      livro: {},
      reserva: {},
      empresta : {},
      usuarioId: {},
      avaliable: false
    };
  },
  async mounted() {
    this.livro = this.$store.state.livro;

    let empresta = {
      itemEmprId: this.livro.id_livro
    }
    this.empresta = await this.$store.dispatch("getEmprestimoByLivro", JSON.stringify(empresta));

  },
  computed: {},
  methods: {
    async createreserva(reserva){
    reserva = {
        livroid: this.livro.id_livro,
        usuarioId: this.usuarioId
      };
      console.log(JSON.stringify(reserva));
      this.$store.dispatch("createReserva", JSON.stringify(reserva)).then(() => {
        this.$router.push("/");
      });
    },

    async createempresta(empresta){
    empresta = {
        livroid: this.livro.id_livro,
        usuarioId: this.usuarioId
      };
      console.log(JSON.stringify(empresta));
      this.$store.dispatch("createEmpresta", JSON.stringify(empresta)).then(() => {
        this.$router.push("/");
      });
    },
    async devolverlivro(livro){
      livro = {
        livroid: this.livro.id_livro
      };
      this.$store.dispatch("resetEmprestimo", JSON.stringify(livro)).then(() => {
        this.$router.push("/");
    });
  },

  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.cover {
  width: 300px;
  height: auto;
}
</style>
