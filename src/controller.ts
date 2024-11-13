import { Request, Response } from "express"
import notionDbService from "./notion-db-service"
import { CreateCompanyCampaignDTO, UpdateCompanyCampaignDTO } from "./types/CompanyCampaign"
import { CreateCompanyCampaignValidator, UpdateCompanyCampaignValidator } from "./validators/CompanyCampaignValidator"
import { hasErrors, validationPipe } from "./validators/validation"

export const create = async (req: Request, res: Response) => {
    try {
        const data: CreateCompanyCampaignDTO = req.body

        const validation = await validationPipe(CreateCompanyCampaignValidator, data)

        if (hasErrors(validation)) {
            res.status(400).json(validation)
            return
        }

        if (!data) {
            res.status(400).json({ message: 'missing company campaign data' })
            return
        }

        const createData = await notionDbService.create(data)
        res.status(201).json(createData)
    } catch (err) {
        console.error('Controller create error', err)
        res.sendStatus(500)
    }
}

export const find = async (req: Request, res: Response) => {
    try {
        let start_cursor: string | undefined
        if (req.params) {
            start_cursor = req.query.start_cursor as string
        }

        const data = await notionDbService.find(start_cursor)
        res.status(200).json(data)
    } catch (err) {
        console.error('Controller find error', err)
        res.sendStatus(500)
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data: UpdateCompanyCampaignDTO = req.body

        if (!id) {
            res.status(400).json({ message: 'missing id parameter' })
            return
        }
        if (!data) {
            res.status(400).json({ message: 'missing company campaign data' })
            return
        }

        const validation = await validationPipe(UpdateCompanyCampaignValidator, data)

        if (hasErrors(validation)) {
            res.status(400).json(validation)
            return
        }

        const updateData = await notionDbService.update(id, data)
        res.status(200).json(updateData)
    } catch (err) {
        console.error('Controller update error', err)
        res.sendStatus(500)
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ message: 'missing id parameter' })
            return
        }
        const data = await notionDbService.remove(id)
        res.status(200).json(data)
    } catch (err) {
        console.error('Controller find error', err)
        res.sendStatus(500)
    }
}

export default { create, find, update, remove }
