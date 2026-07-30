
import {ApiProperty} from '@nestjs/swagger'


export class User {
  username: string ;
email: string ;
password: string ;
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
