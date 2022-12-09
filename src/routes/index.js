import { Router } from "express";
import authRouter from "./authRoute.js";
import userRoute from "./userRoute.js";
import adminRoute from "./adminRoute.js";
import restaurantRoute from "./restaurantRoute.js";


const apiRouter = Router();

apiRouter.use("/api/v1/auth", authRouter);
apiRouter.use("/api/v1/admin", adminRoute);
apiRouter.use("/api/v1/user", userRoute);
apiRouter.use("/api/v1/vendor", restaurantRoute);

export default apiRouter;