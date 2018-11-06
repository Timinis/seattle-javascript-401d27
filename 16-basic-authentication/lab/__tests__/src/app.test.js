import supergoose, { startDB, stopDB } from '../supergoose.js';
import { app } from '../../src/app.js';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  // clean up as needed
});

<<<<<<< HEAD
describe('app', () => {
  xit('should ping pong', async () => {
    const response = await mockRequest.get('/ping');
    expect(response.text).toBe('pong');
  });
=======
process.env.APP_SECRET = 'snapseruptatpurespans';

describe('app', () => {
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6

  it('should sign up with good creds', async () => {
    const userInfo = {
      username: 'foo',
      email: 'foo@bar.com',
      password: 'foobar'
    };

    const response = await mockRequest.post('/api/signup').send(userInfo);
    console.log(response.text, 'this is response');
    expect(response.text.split('.').length).toBe(3);
  });

  xit('should sign fail with bad creds', async () => {
    const userInfo = { username: 'foo', email: 'foo@bar.com' };

    const response = await mockRequest.post('/signup').send(userInfo);

    expect(response.status).toBe(400);
  });

<<<<<<< HEAD
  xit('should sign in', async () => {
    const response = await mockRequest.get('/signin');
    expect(response.text).toBe('token coming soon');
=======
  it('should sign in', async () => {
    
    const userInfo = {username:'foo',email:'foo@bar.com', password: 'foobar'};

    await mockRequest.post('/signup').send(userInfo);

    const response = await mockRequest.get('/signin').auth('foo', 'foobar');

    expect(response.text.split('.').length).toBe(3);
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
  });
});
