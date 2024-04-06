const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todomodel = require('./Model/todo')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/get', (req, res) => {
    Todomodel.find().then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:_id', (req, res) => {
    const {_id} = req.params;
    Todomodel.findByIdAndUpdate({_id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
    })

app.delete('/delete/:_id', (req, res) => {
    const {_id} = req.params;
    Todomodel.findByIdAndDelete({_id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add',  (req, res) => {
    console.log(req.body);
    const task = req.body.task;
    Todomodel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => {res.json(err)
        if (!task){
            res.status(400).send('No task provided')
        }
        else{
            res.send('Task added')
        }
    }
    )
    
})

mongoose.connect('mongodb+srv://22it140:sneh5721@cluster0.qeah5qm.mongodb.net/test')
.then(() => {
    console.log('DB Connected')
    app.listen(3001, () => {
        console.log('Server Started')
    })}
    )
.catch((err) => {
    console.log(err)
})
