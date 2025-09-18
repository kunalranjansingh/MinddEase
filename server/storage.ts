// Storage interface and implementation
// Add CRUD methods as needed for your application

export interface IStorage {
  // Storage methods can be added here as needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize storage as needed
  }
}

export const storage = new MemStorage();