import routerPost from "./posts.js";

function router(app) {
  app.use("/api", routerPost);
}

export default router;
