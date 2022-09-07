import InvoicesProvider from "./Context/InvoicesProvider";
import AppRoutes from "./Page/Routes";
import { globalCss } from "@stitches/react";
import { Header } from "Components/Header";
import UserProvider from "Context/UserProvider";

function App() {
  const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
    'input, textarea': { boxSizing: 'content-box' },
    'html': { background: '#f6f6f6', color: 'black' },
    'h1': { fontSize: '3.2em', lineHeight: '1.1' },
  });

  globalStyles()
  return (
    <UserProvider>
      <InvoicesProvider>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </InvoicesProvider>
    </UserProvider>
  );
}

export default App;
