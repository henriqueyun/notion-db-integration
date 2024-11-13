import client from './client'
import { CreateCompanyCampaignDTO, UpdateCompanyCampaignDTO } from './types/CompanyCampaign'
import { pageParametersPropertiesFactory } from './factory/PageParametersPropertiesFactory'

const create = async (body: CreateCompanyCampaignDTO) => {
	return await client.pages.create({
		parent: { database_id: process.env.DB_ID! },
		properties: pageParametersPropertiesFactory(body)
	})
}

const find = async (cursor: string | undefined) => {
	return await client.databases.query({
		database_id: process.env.DB_ID!,
		start_cursor: cursor
	})
}

const update = async (id: string, body: UpdateCompanyCampaignDTO) => {
	return await client.pages.update({
		page_id: id,
		properties: pageParametersPropertiesFactory(body)
	})
}

const remove = async (id: string) => {
	return await client.pages.update({
		page_id: id,
		in_trash: true
	})
}

const retrieve = async (id: string) => {
	return await client.pages.retrieve({
		page_id: id
	})
}

export default { create, find, update, remove, retrieve }
