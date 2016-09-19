import pg from 'pg'
import pgp from 'pg-promise'

// database connection
const user = 'postgres'
const pass = 'pg-chatapp'
const serverAddr = 'localhost'
const database = 'db'

export const conString = `postgres://${user}:${pass}@${serverAddr}/${database}`

const db = pgp()(conString)

export const query = (query, params) => db.any(query, params)

export const queryOnce = (query, params) => db.one(query, params)

export const createItemsTable = () => {
  return query(`CREATE TABLE items(
      id SERIAL PRIMARY KEY,
      text varchar(255) NOT NULL,
      date date,
    )`)
}

export const getItems = () => {
  return query(`SELECT * from items`)
}

export const addItem = ({ text, date = null }) => {
  return queryOnce(`INSERT INTO items (text, date)
    VALUES ($1, $2)
    RETURNING id;`, [text, date])
}

export const addItemWithId = (id, { text, date }) => {
  return queryOnce(`INSERT INTO items (text, date)
    VALUES ('${text}', '${date}')
    RETURNING id;`)
}

export const deleteItem = (id) => {
  return queryOnce(
    `DELETE FROM items WHERE id = ${id}
    RETURNING id;`
  )
}

// users

export const createUsersTable = () => {
  return query(`CREATE TABLE users(
    email varchar(255) NOT NULL PRIMARY KEY,
    password varchar(255) NOT NULL
  );`)
}

export const dropUsersTable = () => query('DROP TABLE users;')

export const findUserByEmail = (email) => {
  return queryOnce(
    `SELECT * FROM users WHERE email = '${email}';`
  )
}

export const getAllUsers = (email) => query('SELECT * FROM users;')

export const signupUser = ({ name, pass }) => {
  return query(`INSERT INTO users (email, password)
    VALUES ('${name}', '${pass}')`)
}
