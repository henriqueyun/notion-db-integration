import 'dotenv/config'
import notionDbService from './notion-db-service'

describe('Notion DB Service tests', () => {
	test('Should find data', async function() {
		const data = await notionDbService.find()
		expect(data).not.toBeFalsy()
		expect(data.length).toBeGreaterThanOrEqual(0)
	})
})
