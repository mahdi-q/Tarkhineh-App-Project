import { BranchesProvider } from "../Contexts/BranchesContext";
import { MenuProvider } from "../Contexts/MenuContext";
import { ToggleProvider } from "../Contexts/ToggleContext";

function AppProviders({ children }) {
  return (
    <ToggleProvider>
      <BranchesProvider>
        <MenuProvider>{children}</MenuProvider>
      </BranchesProvider>
    </ToggleProvider>
  );
}
export default AppProviders;
