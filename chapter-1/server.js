const express = require('express')
const app = express()
const PORT = 8383

const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
}


//web html
app.get('/', (req, res) => {
    console.log('bckend dev', req.query)
    res.send(`
        <html>
            <head>
                <title>My Web Page</title>
            </head>
            <body>
                <h1>Hello World</h1>
                <p>This is a simple web page.</p>
                <p>Data: ${JSON.stringify(data)}</p>
            </body>
        </html>
    `)
}
)

//web api
app.get('/api/data', (req, res) => {
    console.log('Hello World', req.query)
    res.json(data)
}
)

app.listen(PORT, () => console.log (`Server has started on: ${PORT}`))


