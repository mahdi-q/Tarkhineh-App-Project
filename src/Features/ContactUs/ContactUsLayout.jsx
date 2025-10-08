import Header from "../../UI/Header";

const slides = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/contact-us.webp",
    text: "با ترخینه در تماس باشید.",
  },
];

function ContactUsLayout() {
  return (
    <div>
      <Header slides={slides} />

      <div className="min-h-screen"></div>
    </div>
  );
}
export default ContactUsLayout;
