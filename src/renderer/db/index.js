import knex from 'knex'
import schema from './schema'

export default async (filename) => {
  const db = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename },
  })
  await schema(db)
  return db
}
