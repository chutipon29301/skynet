import { Module } from "../../package/core/module.ts";
import { Service } from "../../package/core/service.ts";
import { Router } from "../../package/core/router.ts";
import { ApplicationRunner } from "../../package/core/runner.ts";

@Service({})
export class ApplicationService {}

@Router("user")
export class ApplicationRouter {}

@Module({
  services: [ApplicationService],
  routers: [ApplicationRouter],
})
export class ApplicationModule {}

const application = new ApplicationRunner(ApplicationModule);
await application.listen();
