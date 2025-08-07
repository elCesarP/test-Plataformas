
const request = require('supertest');
const app = require('./app'); // Importa la app para probarla

describe('Test API endpoints', () => {

  // Test para la ruta GET '/'
  it('should return Hello World on GET /', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });

  // Test para la ruta POST '/message' con un mensaje válido
  it('should return the message on POST /message', async () => {
    const payload = { message: 'Test message' };
    
    const response = await request(app)
      .post('/message')
      .send(payload);
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Test message');
  });

  // Test para la ruta POST '/message' sin mensaje en el cuerpo
  it('should return error when no message is provided on POST /message', async () => {
    const payload = {}; // Sin el campo 'message'

    const response = await request(app)
      .post('/message')
      .send(payload);
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('No message provided');
  });

});
