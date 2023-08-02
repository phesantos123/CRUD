'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () =>
  document.getElementById('modal').classList.remove('active')

const temClient = {
  nome: 'Pedro',
  email: 'ph.santos021@gmail.com',
  phone: '11-123456789',
  city: 'Diadema'
}

const createClient = client => {
  const db_client = JSON.parse(localStorage.getItem('db_client')) ?? []
  db_client.push(client)
  localStorage.setItem('db_client', JSON.stringify(db_client))
}

//eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
