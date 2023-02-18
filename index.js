import Koa from 'koa';
import Router from '@koa/router';
import { koaBody } from 'koa-body';

const app = new Koa();
const router = new Router();

app.use(koaBody());

// response
app.use(router.routes()).use(router.allowedMethods());

router.post('/fortune', async (ctx, next) => {
  const body = ctx.request.body;
  ctx.body = body;
});
app.listen(80);
