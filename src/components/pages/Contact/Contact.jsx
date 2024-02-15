import Navbar from "../../ui/Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <div className="contact">
        <h1>Contact</h1>
        <a href="mailto:jacobbroughtondev@gmail.com">
          Email me if you have any questions. - Jacob
        </a>
      </div>
    </main>
  );
};
export default Contact;
