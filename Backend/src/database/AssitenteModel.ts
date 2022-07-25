import { Schema } from 'mongoose'
import mongoose from "mongoose";

const AssistenteModel = new Schema({
    id_assistente: Number,
    cpf: String,
    nome: String,
    bibliotecarioId: String,
},
{
  timestamps: true

})


export default mongoose.model('assistente', AssistenteModel)