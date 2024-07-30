const mongoose = require('mongoose');

const ArticlaSchema = new mongoose.Schema({
    title: String,
    body: String,
    numberOfLikes: Number,
})
const Article = mongoose.model('Article', ArticlaSchema)


module.exports = Article



//mongodb+srv://ahhussein000:ahmed123@cluster0.pnpskkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0