import "./App.scss";
import NavBar from "./components/NavBar";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
