const knex = require('knex')
const schema = require('./schema')

module.exports = async filename => {
  const db = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename }
  })
  await schema(db)
  return db
}
