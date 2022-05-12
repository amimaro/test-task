import AppState from "./context/background/AppState";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <AppState>
      <Dashboard />
    </AppState>
  );
};

export default App;
