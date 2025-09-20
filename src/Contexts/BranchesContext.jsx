import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const BranchesContext = createContext();

export function BranchesProvider({ children }) {
  const [ekbatanBranch, setEkbatanBranch] = useState({});
  const [chalosBranch, setChalosBranch] = useState({});
  const [aghdasiyehBranch, setAghdasiyehBranch] = useState({});
  const [vanakBranch, setVanakBranch] = useState({});

  const { data: ekbatan } = useFetch(
    "https://tarkhineh-app-api.vercel.app/branches/1",
  );
  const { data: chalos } = useFetch(
    "https://tarkhineh-app-api.vercel.app/branches/2",
  );
  const { data: aghdasiyeh } = useFetch(
    "https://tarkhineh-app-api.vercel.app/branches/3",
  );
  const { data: vanak } = useFetch(
    "https://tarkhineh-app-api.vercel.app/branches/4",
  );

  useEffect(() => {
    if (!ekbatan) return;

    setEkbatanBranch(ekbatan);
  }, [ekbatan]);

  useEffect(() => {
    if (!chalos) return;

    setChalosBranch(chalos);
  }, [chalos]);

  useEffect(() => {
    if (!aghdasiyeh) return;

    setAghdasiyehBranch(aghdasiyeh);
  }, [aghdasiyeh]);

  useEffect(() => {
    if (!vanak) return;

    setVanakBranch(vanak);
  }, [vanak]);

  return (
    <BranchesContext.Provider
      value={{
        ekbatanBranch,
        setEkbatanBranch,
        chalosBranch,
        setChalosBranch,
        aghdasiyehBranch,
        setAghdasiyehBranch,
        vanakBranch,
        setVanakBranch,
      }}
    >
      {children}
    </BranchesContext.Provider>
  );
}

export function useBranches() {
  const context = useContext(BranchesContext);

  if (context === undefined)
    throw new Error("BranchesContext was used outside of BranchesProvider");

  return context;
}
