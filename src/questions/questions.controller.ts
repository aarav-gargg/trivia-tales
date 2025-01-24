import { Body, Controller, Post } from "@nestjs/common";
import { QuestionService } from "./questions.service";
import { QuestionDto } from "./dto";

@Controller('qustions')
export class QuestionController {
    constructor(private questionService : QuestionService){}

    @Post('/create')
    async createQuestion(@Body() dto : QuestionDto){
        return this.questionService.createQuestion(dto);
    } 
}