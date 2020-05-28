import { serve, Server } from "https://deno.land/std/http/server.ts";

export class Application {
  private server?: Server;
  private _port: number = 3000;

  public get port(): number {
    return this._port;
  }

  public set port(port: number) {
    this._port = port;
  }

  public async listen(port: number) {
    this.port = port;
    this.serve();
  }

  private async serve() {
    this.server = serve({ port: this._port });
    for await (const req of this.server) {
      req.respond({ body: "World" });
    }
  }
}
