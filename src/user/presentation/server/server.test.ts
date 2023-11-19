import { Server } from './server';

describe('Server', () => {
  let server: Server;

  beforeEach(() => {
    server = new Server(3000);
  });

  afterEach(() => {
    // Clean up any resources used by the server
  });

  it('should create an instance of Server', () => {
    expect(server).toBeInstanceOf(Server);
  });

  it('should configure the server', () => {
    server.configure();

    // Assert that the necessary middleware is added
    // For example, you can use supertest to make HTTP requests and test the middleware
    // You can also check if the routes are set correctly
    // For example, you can check if the rootRouter and authRouter are added to the app
  });

  it('should start the server', async () => {
    const listenSpy = jest.spyOn(server.app, 'listen');
    const consoleSpy = jest.spyOn(console, 'log');

    await server.start();

    expect(listenSpy).toHaveBeenCalledWith(3000, expect.any(Function));
    expect(consoleSpy).toHaveBeenCalledWith(
      'Server up on: http://localhost:3000',
    );
  });

  it('should set the routes', () => {
    server.setRoutes();
  });

  it('should list the endpoints', () => {
    const consoleSpy = jest.spyOn(console, 'table');

    server.listEndpoints();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          path: expect.any(String),
          methods: expect.any(Array),
        }),
      ]),
    );
  });
});
