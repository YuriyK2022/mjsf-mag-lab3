import { Product } from "../types";
import { Creatable, Readable, Editable, Deletable } from "../interfaces/ServiceInterfaces";

export class ProductService implements Creatable<Product>, Readable<Product>, Editable<Product>, Deletable<Product> {
  private products: Product[] = [];

  create(item: Product): Product {
    item.id = this.products.length + 1;
    this.products.push(item);
    return item;
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  update(id: number, item: Product): Product | undefined {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...item, id };
      return this.products[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
