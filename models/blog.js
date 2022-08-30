const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({

    date: {
        type: String
    },
    name: {
        type: String
    },
    link: {
        type: String
    },
    icon: {
        type: String
    },
    visitor: {
        type: Number
    }
});

const Blog = mongoose.model('Top_website' , blogSchema) ;
module.exports = Blog;

