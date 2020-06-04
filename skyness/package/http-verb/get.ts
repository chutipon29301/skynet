export interface Get {
    path: string;
  }
  
  export interface GetConfig {}
  
  export function Get(path: string, config?: GetConfig) {
    return async function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Path:",path)
        console.log("Target:",target)
        console.log("Proprety Key:",propertyKey)
        console.log("Descriptor:", await descriptor.value());
    };
  }
  