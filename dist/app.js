import express from "express";
import userRoute from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorHandlers.js";
// import userRoutes from "./routes/user.routes";
// import { errorHandler } from "./middlewares/errorHandler";
const app = express();
// Middleware
app.use(express.json());
// Routes
app.use("/api/users", userRoute);
// Error Handler
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map