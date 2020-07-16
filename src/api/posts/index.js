const Router = require("koa-router");
const posts = new Router();

// JSON 객체 반환, 현재 요청의 메서드,경로,파라미터를 담음
const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

posts.get("/", printInfo);
posts.post("/", printInfo);
posts.get("/:id", printInfo);
posts.delete("/:id", printInfo);
posts.put("/:id", printInfo);
posts.patch("/:id", printInfo);

module.exports = posts;
