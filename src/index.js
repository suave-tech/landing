import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/main.scss";

const root = document.getElementById("root")
const appRoot = ReactDOM.createRoot(root)

appRoot.render(<App />)
// ReactDOM.render(<App />, document.getElementById("root"));
