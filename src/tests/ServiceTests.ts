import { ServiceProvider } from "../services/ServiceProvider";
import { Product, User } from "../types";

const productService = ServiceProvider.getProductService();
const userService = ServiceProvider.getUserService();

console.log("Testing ProductService");
const newProduct: Product = { id: 0, name: "Laptop", price: 1000, category: "Electronics" };
productService.create(newProduct);
console.log(productService.getAll());

console.log("Testing UserService");
const newUser: User = { id: 0, username: "johndoe", email: "john@example.com", role: "admin" };
userService.create(newUser);
console.log(userService.getAll());
