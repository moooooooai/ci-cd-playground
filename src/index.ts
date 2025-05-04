import express from "express";

const 사용하려다가_사용하지_않은_변수 = 3;

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서요 대기중");
});
