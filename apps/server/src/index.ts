import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World! Let's build something awesome!");
});

app
  .listen(port, () => {
    console.log(`server is listening on ${port}`);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
