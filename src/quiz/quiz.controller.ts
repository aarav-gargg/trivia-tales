import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createQuizDto } from './dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizService : QuizService){}

    @Post('/create')
    async createQuiz(@Body() dto : createQuizDto){
        return this.quizService.createQuiz(dto);
    }

    @Get('/getById/:id')
    async getQuizById(@Param('id') id : string){
        const quizId = parseInt(id , 10);
        return this.quizService.getQuizById(quizId);
    }

    @Get('/all')
    async getAllQuiz(){
        return this.quizService.getAllQuiz();
    }
}
