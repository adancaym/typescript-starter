import { IBody } from './i.body';
import { IHeaders } from './i.headers';
import { IParams } from './i.params';
import { IQuery } from './i.query';

export interface IRequest {
  body: IBody;
  params: IParams;
  query: IQuery;
  headers: IHeaders;
}
