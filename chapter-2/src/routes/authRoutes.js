import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'


const router = express.Router()


router.post('/register', async (req, res) => {
  const {username, password} = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword])
    res.status(201).json({message: 'User created'})
  } catch (error) {
    res.status(500).json({error: 'User creation failed'})
  }
})
router.post('/login', async (req, res) => {
  const {username, password} = req.body

  try {
    const user = db.get('SELECT * FROM users WHERE username = ?', [username])
    if (!user) {
      return res.status(401).json({error: 'Invalid credentials'})
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({error: 'Invalid credentials'})
    }

    const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1h'})
    res.json({token})
  } catch (error) {
    res.status(500).json({error: 'Login failed'})
  }
})




export default router

