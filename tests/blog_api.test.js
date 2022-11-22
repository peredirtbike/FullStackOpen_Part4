const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)


test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
}, 100000)

afterAll(() => {
  mongoose.connection.close()
})

test('a valid blog can be added', async () => {
  const newBlog = {
    title: "lfdsplfsd",
    author: "hsgfjhds",
    url: "gsfdgdhjf",
    likes: 215
  }

  const initialBlogs = await api.get('/api/blogs')


  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  const contents = response.body.map(r => r.content)

  expect(response.body).toHaveLength(initialBlogs.length + 1)
  expect(contents).toContain(
    'async/await simplifies making async calls'
  )
})
