export interface Delete {
    path: string;
  }
  
  export interface DeleteConfig {}
  
  export function Delete(path: string, config?: DeleteConfig) {
    return async function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Path:",path)
        console.log("Target:",target)
        console.log("Proprety Key:",propertyKey)
        console.log("Descriptor:", await descriptor.value());
    };
  }
  