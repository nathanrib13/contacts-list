import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./erros";
import { usersRoutes } from "./routers/users.routes";
import { contactsRoutes } from "./routers/contacts.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/contacts", contactsRoutes);
app.use(handleErrors);

export default app;
