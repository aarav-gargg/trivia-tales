import { Body, Controller } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { OptionsService } from "./options.service";
import { CreateOptionDto } from "./dto";

@Controller('options')
export class OptionsController{

    constructor(private optionsService : OptionsService){}
    @Post('/create')
    async createOptions(@Body() dto : CreateOptionDto){
        return this.optionsService.createOption(dto);
    }
}