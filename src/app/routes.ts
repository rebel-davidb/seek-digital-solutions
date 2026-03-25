import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { NotFound } from "./pages/NotFound";
import { ServicePage } from "./pages/ServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "services/:slug", Component: ServicePage },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);