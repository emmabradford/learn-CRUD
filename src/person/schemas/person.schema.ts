import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  partner: String,
  home: String,
  weapon: Array,
});
