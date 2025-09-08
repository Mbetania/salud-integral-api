import { Health } from "../domain/health-check.interface";

export class CheckHealth {
  execute(): Health {
    return {
      status: "ok",
      timestamp: new Date()
    };
  }
}
