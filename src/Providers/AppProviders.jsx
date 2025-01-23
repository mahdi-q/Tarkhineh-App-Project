import { ToggleProvider } from "../Contexts/ToggleContext";

function AppProviders({ children }) {
  return <ToggleProvider>{children}</ToggleProvider>;
}
export default AppProviders;
