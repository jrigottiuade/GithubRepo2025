import { createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";
import HtmlView from "../../pages/html/view/HtmlView";
import CssView from "../../pages/css/view/CssView";
import JsView from "../../pages/js/view/JsView";
import VscodeView from "../../pages/vscode/view/VscodeView";
import GitView from "../../pages/git/view/GitView";
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
  {
    path: "/vscode",
    element: (
      <Layout>
        <VscodeView />
      </Layout>
    ),
  },
  {
    path: "/git",
    element: (
      <Layout>
        <GitView />
      </Layout>
    ),
  },
]);
