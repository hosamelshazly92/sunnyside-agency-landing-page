import {
  container,
  nav,
  imageLogo,
  content,
  pitch,
  imageArrow,
  section,
  reverse,
} from "./App.module.css";
import logo from "./images/logo.svg";
import Link from "./components/Link/Link";
import { v4 as uuid } from "uuid";
import icon from "./images/icon-arrow-down.svg";
import { Fragment } from "react";
import Image from "./components/Image/Image";
import imageTransform from "./images/desktop/image-transform.jpg";
import imageStandOut from "./images/desktop/image-stand-out.jpg";
import Block from "./components/Block/Block";

function App() {
  const menu = [
    {
      id: uuid(),
      nam: "Home",
      link: "#home",
    },
    {
      id: uuid(),
      nam: "Services",
      link: "#services",
    },
    {
      id: uuid(),
      nam: "Projects",
      link: "#projects",
    },
    {
      id: uuid(),
      nam: "Contact",
      link: "#contact",
    },
  ];

  const images = {
    img_0: imageTransform,
    img_1: imageStandOut,
  };

  const blocks = [
    {
      title: "Transform your brand",
      text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      cta: "Learn More",
    },
    {
      title: "Stand out to the right audience",
      text: "Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we will build and extend your brand in digital places.",
      cta: "Learn More",
    },
  ];

  return (
    <Fragment>
      <div className={container}>
        <div className={nav}>
          <img className={imageLogo} src={logo} alt="web logo" />

          <ul>
            {menu.map((link) => (
              <li key={link.id}>
                <Link data={link} />
              </li>
            ))}
          </ul>
        </div>

        <div className={content}>
          <h1 className={pitch}>We Are Creatives</h1>
          <img className={imageArrow} src={icon} alt="arrow icon" />
        </div>
      </div>

      <div className={`${section} ${reverse}`}>
        <Image data={images.img_0} />
        <Block data={blocks[0]} />
      </div>

      <div className={section}>
        <Image data={images.img_1} />
        <Block data={blocks[1]} />
      </div>
    </Fragment>
  );
}

export default App;
