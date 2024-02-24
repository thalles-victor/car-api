import "./utils/env.provider";

import express from "express";
import { envCheckProvider } from "./utils/env.provider";
import { ErrorHandler } from "./utils/error/handling-error";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).json({ message: "The server is working" });
});

app.use(ErrorHandler);

const PORT = envCheckProvider.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
