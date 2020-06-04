import { Router } from "./router.ts";

export interface Application {
  routers: Router[];
}

export interface Module {}

export interface ModulesOptions {
  services?: any[];
  routers?: any[];
  imports?: any[];
  exports?: any[];
}

export function Module(option: ModulesOptions) {
  let routers: Router[] = [];
  if (option.routers) {
    routers = option.routers.map((o) => new o());
  }
  return function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ): { new (...args: any[]): Application } {
    return class extends constructor implements Application {
      routers = routers;
    };
  };
}
