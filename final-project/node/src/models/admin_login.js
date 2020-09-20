import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = 'admin_login';

export async function create(params) {
  const [data] = await connection.insert(snakeize(params)).into(table).returning('*');

  return camelize(data);
}

export async function getAdminCredentials(data) {
  console.log('function ma pass garda aako data', data);
  const [dbData] = await connection.select('*').from(table);

  return dbData ? camelize(dbData) : null;
}
