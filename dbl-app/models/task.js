var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
  user: Number,
  name: String,
  description: String,
  category: String,
  finished: Boolean,
  endDate: Date,
  startDate: { type: Date, default: Date.now },
  steps: [{name: String, description: String, finished: Boolean}]
});
module.exports = mongoose.model('Task', TaskSchema);
