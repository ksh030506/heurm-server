const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== "1") {
    ctx.status = 401; // Unauthorized 을 화면에서 출력함
    return;
  }
  await next();
  console.log("END"); // 다음에 처리해야할 미들웨어가 끝나야 작동
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = "hello world";
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
