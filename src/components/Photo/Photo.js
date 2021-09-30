import {
  container,
  title,
  text,
  imageGraphicDesign,
  imagePhotography,
} from "./Photo.module.css";

const Photo = ({ data }) => {
  return (
    <div
      className={`${container} ${
        data.img === "GraphicDesign" ? imageGraphicDesign : imagePhotography
      }`}
    >
      <h2 className={title}>{data.title}</h2>
      <p className={text}>{data.text}</p>
    </div>
  );
};

export default Photo;
