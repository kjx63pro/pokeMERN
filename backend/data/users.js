import bcrypt, { genSaltSync } from 'bcryptjs';

const users = [
  {
    name: 'Satoshi',
    email: 'satoshi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kasumi',
    email: 'kasumi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Takeshi',
    email: 'takeshi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
