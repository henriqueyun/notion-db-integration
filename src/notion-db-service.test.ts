import 'dotenv/config'
import notionDbService from './notion-db-service'

describe('Notion DB Service tests', () => {
	test('Should create data', async function () {
		const response = await notionDbService.create({
			company: 'Treina Aí',
			campaign: 'Descubra o Treino que se Adapta a Você',
			content: 'Com a Treina Aí, você tem treinos personalizados criados por inteligência artificial que se adaptam aos seus objetivos e nível de condicionamento.',
			description: 'O aplicativo ideal para quem busca resultados rápidos e treinos sob medida, com a conveniência de ter um personal virtual onde estiver.',
			image: "https://trello-logos.s3.amazonaws.com/c76a29c8e5fe098172ab347aa12c9bbd/170.png",
			language: "Portuguese",
			plannedDate: new Date(),
			where: 'Plataformas digitais e redes sociais',
			imageContent: 'O logotipo do Treina Aí.'
		})

		expect(response.id).toBeTruthy()
		const data = await notionDbService.retrieve(response.id)

		expect(data.id).toBeTruthy()
		expect(data.id).toBe(response.id)
	})

	test('Should find data', async function () {
		const data = await notionDbService.find()
		expect(data.results).not.toBeFalsy()
		expect(data.results.length).toBeGreaterThanOrEqual(0)
	})

	test('Should update data', async function () {
		const createResponse = await notionDbService.create({
			company: 'Treina Aí',
			campaign: 'Atualize o Treino que se Adapta a Você',
			content: 'Com a Treina Aí, você tem treinos personalizados criados por inteligência artificial que se adaptam aos seus objetivos e nível de condicionamento.',
			description: 'O aplicativo ideal para quem busca resultados rápidos e treinos sob medida, com a conveniência de ter um personal virtual onde estiver.',
			image: "https://trello-logos.s3.amazonaws.com/c76a29c8e5fe098172ab347aa12c9bbd/170.png",
			language: "Portuguese",
			plannedDate: new Date(),
			where: 'Plataformas digitais e redes sociais',
			imageContent: 'O logotipo do Treina Aí.'
		})

		const updateResponse = await notionDbService.update(createResponse.id, {
			company: 'Treina IA',
			language: "English",
			plannedDate: new Date(),
			where: 'Em academias e espaços de treino públicos',
			imageContent: 'O logotipo do Treina IA.'
		})

		expect(updateResponse.id).toBeTruthy()
		const data = await notionDbService.retrieve(updateResponse.id)

		expect(data.id).toBeTruthy()
		expect(data.id).toBe(updateResponse.id)
		// TODO: add check to verify modified data
	}, 20000)

	test('Should update data (set page in_trash)', async function () {
		const createResponse = await notionDbService.create({
			company: 'Treina Aí',
			campaign: 'Atualize o Treino que se Adapta a Você',
			content: 'Com a Treina Aí, você tem treinos personalizados criados por inteligência artificial que se adaptam aos seus objetivos e nível de condicionamento.',
			description: 'O aplicativo ideal para quem busca resultados rápidos e treinos sob medida, com a conveniência de ter um personal virtual onde estiver.',
			image: "https://trello-logos.s3.amazonaws.com/c76a29c8e5fe098172ab347aa12c9bbd/170.png",
			language: "Portuguese",
			plannedDate: new Date(),
			where: 'Plataformas digitais e redes sociais',
			imageContent: 'O logotipo do Treina Aí.'
		})


		const updateResponse = await notionDbService.remove(createResponse.id)
		expect(updateResponse.id).toBeTruthy()

		const data = await notionDbService.retrieve(updateResponse.id)

		expect(data.id).toBeTruthy()
		expect(data.id).toBe(updateResponse.id)
		if ('in_trash' in data) {
			expect(data.in_trash).toBe(true)
		}
	})
})