import {Creatable, Editable, Deletable} from "/src/interfaces";
import axios from 'axios';

export class CategoryService implements Creatable<Category>, Editable<Category>, Deletable {
  private baseUrl = 'https://api.escuelajs.co/api/v1/categories';

  async create(item: Category): Promise<Category> {
    const response = await axios.post(this.baseUrl, item);
    return response.data;
  }

  async edit(id: number, item: Category): Promise<Category> {
    const response = await axios.put(`${this.baseUrl}/${id}`, item);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`${this.baseUrl}/${id}`);
  }
}
