import { bootstrap } from './user';

(async () => {
  try {
    await bootstrap(2000);
  } catch (error) {
    console.log(error);
  }
})();
