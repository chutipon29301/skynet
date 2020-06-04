export interface Post {
    path: string;
  }
  
  export interface PostConfig {}
  
  export function Post(path: string, config?: PostConfig) {
    return function classDecorator<T extends { new (...args: any[]): {} }>(
      constructor: T
    ): { new (...args: any[]): Post } {
      return class extends constructor implements Post {
        path = path;
      };
    };
  }
  