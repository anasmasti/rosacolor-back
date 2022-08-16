import { Express, Router } from 'express';

const handleRoutes = (app: Express, ...routes: any) => {
  routes.forEach((route: any) => {
    return app.use("/api/v1/", [route]);
  });
};


export default handleRoutes