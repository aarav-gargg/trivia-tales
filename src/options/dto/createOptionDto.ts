import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateOptionDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    text : string

    @IsBoolean()
    @IsNotEmpty()
    isCorrect : boolean

    @IsNotEmpty()
    @IsNumber()
    questionId : number
}