import storage from '../storage/data-store.js';
import uuid from 'uuid';

class Cats {
  constructor(config) {
    this.id = uuid();
    this.name = (config && config.name) || '';
    this.weight = (config && config.weight) || '';
  }

  save() {
    return storage.save(this);
  }
  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }
}

export default Cats;
