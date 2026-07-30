import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc(): string{
        return 'phupa i kak';
    
    }

    productFunc2(): string {
        return 'Hello from product service2';

    }
}
