const express = require('express')

const router = express.Router()
router.use(express.json())

const Usuario = require('./usuarioModel')

router.get('/', async (req, res) => {
  res.send({ message: 'todos os usuarios' })
})

router.get('/:id', async (req, res) => {
  res.send({})
})

router.get('/nome/:nome', async (req, res) => {
  res.send({})
})

router.post('/', async (req, res) => {
  //salvar
  res.send({})
})

router.put('/:id', async (req, res) => {
  //atualizar
  res.send({})
})

router.delete('/:id', async (req, res) => {
  //delete
  res.status(204).send({})
})

router.post('/:id/Email', async (req, res) => {
  res.send({})
})

router.put('/:id/Email/:idEmail', async (req, res) => {
  res.send({})
})

module.exports = router;
