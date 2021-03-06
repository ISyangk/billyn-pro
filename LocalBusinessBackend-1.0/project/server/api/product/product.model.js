'use strict';

var mongoose = require('mongoose'),
  mUtilities = require('mongoose-utilities'),
  Schema = mongoose.Schema;

var ProductSchema = new Schema({
  // reference the user account of the creator
  createdBy: {
    type: String,
    ref: 'User'
  },
  title: String,
  body: {
    type: String,
    default: ''
  },
  // list of media associated with this document
  media: [{
    type: String,
    ref: 'Media'
  }],
  price: Number,
  url: String,
  // we use this field when the first time news created
  createdAt: Number,
  // we use this field when the news is updated
  modifiedAt: Number
});

ProductSchema.plugin(mUtilities.pagination);

module.exports = mongoose.model('Product', ProductSchema);
