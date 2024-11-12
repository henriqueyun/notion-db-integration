import { CreateCompanyCampaignDTO } from "../types/CompanyCampaign";
import { pageParametersPropertiesFactory } from "./PageParametersPropertiesFactory";

describe('pageParametersProperties tests', () => {
    test('should have props', () => {
        const companyCampaign: CreateCompanyCampaignDTO = {
            company: 'Treina Aí',
            campaign: 'Descubra o Treino que se Adapta a Você',
            content: 'Com a Treina Aí, você tem treinos personalizados criados por inteligência artificial que se adaptam aos seus objetivos e nível de condicionamento.',
            description: 'O aplicativo ideal para quem busca resultados rápidos e treinos sob medida, com a conveniência de ter um personal virtual onde estiver.',
            image: "https://trello-logos.s3.amazonaws.com/c76a29c8e5fe098172ab347aa12c9bbd/170.png",
            language: "Portuguese",
            plannedDate: new Date(),
            where: 'Plataformas digitais e redes sociais',
            imageContent: 'O logotipo do Treina Aí.'
        }
    
        const pageParametersProperty = pageParametersPropertiesFactory(companyCampaign)
        expect(pageParametersProperty).toHaveProperty('Company')
        expect(pageParametersProperty).toHaveProperty('image content')
    })
})
