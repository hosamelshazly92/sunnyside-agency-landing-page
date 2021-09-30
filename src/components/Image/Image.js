import { container } from "./Image.module.css";

const Image = ({ data }) => {
  return <img className={container} src={data} alt="background shot" />;
};

export default Image;
