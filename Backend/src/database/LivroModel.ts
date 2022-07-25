import { Schema } from 'mongoose'
import mongoose from "mongoose";

const LivroModel = new Schema({
    id_livro: Number,
    editora: String,
    isbn: String,
    titulo: String,
    autores: String,
    capalivro: String,
    colecaoId: Number,
    itemEmprid: Number
},
{
  timestamps: true

})


export default mongoose.model('livro', LivroModel)