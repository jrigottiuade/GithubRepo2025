import { createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";

export const appRouter = createHashRouter([
  { path: "/", element: <HomeView /> },
]);
