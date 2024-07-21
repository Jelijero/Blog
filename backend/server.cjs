const mongoose=require('mongoose')
const express=require('express')
const app=express()
const routes=require('./routes.cjs')
const cors=require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect( 'mongodb+srv://Bhavya:blackpink@cluster0.fulh1za.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0')   
  

app.use('/app',routes)
app.use('/side',routes)

app.listen(process.env.PORT || 3001,console.log('server  is up'))