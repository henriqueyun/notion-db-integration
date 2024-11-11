import client from './client'

const find = async () => {
	return await client.databases.query({
		database_id: process.env.DB_ID
	})
}

export default { find }
