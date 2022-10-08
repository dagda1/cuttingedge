import { Route, Routes } from "react-router";
import { Fallback } from "../../components/Fallback/Fallback";
import { MathJaxProvider } from "@cutting/use-mathjax";
import { Suspense, lazy } from "react";

const Sine = lazy(() => import("../../components/Sine/Sine"));

export function Viz(): JSX.Element {
  return (
    <MathJaxProvider>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              <Sine />
            </Suspense>
          }
        />
      </Routes>
    </MathJaxProvider>
  );
}

export default Viz;
