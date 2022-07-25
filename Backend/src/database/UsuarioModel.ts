import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UsuarioModel = new Schema({
  id_usuario: Number,
  multas: Number,
  numLivros: Number,
  nome: String,
  endereco: String,
  telefone: String,
  idtipo: String
},
{
  timestamps: true

})


export default mongoose.model('usuario', UsuarioModel)