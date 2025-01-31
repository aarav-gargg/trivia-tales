import { Injectable } from "@nestjs/common";
import { createQuizDto } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class QuizService{

    constructor(private prisma : PrismaService){}

    async createQuiz(dto : createQuizDto){
        try {
            const quiz = await this.prisma.quiz.create({
                data : {
                    title : dto.title,
                    description : dto.description,
                }
            })

            return {
                success : true , 
                message : "Quiz created successfully",
                quiz
            }
        } catch (error) {
            return {
                success : false , 
                message : error.message
            }
        }
    }

    async getQuizById(id : number){
        try {
            const quiz = await this.prisma.quiz.findUnique({
                where : {
                    id : id
                } , 
                include : {
                    questions : {
                        include : {
                            options : true
                        }
                    }
                }
            });

            if(!quiz){
                return {
                    success : false ,
                    message : "NO QUIZ FOUND"
                }
            }

            return {
                success : true ,
                message : "QUIZ FOUND SUCCESSFULLY" , 
                quiz
            }
        } catch (error) {
            return {
                success : false , 
                message : error.message
            }
        }
    }

    async getAllQuiz(){
        try {
            const response = await this.prisma.quiz.findMany();

            if(!response){
                return{
                    success : false , 
                    message : "NO QUIZ FOUND"
                }
            }

            return{
                success : true ,
                message : "QUIZ FOUND SUCCESSFULLY",
                quiz : response
            }
        } catch (error) {
            return{
                success : false , 
                message : error.message
            }
        }
    }
}