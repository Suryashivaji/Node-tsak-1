const PORT=8000
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

let todays = new Date().toISOString()

fs.writeFileSync(`DateTime/${todays}.text`,`${todays}`,'utf8')

let data = fs.readFileSync(`DateTime/${todays}.text`,'utf8')

res.writeHead(200,{

"content-Type":"text/html"

})
res.end(data)


})

server.listen(PORT,()=>console.log(`App listen to the port ${PORT}`))
