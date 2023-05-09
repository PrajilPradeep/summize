import PageHeader from "./components/PageHeader";
import SummaryView from "./components/SummaryView";
import "./styles/App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <PageHeader />
        <SummaryView />
      </div>
    </main>
  );
};

export default App;
