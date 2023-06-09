import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./erros";
import cors from "cors";
import { usersRoutes } from "./routers/users.routes";
import { contactsRoutes } from "./routers/contacts.routes";
import { loginRoutes } from "./routers/login.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/contacts", contactsRoutes);
app.use(handleErrors);

export default app;
