import { RouterProvider } from "react-router-dom";
import TargetCursor from "./components/TargetCursor";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <RouterProvider router={router} />
    </>
  );
}
