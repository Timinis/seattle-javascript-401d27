// import storage from '../storage/data-store.js';
import uuid from 'uuid';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  shelter: { type: mongoose.Schema.Types.ObjectId, ref: 'shelter' }
});

catSchema.pre('findOne', function(next) {
  this.populate('shelter');
  next();
});

// class Cats {
//   constructor(config) {
//     this.id = uuid();
//     this.name = (config && config.name) || '';
//     this.weight = (config && config.weight) || '';
//   }

//   save() {
//     return storage.save(this);
//   }
//   static fetchAll() {
//     return storage.getAll();
//   }

//   static findOne(id) {
//     return storage.get(id);
//   }

//   static deleteOne(id) {
//     return storage.delete(id);
//   }
// }

export default mongoose.model('cats', catSchema);
