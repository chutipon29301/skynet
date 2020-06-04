export interface Put {
    path: string;
  }
  
  export interface PutConfig {}
  
  export function Put(path: string, config?: PutConfig) {
    return function classDecorator<T extends { new (...args: any[]): {} }>(
      constructor: T
    ): { new (...args: any[]): Put } {
      return class extends constructor implements Put {
        path = path;
      };
    };
  }
  