import { useBranches } from "../../Contexts/BranchesContext";
import Header from "../../UI/Header";
import ContactUsCard from "./ContactUsCard";

const slides = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/contact-us.webp",
    text: "با ترخینه در تماس باشید.",
  },
];

function ContactUsLayout() {
  const { ekbatanBranch, chalosBranch, aghdasiyehBranch, vanakBranch } =
    useBranches();

  if (
    !ekbatanBranch ||
    !chalosBranch ||
    !aghdasiyehBranch ||
    !vanakBranch ||
    !ekbatanBranch.name ||
    !chalosBranch.name ||
    !aghdasiyehBranch.name ||
    !vanakBranch.name
  )
    return (
      <div className="flex h-[60vh] animate-pulse items-center justify-center font-bold lg:text-lg">
        در حال بارگذاری اطلاعات ...
      </div>
    );

  return (
    <div>
      <Header slides={slides} />

      <div className="container flex min-h-screen flex-col gap-7 py-6 lg:py-12">
        <ContactUsCard branch={ekbatanBranch} />

        <ContactUsCard branch={chalosBranch} />

        <ContactUsCard branch={aghdasiyehBranch} />

        <ContactUsCard branch={vanakBranch} />
      </div>
    </div>
  );
}
export default ContactUsLayout;
