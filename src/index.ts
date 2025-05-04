import express from "express";

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const 개발할대필요한줄알았는데사실은필요가없는변수 = 3;

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서요 대기중");
});
