

// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}


