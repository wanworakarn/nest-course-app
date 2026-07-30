import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
 
  getJson()  {
    return{
    name: 'arigato',
    surname:'koniciwa',
    age : 67,
    version : process.env.API_VERSION,
    };
    }
    getJson2() {
  return {
    name: 'papaya',
    lastname: 'salad',
    age: 67,
  };
}
}
