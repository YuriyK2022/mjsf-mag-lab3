export interface Creatable<T> {
    create(item: T): T;
  }
  
  export interface Readable<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
  }
  
  export interface Editable<T> {
    update(id: number, item: T): T | undefined;
  }
  
  export interface Deletable<T> {
    delete(id: number): boolean;
  }
  