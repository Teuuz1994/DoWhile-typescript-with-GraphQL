import { Schema, model } from 'mongoose'

const Category = model('Categories', new Schema({
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
}))

export default Category