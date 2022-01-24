import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ender Gülger',
    email: 'ender@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sherlock Holmes',
    email: 'Sherlock@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
