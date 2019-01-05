import { Router } from 'express';
import { database } from './firebase';

const showsRouter = Router();
const dbCollection = 'shows';

showsRouter.get('/', (req, res, next) => {
  try {
    const shows = [];
    database.collection(dbCollection).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const Show = {};
        Show.id = doc.id;
        Object.keys(doc.data()).map((key) => {
          Show[key] = doc.data()[key];
          return console.log('');
        });
        shows.push(Show);
      });
      res.json(shows);
    });
  } catch (e) {
    next(e);
  }
});

export default showsRouter;
