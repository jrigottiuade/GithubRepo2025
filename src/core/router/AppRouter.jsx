import { createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";
import HtmlView from "../../pages/html/view/HtmlView";
import CssView from "../../pages/css/view/CssView";
import JsView from "../../pages/js/view/JsView";
import Layout from "../layout/Layout";

export const appRouter = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeView />
      </Layout>
    ),
  },
  {
    path: "/html",
    element: (
      <Layout>
        <HtmlView />
      </Layout>
    ),
  },
  {
    path: "/css",
    element: (
      <Layout>
        <CssView />
      </Layout>
    ),
  },
  {
    path: "/js",
    element: (
      <Layout>
        <JsView />
      </Layout>
    ),
  },
]);
