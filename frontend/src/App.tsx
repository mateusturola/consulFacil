import InvoicesProvider from "./Context/InvoicesProvider";
import AppRoutes from "./Page/Routes";
import { globalCss } from "@stitches/react";
import { Header } from "Components/Header";

function App() {
  const globalStyles = globalCss({
    '*': { margin: 0, padding: 0 },
    'html': { background: 'white', color: 'black' },
    'h1': { fontSize: '3.2em', lineHeight: '1.1' },
  });

  globalStyles()
  return (
    <InvoicesProvider>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </InvoicesProvider>
  );
}

export default App;
