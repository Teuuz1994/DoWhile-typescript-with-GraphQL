import { model, Schema } from 'mongoose'

const VideoSchema = model('Videos', new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories'
  }
}))

export default VideoSchema