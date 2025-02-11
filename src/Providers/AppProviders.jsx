import { MenuProvider } from "../Contexts/MenuContext";
import { ToggleProvider } from "../Contexts/ToggleContext";

function AppProviders({ children }) {
  return (
    <ToggleProvider>
      <MenuProvider>{children}</MenuProvider>
    </ToggleProvider>
  );
}
export default AppProviders;
