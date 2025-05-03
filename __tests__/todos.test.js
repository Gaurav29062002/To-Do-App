const request = require('supertest');
const app = require('../app');

describe('Todo API', () => {
  it('should add and fetch todos', async () => {
    await request(app).post('/todos').send({ task: 'Learn CI/CD' });
    const res = await request(app).get('/todos');
    expect(res.body).toContain('Learn CI/CD');
  });

  it('should delete a todo', async () => {
    await request(app).post('/todos').send({ task: 'Delete me' });
    let res = await request(app).get('/todos');
    expect(res.body).toContain('Delete me');

    await request(app).delete('/todos/0');
    res = await request(app).get('/todos');
    expect(res.body).not.toContain('Delete me');
  });
});
