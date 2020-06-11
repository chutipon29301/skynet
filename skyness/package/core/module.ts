import { Router } from "./router.ts";
import { Service } from "./service.ts";

export interface Application {
  routers: Router[];
  services: Service[];
}

export interface Module {}

export interface ModulesOptions {
  services?: any[];
  routers?: any[];
}

export function Module(option: ModulesOptions) {
  let routers = (option.routers ?? []).map((o) => new o());
  let services = (option.services ?? []).map((o) => new o());
  return function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ): { new (...args: any[]): Application } {
    return class extends constructor implements Application {
      routers = routers;
      services = services;
    };
  };
}
