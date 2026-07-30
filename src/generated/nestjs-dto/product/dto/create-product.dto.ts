
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateProductDto {
  name: string;
description: string;
@ApiProperty({
  type: `number`,
  format: `float`,
})
price: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
quantity: number;
}
