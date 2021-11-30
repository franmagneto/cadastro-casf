import knex, { Knex } from 'knex';
import schema from './schema';

async function db(filename: string): Promise<Knex> {
  const db = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename },
  });
  await schema(db);
  return db;
}

export default db;