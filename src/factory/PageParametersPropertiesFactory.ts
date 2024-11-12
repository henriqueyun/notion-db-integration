import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import { CreateCompanyCampaignDTO, UpdateCompanyCampaignDTO } from '../types/CompanyCampaign'

// Create a type from CreatePageParameters properties type because we can't import it
type CreatePageParametersProperties = CreatePageParameters['properties']

export const pageParametersPropertiesFactory = (body: CreateCompanyCampaignDTO | UpdateCompanyCampaignDTO): CreatePageParametersProperties => {
    let props: CreatePageParametersProperties = {}
    const keys = Object.keys(body)

    keys.forEach(k => {
        let field = fieldSet[k](body[k as keyof CreateCompanyCampaignDTO])
        props = {...props, ...field}
    })

    return props
}

// Aliases to CreatePageBodyParameters property field types
type TitleProperty = Record<string, { title: Array<{ type: "text", text: { content: string } }> }>
type RichTextProperty = Record<string, { rich_text: Array<{ type: "text", text: { content: string } }> }>
type FilesProperty = Record<string, { files: Array<{ type: "external", name: "File", external: { url: string } }> }>

// Maps how to build each entity field at notion db, if a new easy
const fieldSet: Record<string, Function>= {
    company: (company: string): TitleProperty => {
        return {
            "Company": {
                "title": [
                    {
                        "type": "text",
                        "text": {
                            "content": company
                        }
                    }
                ]
            }
        }
    },
    campaign: (campaign: string): RichTextProperty => {
        return {
            "Campaign": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": campaign
                        }
                    },
                ]
            }
        }
    },
    content: (content: string): RichTextProperty => {
        return {
            "Content": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": content
                        }
                    },
                ]
            }
        }
    },
    description: (description: string): RichTextProperty => {
        return {
            "Description": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": description
                        }
                    },
                ]
            }
        }
    },
    image: (image: string): FilesProperty => {
        return {
            "Image": {
                "files": [
                    {
                        "type": "external",
                        "name": "File",
                        "external": {
                            "url": image
                        }
                    }
                ]
            }
        }
    },
    language: (language: string) => {
        return {
            "Language": {
                "type": "select",
                "select": {
                    "name": language
                }
            }
        }
    },
    plannedDate: (plannedDate: Date) => {
        return {
            "PlannedDate": {
                "type": "date",
                "date": {
                    "start": plannedDate.toISOString(),
                }
            }
        }
    },
    where: (where: string) => {
        return {
            "Where": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": where
                        }
                    },
                ]
            }
        }
    },
    imageContent: (imageContent: string) => {
        return {
            "image content": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": imageContent
                        }
                    },
                ]
            }
        }
    }
}