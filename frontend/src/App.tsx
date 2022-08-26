import InvoicesProvider from "./Context/InvoicesProvider";
import Nav from "./Components/Nav";
import AppRoutes from "./Page/Routes";

function App() {
  return (
    <InvoicesProvider>
      <div className="App">
        <Nav />
        <AppRoutes />
      </div>
    </InvoicesProvider>
  );
}

export default App;

