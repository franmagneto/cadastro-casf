const knex = require('knex')
const schema = require('./schema')

module.exports = async filename => {
  const db = knex({
    client: 'sqlite3',
    connection: {
      filename
    }
  })
  return await schema(db)
}
