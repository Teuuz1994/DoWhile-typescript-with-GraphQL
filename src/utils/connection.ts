import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})