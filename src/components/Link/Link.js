import { btn, link } from "./Link.module.css";

const Link = ({ data }) => {
  return (
    <a className={data.nam === "Contact" ? btn : link} href={data.link}>
      {data.nam}
    </a>
  );
};

export default Link;
