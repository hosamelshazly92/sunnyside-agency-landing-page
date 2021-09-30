import { container, picture, text, name, role } from "./Testimonial.module.css";

const Testimonial = ({ data }) => {
  return (
    <div className={container}>
      <img className={picture} src={data.pic} alt="user" />
      <h4 className={name}>{data.nam}</h4>
      <p className={role}>{data.role}</p>
      <p className={text}>{data.text}</p>
    </div>
  );
};

export default Testimonial;
