/**
 * Created by dran on 12/31/15.
 */
var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
    name: String,
    badge: Number,
    dob: {type: Date, default: Date.now},
    isloved: Boolean

});

mongoose.model('Blob', blobSchema);
