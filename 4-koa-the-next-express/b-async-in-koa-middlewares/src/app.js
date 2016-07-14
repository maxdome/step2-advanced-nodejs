import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();



router.use('/sync', async (ctx, next) => {
  console.log('a');
  await next();
  console.log('d');
});

router.get('/sync', async (ctx) => {
  console.log('b');
  ctx.body = 'sync';
  console.log('c');
});



router.use('/async', async (ctx, next) => {
  console.log('a');
  await next();
  console.log('e');
});

router.get('/async', async (ctx) => {
  console.log('b');
  return new Promise(resolve => {
    process.nextTick(() => {
      console.log('c');
      ctx.body = 'async';
      console.log('d');
      resolve();
    });
  });
});



app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(process.env.PORT);
