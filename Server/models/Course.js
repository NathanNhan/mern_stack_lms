const slug = require('slugify');
const mongoose = require('mongoose');
// const mongooseDelete = require('mongoose-delete');
const Slugify = require('../middlewares/Slugify');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, require: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true }
}, {
    timestamps: true
});

    Course.pre('save', Slugify);

// Course.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all'
// });

module.exports = mongoose.model('Course', Course);