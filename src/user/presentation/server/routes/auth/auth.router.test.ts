import { AuthController } from './auth.controller';
describe('AuthController', () => {
  let controller: AuthController;
  let req: any;
  let res: any;

  beforeEach(() => {
    controller = new AuthController();
    req = {
      body: {
        email: 'asd@asd.com',
        password: 'asdasdasd',
        name: 'asd',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should return a 200 status code and the register DTO', () => {
    controller.register(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
