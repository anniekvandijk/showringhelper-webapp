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

showsRouter.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('id is blank');
    const show = database.collection(dbCollection).doc(id).get();
    if (!show.exists) {
      throw new Error('show does not exists');
    }
    res.json({
      id: show.id,
      data: show.data()
    });
  } catch (e) {
    next(e);
  }
});

showsRouter.post('/', (req, res, next) => {
  try {
    if (!req.body) throw new Error('Body is blank');
    database.collection(dbCollection).add(req.body);
  } catch (e) {
    next(e);
  }
});

showsRouter.put('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('id is blank');
    if (!req.body) throw new Error('Text is blank');
    database.collection(dbCollection).doc(id).set(req.body, { merge: true });
  } catch (e) {
    next(e);
  }
});

showsRouter.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('id is blank');
    database.collection(dbCollection).doc(id).delete();
  } catch (e) {
    next(e);
  }
});

export default showsRouter;
