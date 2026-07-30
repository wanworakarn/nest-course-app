import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  imports:[UtilityModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
