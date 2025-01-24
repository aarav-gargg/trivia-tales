import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { QuestionDto } from "./dto";


@Injectable({})
export class QuestionService{
    constructor(private prisma : PrismaService){}

    async createQuestion(dto : QuestionDto){
        try {
            const quiz = await this.prisma.quiz.findUnique({
                where : {
                    id : dto.quizId
                }
            });

            if(!quiz){
                return {
                    success : false , 
                    message : "NO SUCH QUIZ EXISTS"
                }
            }

            const question = await this.prisma.questions.create({
                data : {
                    question : dto.question ,  
                    quiz : {
                        connect : {
                            id : dto.quizId
                        }
                    }
                }
            })

            
            return {
                success : true , 
                message : "QUESTION CREATED SUCCESSFULLY" ,
                question , 
            }
        } catch (error) {
            return {
                success : false , 
                message : error.message
            }
        }
    }

    async getQuestionById(id : number){
        try {
            const question = await this.prisma.questions.findUnique({
                where :{
                    id : id
                } ,
                include :{
                    quiz : true , 
                    options : true
                }
            })

            if(!question){
                return {
                    success : false , 
                    message : "NO SUCH QUESTION EXISTS"
                }
            }

            return {
                success : true , 
                message : "Question found successfully" ,
                question
            }
        } catch (error) {
            return{
                success : false ,
                message : error.message
            }
        }
    }
}