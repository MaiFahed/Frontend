const express = require('express')
const request = require ('request')
const router = express.Router()

router.use('/books/info/:id', async(req, res)=>{
    const id = req.params.id
    const url = 'http://localhost:3000/books/info/'+id
    request({url, json:true}, (error,  {body})=>{
           if(error){
               return res.staus(404).send(error)
           }
           return res.status(200).send(body)
        })
})
router.use('/books/search/:topic', (req, res)=>{
    const topic = req.params.topic
    const url = 'http://localhost:3000/books/search/'+topic
    request({url, json:true}, (error,  {body})=>{
           if(error){
               return res.staus(404).send(error)
           }
           return res.staus(200).send(body)
        })
})
router.use('/books/purchase/:id', (req, res)=>{
    const id = req.params.id
    const url = 'http://localhost:3002/books/purchase/'+id
    request({url, json:true}, (error, {body})=>{
        if(error){
            return res.send(error)
        }
        return res.status(200).body
    })
})

module.exports = router 