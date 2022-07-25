import { Schema } from 'mongoose'
import mongoose from "mongoose";

const ItemEmprModel = new Schema({
  numRenovacoes: Number,
  livroid: Number
},
{
  timestamps: true

})


export default mongoose.model('ItemEmpr', ItemEmprModel)