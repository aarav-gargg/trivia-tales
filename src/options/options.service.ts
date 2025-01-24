import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { CreateOptionDto } from "./dto"


@Injectable({})
export class OptionsService{
    constructor(private prisma : PrismaService){}

    async createOption(dto : CreateOptionDto){
        try {
            const question  = await this.prisma.questions.findUnique({
                where : {
                    id : dto.questionId
                }
            });

            if(!question){
                return{
                    success : false, 
                    message : "Question not found"
                }
            }

            const option = await this.prisma.options.create({
                data : {
                    text : dto.text , 
                    isCorrect : dto.isCorrect , 
                    question : {
                        connect : {
                            id : dto.questionId
                        }
                    }
                }
            });

            return {
                success : true , 
                message : "Option created successfully", 
                option
            }
        } catch (error) {
            return {
                success : false , 
                message : error.message
            }
        }
    }
}