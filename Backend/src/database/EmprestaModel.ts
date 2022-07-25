import { Schema } from 'mongoose'
import mongoose from "mongoose";

const EmprestaModel = new Schema({
  data_empr: Date,
  usuarioId: Number,
  itemEmprId: Number
},
{
  timestamps: true

})


export default mongoose.model('empresta', EmprestaModel)