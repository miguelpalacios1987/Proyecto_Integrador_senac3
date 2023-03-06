const express = require ('express')

const app = express

const port = 3000

app.get ('/',(rec,res)=> {

    res.send('Hello Word1')
})
app.listem(port,()=>{
    console.log(`o servidor esta sendo executado em http: localhost: ${port}
    `)
})
