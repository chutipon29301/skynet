export interface Put {
    path: string;
  }
  
  export interface PutConfig {}
  
  export function Put(path: string, config?: PutConfig) {
    return async function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Path:",path)
        console.log("Target:",target)
        console.log("Proprety Key:",propertyKey)
        console.log("Descriptor:", await descriptor.value());
    };
  }
  