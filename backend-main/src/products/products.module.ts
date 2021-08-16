import { Module } from '@nestjs/common';
import { ProductService } from './shared/product.service';
import { ProductsController } from './products.controller';

@Module({
    controllers: [ProductsController],
    providers: [ProductService]

})
export class ProductsModule {}
