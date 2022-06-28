<template>
  <div>
    <header class="header-container">
      <div>
        <router-link to="/"
          ><img
            src="../assets/logocompleta.png"
            alt=""
            class="logo"
            style="width: 100px; height: 100px"
        /> Biblioteca </router-link>
      </div>

      <div class="header-items-menu">
       <form @submit="findWork">
          <input type="text" v-model="titulo" />
          <input type="submit" value="Submit" />
        </form> 
      </div>

      <div class="header-items-cadastro">
        <router-link to="/newlivro" class="header-item-menu">Cadastrar Livro</router-link>
        <router-link to="/newassistente" class="header-item-menu">Cadastrar Assistente</router-link>
        <router-link to="/newbibliotecario" class="header-item-menu">Cadastrar Bibliotecario</router-link>
        <router-link to="/newusuario" class="header-item-menu">Cadastrar Usuario</router-link>
      </div>


    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  el: "#Header",
  components: {},
  data() {
    return {
      client: {},
      titulo: "",
      livro: {},
    };
  },
  mounted() {
    },

  methods: {

    async findWork(livro) {
      livro = {
        titulo: this.titulo,
      };
      console.log(JSON.stringify(livro));

      await this.$store.dispatch("getLivrobyName", JSON.stringify(livro))
        .then(() => {
          this.$router.push('/livros')
        
        });
    },
  },

  computed: {},
};
</script>

<style scoped>
* {
  background-color: rgb(7, 96, 148);
  display: block;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px;
  
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-items-menu {
  display: flex;
}

.header-item-menu {
  color: white;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  margin: 0 8px 0 8px;
  display: flex;
}
.header-items-authentication {
  display: flex;
}

</style>
