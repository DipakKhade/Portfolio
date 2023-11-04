const express=require('express');
const app=express();
// const path=require('path');
// const ejs=require('ejs')
const port =3000;

app.set('view engine','ejs')
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.render('index')
})


app.get('/home',(req,res)=>{
    res.render('index')
})


app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.listen(port, () => {
    console.log(`site is live on port http://localhost:${port}`)
  })
