import { UtilityService } from 'src/shared/utility/utility.service';
import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { get } from 'http';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService,
                private readonly globalHelperService:GlobalHelperService
    ){}
    @Get('/global') 
    globalFunc(): string{
        return this.globalHelperService.globalFunc();
    }
    @Get('/shared') 
    shareFunc(): string{
        return this.utilityService.shareFunc();
    }
    @Get()
    productFunc2(): string {
        return this.productService.productFunc2();




}
}
