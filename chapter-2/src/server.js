import express from 'express'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import { createRequire } from 'module'



const app = express()
const PORT = process.env.PORT || 5000


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// const require = createRequire(import.meta.url)
// const path = path.join(__dirname, 'index.html')
// const fs = require('fs')
// const filePath = path.join(__dirname, 'index.html')
// const fileContent = fs.readFileSync(filePath, 'utf8')
// const fileContentWithScript = fileContent.replace(
//   '</body>',
//   '<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script></body>'
// )
// fs.writeFileSync(filePath, fileContentWithScript, 'utf8')


app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

