import { Module } from "../../package/core/module.ts";
import { Service } from "../../package/core/service.ts";
import { Router } from "../../package/core/router.ts";
import { Server } from "../../package/core/runner.ts";
import { Get } from "../../package/http-verb/get.ts";

@Service({})
export class ApplicationService {}

@Router("user")
export class ApplicationRouter {}

@Module({
  services: [ApplicationService],
  routers: [ApplicationRouter],
})
export class ApplicationModule {}

const application = new Server(ApplicationModule);
await application.listen();

class C {
  @Get("ming")
  public async test(param: string) {
    return "hello ming"
  }
}
