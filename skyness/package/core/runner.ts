import {
  serve,
  Server as DenoServer,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";
import { Application } from "./module.ts";

export class Server {
  private application: Application;
  private port: number = 3000;
  private server?: DenoServer;

  constructor(constructor: { new (...args: any[]): {} }) {
    this.application = new constructor() as Application;
  }
  public listen(port?: number) {
    if (port) {
      this.port = port;
    }
    this.serve();
  }

  private async serve() {
    this.server = serve({ port: this.port });
    for await (const req of this.server) {
      console.log(req.url);
      if (req.url === `/${this.application.routers[0].path}`) {
        req.respond({ body: "User" });
      } else {
        req.respond({ body: "World" });
      }
    }
  }
}
