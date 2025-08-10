import Router from "./Router";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
