
import {ApiProperty} from '@nestjs/swagger'


export class Product {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
name: string ;
description: string ;
@ApiProperty({
  type: `number`,
  format: `float`,
})
price: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
quantity: number ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date ;
}
