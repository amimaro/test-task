import Modals from "./components/Modals/Modals";
import AppState from "./context/background/AppState";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <AppState>
      <Dashboard />
      <Modals />
    </AppState>
  );
};

export default App;
