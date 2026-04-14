import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import App from "./app/App.jsx";
import "./styles/index.css";

// GSAP 플러그인 전역 1회 등록
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
