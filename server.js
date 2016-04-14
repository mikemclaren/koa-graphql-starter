// Required for async/await, currently.
require('babel-polyfill');

import Koa from 'koa';
import Router from 'koa-router';
import convert from 'koa-convert';
import graphqlHTTP from 'koa-graphql';
import bodyParser from 'koa-bodyparser';

import Schema from './schema/Schema';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    if(err.status === 401) {
      ctx.body = { message: 'Unauthorized access.' };
      ctx.status = 401;
    } else {
      ctx.body = { message: err.message };
      ctx.status = err.status || 500;
    }
  }
});

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'Hey, welcome to the Koa v2 starter!'
  };
  ctx.status = 200;
  await next();
});

router.get('/query', convert(graphqlHTTP((request, context) => ({
  schema: Schema,
  graphiql: true
}))));

router.post('/query', convert(graphqlHTTP((request, context) => ({
  schema: Schema
}))));

app.use(router.routes());

app.listen(process.env.PORT);
console.log(`Server up and running! On port ${process.env.PORT}!`);
