import './Button.css'
const Button = ({ icon, text, isService}) => {
    console.log(text);
    return (
      <div>
        <button className={isService ? "profile_btn" : "primary_data"} >
          {icon}
          {text}
        </button>
      </div>
    );
  };
  
  export default Button;
  