export interface Router {
  path: string;
}

export interface RouterConfig {}

export function Router(path: string, config?: RouterConfig) {
  return function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ): { new (...args: any[]): Router } {
    return class extends constructor implements Router {
      path = path;
    };
  };
}
