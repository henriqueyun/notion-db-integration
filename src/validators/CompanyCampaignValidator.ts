import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateCompanyCampaignValidator {
    @IsString()
    @IsNotEmpty()
    company: string;

    @IsString()
    @IsNotEmpty()
    campaign: string

    @IsString()
    @IsNotEmpty()
    content: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    image: string

    @IsString()
    @IsNotEmpty()
    language: string

    @IsDateString()
    @IsNotEmpty()
    plannedDate: Date

    @IsString()
    @IsNotEmpty()
    where: string

    @IsString()
    @IsNotEmpty()
    imageContent: string
}

export class UpdateCompanyCampaignValidator {
    @IsString()
    @IsOptional()
    company: string;

    @IsString()
    @IsOptional()
    campaign: string

    @IsString()
    @IsOptional()
    content: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    image: string

    @IsString()
    @IsOptional()
    language: string

    @IsDateString()
    @IsOptional()
    plannedDate: Date

    @IsString()
    @IsOptional()
    where: string

    @IsString()
    @IsOptional()
    imageContent: string
}