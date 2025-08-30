import http from 'http'

const server = http.createServer((req,res) =>{
    res.end("Hello World");
})

const port = 8000
server.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})