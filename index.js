const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Article = require('./models/Article');

app.use(express.json());


mongoose.connect('mongodb+srv://ahhussein000:ahmed123@cluster0.pnpskkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/').then(() => {
    console.log('Connected to MongoDB...');
}).catch((err) => { console.log(err) });






// app.get('/getusers', (red, res) => {
//     Article.find({}).then((user) => { res.send(user); }).catch((error) => {
//         console.log(error)
//         res.status(500).send('Internal Server Error');
//     });
//     // res.send('Hello World!');
// })

// app.post('/getusers/:quary', (red, res) => {
//     const quary = req.params.quary
//     Article.insertOne({ title: req.params.quary, body: req.params.quary, numberOfLikes: req.params.quary }).then((user) => { res.send(user); }).catch((error) => {
//         console.log(error)
//         res.status(500).send('Internal Server Error');
//     });

//     // Article.find({}).then((user) => { res.send(user); }).catch((error) => {
//     //     console.log(error)
//     //     res.status(500).send('Internal Server Error');
//     // });
//     // res.send(quary);
//     console.log(quary);
// })



app.post('/articls', async (req, res) => {
    const newArtical = new Article()
    try {
        newArtical.title = req.body.title
        newArtical.body = req.body.body
        newArtical.numberOfLikes = 0
        await newArtical.save();
        res.json(newArtical);
    } catch (error) {
        res.status(500).send('Internal Server Error');
        console.log(error);
    }
})


app.get('/articls', async (req, res) => {

    // Article.find({}).then((article) => { res.send(article) }).catch((err) => { res.send(err) })

    try {
        const allArticls = await Article.find()
        res.status(200).json(allArticls)
        console.log("success")
    } catch (error) {
        console.log("error")
        res.status(500).send('Internal Server Error');

    }


})
app.get('/articls/:articleID', async (req, res) => {

    const id = req.params.articleID

    try {
        const article = await Article.findById(id)
        res.json(article)
        return
    } catch (error) {
        console.log("error", id)
    }

})

app.delete('/articls/:articleID', async (req, res) => {

    const id = req.params.articleID

    try {
        const article = await Article.findByIdAndDelete(id)
        res.json(article)
        return
    } catch (error) {
        console.log("error", id)
    }

})

app.delete('/articls/', async (req, res) => {

    const id = req.params.articleID

    try {
        const article = await Article.deleteMany()
        res.json(article)
        return
    } catch (error) {
        console.log("error", id)
    }

})


app.update('/articls/:articleID', async (req, res) => {

    const id = req.params.articleID

    try {
        const article = await Article.findByIdAndDelete(id)
        res.json(article)
        return
    } catch (error) {
        console.log("error", id)
    }

})

app.listen(3001, () => {
    console.log('Server is up and running on port 3001');
})