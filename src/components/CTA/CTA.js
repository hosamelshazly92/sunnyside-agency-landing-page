import { cta } from "./CTA.module.css";

const CTA = ({ children }) => {
  return (
    <div>
      <a className={cta} href="#learnmore">
        {children}
      </a>
    </div>
  );
};

export default CTA;
