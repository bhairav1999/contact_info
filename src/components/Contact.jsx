import Button from "../common/button/Button";
import "./Conatct.css";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact_heading">Contact Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident qui
        saepe, explicabo hic nostrum sit quas, excepturi ducimus itaque libero
        quo eos laboriosam, similique iste amet officiis quae facere eveniet.
      </p>

   <div className="button_contact">
   <Button text="VIA SUPPORT CHAT" />
   <Button text="VIA CALL" isService={true} /></div>
    </div>
  );
};

export default Contact;
