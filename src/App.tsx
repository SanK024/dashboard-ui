import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
