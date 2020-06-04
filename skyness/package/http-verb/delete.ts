export interface Delete {
    path: string;
  }
  
  export interface DeleteConfig {}
  
  export function Delete(path: string, config?: DeleteConfig) {
    return function classDecorator<T extends { new (...args: any[]): {} }>(
      constructor: T
    ): { new (...args: any[]): Delete } {
      return class extends constructor implements Delete {
        path = path;
      };
    };
  }
  