import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import {ConfigModule} from "@nestjs/config"
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';


@Module({
  imports: [QuizModule ,  ConfigModule.forRoot({
    isGlobal : true
  }) , PrismaModule , QuestionModule , OptionsModule] ,
  controllers: [AppController] ,
  providers: [AppService, PrismaService] ,
})
export class AppModule {}
