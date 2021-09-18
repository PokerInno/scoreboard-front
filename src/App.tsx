import { BrowserRouter as Router } from "react-router-dom";
import NavbarRouter from "./routers/NavbarRouter";

function App() {
    return (
        <Router>
            <NavbarRouter />
        </Router>
    );
}

export default App;
