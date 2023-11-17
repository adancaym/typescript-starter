
import { IUseRouter } from "./i.use.router";

export interface IServerApplication {
    listen(port: number, callback: () => void): void;
    use: IUseRouter,
    on(event: string, callback: () => void): void;
}

