import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import Sidebar from "./component/Sidebar/Sidebar";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              {/* <Route path="/" element={} /> */}
              <Route exact path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
