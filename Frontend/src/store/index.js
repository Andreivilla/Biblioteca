import { createStore } from 'vuex'

import api from "../services/api";

const store = createStore({
    state() {
        return {
            livros: [],
            livro: {},
            reserva: {},
            empresta: {},
            assistente:{},
            bibliotecario:{},
            usuarios:[],
            usuario:{}
        }
    },
    mutations: {
        updateLivros(state, payload) {
            state.livros = payload;
        },
        updateLivro(state, payload) {
            state.livro = payload;
        },
        updateReserva(state,payload) {
            state.reserva = payload;
        },
        updateEmpresta(state,payload) {
            state.empresta = payload;
        },
        updateAssistente(state,payload) {
            state.assistente = payload;
        },
        updateBibliotecario(state,payload) {
            state.bibliotecario = payload;
        },
        updateUsuario(state,payload) {
            state.usuario = payload;
        },
        updateUsuarios(state,payload) {
            state.usuarios = payload;
        }
        

    },
    actions: {
        getLivros({ commit }) {
            return new Promise((resolve, reject) => {
                api
                    .get("/livros")
                    .then((response) => {
                        commit('updateLivros', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    });
            })
        },

        getLivrobyName({ commit }, livro) {
            return new Promise((resolve, reject) => {
                api
                    .post("/livro", livro)
                    .then((response) => {
                        commit('updateLivros', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    });
            })
        },

        createLivro({ commit }, livro) {
            return new Promise((resolve, reject) => {
                api
                    .post("/livronovo", livro)
                    .then((response) => {
                        commit('updateLivro', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },

        createReserva({commit},reserva){
            return new Promise((resolve, reject) => {
                api
                    .post("/reservanova", reserva)
                    .then((response) => {
                        commit('updateReserva', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },

        createEmpresta({commit},empresta){
            return new Promise((resolve, reject) => {
                api
                    .post("/empresta", empresta)
                    .then((response) => {
                        commit('updateEmpresta', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },
        createAssistente({ commit }, assistente) {
            return new Promise((resolve, reject) => {
                api
                    .post("/assistentenovo", assistente)
                    .then((response) => {
                        commit('updateAssistente', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },
        createBibliotecario({ commit }, bibliotecario) {
            return new Promise((resolve, reject) => {
                api
                    .post("/bibliotecarionovo", bibliotecario)
                    .then((response) => {
                        commit('updateBibliotecario', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },
        createUsuario({ commit }, usuario) {
            return new Promise((resolve, reject) => {
                api
                    .post("/usuarionovo", usuario)
                    .then((response) => {
                        commit('updateUsuario', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },
        resetEmprestimo({ commit }, livro) {
            return new Promise((resolve, reject) => {
                api
                    .post("/resetEmpr", livro)
                    .then((response) => {
                        commit('updateLivro', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },
        getEmprestimoByLivro({ commit }, livro) {
            return new Promise((resolve, reject) => {
                api
                    .post("/findemprestimolivro", livro)
                    .then((response) => {
                        commit('updateLivro', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },
    },
    getters: {}
})

export default store;