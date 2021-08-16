import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductService {
    products: Product[] = [

              {id: 1, name: 'Tv seila', price: 5001.00, completed: true},
              {id: 1, name: 'Tv seila', price: 5001.00, completed: true},                
              {id: 1, name: 'Tv seila', price: 5001.00, completed: true},
            ];
            getAll() {
                return this.products;
            }
            getById(id: number) {
                const product = this.products.find((value) => value.id == id);
                return product;
            }
            create(product: Product) {
                let lastId = 0;
                if (this.products.length > 0) {
                    lastId = this.products[this.products.length - 1].id;
                }
                product.id = lastId + 1;
                this.products.push(product);
        
                return product;
        
            }
            update(product: any) {
                const productArray = this.getById(product.id);
                if (productArray) {
                    productArray.name = product.name;
                    productArray.price = product.price;
                    productArray.completed = product.completed;
                }
                return productArray;
            }
            delete(id: number) {
                const index = this.products.findIndex((value ) => value.id == id);
                this.products.splice(index, 1);
            }
        }
        


