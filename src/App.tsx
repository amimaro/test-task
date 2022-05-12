import Layout from "./components/Layout";
import Modals from "./components/Modals/Modals";
import AppState from "./context/background/AppState";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <AppState>
      <Layout>
        <Dashboard />
      </Layout>
      <Modals />
    </AppState>
  );
};

export default App;
