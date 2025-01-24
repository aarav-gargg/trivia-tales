import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { QuestionController } from "./questions.controller";
import { QuestionService } from "./questions.service";

@Module({
    imports : [PrismaModule] , 
    controllers : [QuestionController] , 
    providers : [QuestionService]
})

export class QuestionModule{};