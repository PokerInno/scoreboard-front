import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarRouter from "./routers/NavbarRouter";

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <NavbarRouter />
            </Router>
        </>
    );
}

export default App;
