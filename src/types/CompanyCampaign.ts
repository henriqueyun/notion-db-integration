export type CreateCompanyCampaignDTO = {
    company: string
    campaign: string
    content: string
    description: string
    image: string
    language: string
    plannedDate: Date | string
    where: string
    imageContent: string
}

export type UpdateCompanyCampaignDTO = {
    company?: string
    campaign?: string
    content?: string
    description?: string
    id?: number
    image?: string
    language?: string
    plannedDate?: Date | string
    where?: string
    imageContent?: string
}

