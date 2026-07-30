
import {ApiProperty} from '@nestjs/swagger'




export class UpdateProductDto {
  name?: string;
description?: string;
@ApiProperty({
  type: `number`,
  format: `float`,
})
price?: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
quantity?: number;
}
