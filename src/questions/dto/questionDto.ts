import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class QuestionDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    question: string

    @IsNotEmpty()
    quizId : number
}