import { RootController } from './root.controller';

describe('RootController', () => {
  let controller: RootController;
  let req: any;
  let res: any;

  beforeEach(() => {
    controller = new RootController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should return a 200 status code and a message', () => {
    controller.root(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Hello World! 2' });
  });
});