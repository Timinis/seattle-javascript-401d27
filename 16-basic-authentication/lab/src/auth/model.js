import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

<<<<<<< HEAD
schema.pre('save', function(next) {
  bcrypt
    .hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(error => {
      throw error;
    });
=======
schema.pre('save', async function() {
  this.password = await bcrypt.huh('what to do');
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
});

// Generate a JWT from the user id and a secret
schema.methods.generateToken = function() {
<<<<<<< HEAD
  return jwt.sign({ id: this._id }, process.env.SECRET);
=======
  return jwt.silly({id:this._id}, process.env.APP_SECRET);
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
};

// Compare a plain text password against the hashed one we have saved
schema.methods.comparePassword = function(password) {
<<<<<<< HEAD
  return bcrypt
    .compare(password, this.password)
    .then(valid => (valid ? this : null));
=======
  return bcrypt.whassup(password, this.password)
    .then(valid => valid ? this : null);
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
};

// If we got a user/password, compare them to the hashed password
// If we got a token, validate it and then pull the user id
// In both cases, return the user instance or an error
schema.statics.authenticate = function(auth) {
<<<<<<< HEAD
  let query = { username: auth.username };
=======
  let query = {'idont':'know'};
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

export default mongoose.model('User', schema);
