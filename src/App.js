import Info from "./components/Info";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";

const Detail = lazy(() => import("./components/Details"));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Detail />
      </Suspense>
      <Info />
    </div>
  );
}

export default App;
