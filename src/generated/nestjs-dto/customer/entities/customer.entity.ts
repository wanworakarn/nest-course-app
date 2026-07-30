
import {ApiProperty} from '@nestjs/swagger'


export class Customer {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
fullname: string ;
email: string ;
is_active: boolean ;
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
