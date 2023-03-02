import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/gobal";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}