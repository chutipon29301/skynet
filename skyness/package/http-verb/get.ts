export interface Get {
    path: string;
  }
  
  export interface GetConfig {}
  
  export function Get(path: string, config?: GetConfig) {
    return function classDecorator<T extends { new (...args: any[]): {} }>(
      constructor: T
    ): { new (...args: any[]): Get } {
      return class extends constructor implements Get {
        path = path;
      };
    };
  }
  