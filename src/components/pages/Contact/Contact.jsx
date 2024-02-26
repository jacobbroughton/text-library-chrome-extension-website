import Navbar from "../../ui/Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <div className="contact">
        <h1>Contact</h1>
        <p>Feel free to <a href="mailto:jacobbroughtondev@gmail.com">email me</a> if you have any questions. - Jacob</p>
      </div>
    </main>
  );
};
export default Contact;
