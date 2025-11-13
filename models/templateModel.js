import mongoose from 'mongoose';
const { Schema } = mongoose;

const templateSchema = new Schema({
  type: {type: String, default:'welcome'}, // String is shorthand for {type: String}
  content: String,
  labels: [{label: String}],
  author: String,
  comments: [{ body: String, date: Date }],
  createdAt: { type: Date, default: Date.now },
  
});

export const Templates = mongoose.model('Template', templateSchema);