import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <div></div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
