import { ProductService } from "./ProductService";
import { UserService } from "./UserService";

export class ServiceProvider {
  private static productService: ProductService;
  private static userService: UserService;

  static getProductService(): ProductService {
    if (!this.productService) {
      this.productService = new ProductService();
    }
    return this.productService;
  }

  static getUserService(): UserService {
    if (!this.userService) {
      this.userService = new UserService();
    }
    return this.userService;
  }
}
