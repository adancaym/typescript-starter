import { Server } from './server';

export const bootstrap = async (port: number) => {
  const serverUser = new Server(port);
  await serverUser.start();
};
