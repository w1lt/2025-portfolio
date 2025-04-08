import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <main className="flex-1 flex flex-col items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
