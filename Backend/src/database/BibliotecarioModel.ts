import { Schema } from 'mongoose'
import mongoose from "mongoose";

const BibliotecarioModel = new Schema({
  id_bibliotecario: Number,
  cpf: String,
  nome: String
},
{
  timestamps: true

})


export default mongoose.model('bibliotecario', BibliotecarioModel)