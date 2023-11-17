export interface IResponse {
    status(code: number): IResponse;
    send(body: any): IResponse;
    json(body: any): IResponse;
  }