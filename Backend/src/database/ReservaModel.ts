import { Schema } from 'mongoose'
import mongoose from "mongoose";

const LivroModel = new Schema({
    data_reserva: Date,
    usuarioId: Number,
    itemEmprId: Number
},
{
  timestamps: true

})


export default mongoose.model('reserva', LivroModel)