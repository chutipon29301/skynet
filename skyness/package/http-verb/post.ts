export interface Post {
    path: string;
  }
  
  export interface PostConfig {}
  
  export function Post(path: string, config?: PostConfig) {
    return async function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Path:",path)
        console.log("Target:",target)
        console.log("Proprety Key:",propertyKey)
        console.log("Descriptor:", await descriptor.value());
    };
  }
  