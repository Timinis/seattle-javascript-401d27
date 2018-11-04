const mongoose = require('mongoose');

const shelterSchema = mongoose.Schema({
  name: { type: String, require: true },
  location: { type: String }
});

export default mongoose.model('shelter', shelterSchema);
