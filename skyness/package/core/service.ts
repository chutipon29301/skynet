export interface Service {
  
}

export function Service(option: any) {
  return function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      property = "Hello";
    };
  };
}

