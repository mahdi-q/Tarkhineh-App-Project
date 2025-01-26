import FooterForm from "./FooterForm";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div className="min-h-40 bottom-0 w-full bg-[url(/Images/footer-image.jpg)] bg-cover bg-center lg:min-h-80">
      <div className="h-full w-full bg-gray-800/20 p-5 backdrop-brightness-50 md:px-16 lg:py-10 xl:px-28">
        <div className="container flex items-start justify-between">
          <FooterLinks />

          <div className="hidden flex-col gap-y-8 lg:flex">
            <h2 className="text-lg font-light text-white lg:font-bold">
              پیام به ترخینه
            </h2>

            <FooterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
