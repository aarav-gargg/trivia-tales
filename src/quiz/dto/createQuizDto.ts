import {IsNotEmpty, IsString, Length, MinLength} from "class-validator"

export class createQuizDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    title : string

    @IsNotEmpty()
    @IsString()
    @Length(5 , 255)
    description : string
}