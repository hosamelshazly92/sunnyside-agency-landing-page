import { container, title, text } from "./Block.module.css";
import CTA from "../CTA/CTA";

const Block = ({ data }) => {
  return (
    <div className={container}>
      <h2 className={title}>{data.title}</h2>
      <p className={text}>{data.text}</p>
      <CTA>{data.cta}</CTA>
    </div>
  );
};

export default Block;
