import supergoose, { startDB, stopDB } from './supergoose.js';
import Cats from './constructors/cats';

const { server } = require('./app.js');
const mockRequest = supergoose(server);

const url = '/api/v1/notes';
const newNote = { name: 'test', weight: 12 };

// Jest Hooks
console.log(supergoose, 'this is super goose');
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // clear collection
  await Cats.deleteMany({});
});

describe('api server', () => {
  it('should respond with a 500 on an invalid model', async () => {
    const response = await mockRequest.get('/booboo');

    expect(response.status).toBe(404);
  });

  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.post('/api/v1/foo/12');

    expect(response.status).toBe(404);
  });

  it('should respond properly on a get request to a valid model', async () => {
    const response = await mockRequest.get(url);

    expect(response.status).toBe(200);
  });

  it('should be able to post to /api/v1/cats', async () => {
    const response = await mockRequest.post('/api/v1/cats').send(newNote);

    expect(response.status).toBe(200);
    expect(response.body.title).toEqual(newNote.title);
  });

  it('following a post, should find a single record', async () => {
    const postResponse = await mockRequest.post(url).send(newNote);

    const noteId = postResponse.body._id;

    const getResponse = await mockRequest.get(`/api/v1/cats/${noteId}`);

    const note = getResponse.body[0];

    expect(note.title).toEqual(newNote.title);
  });

  it('following multiple posts, should return the correct count', async () => {
    const obj = { title: 'test', text: 'foo' };

    await mockRequest.post('/api/v1/cats').send(obj);

    await mockRequest.post('/api/v1/cats').send(obj);

    const { body } = await mockRequest.get('/api/v1/cats');

    expect(body.count).toBe(2);
  });

  it('a get should find zero records still', async () => {
    const { body } = await mockRequest.get('/api/v1/cats');

    expect(body.count).toBe(0);
  });
});
