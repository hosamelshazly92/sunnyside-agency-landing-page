import {
  container,
  nav,
  navMenu,
  iconNavMenu,
  imageLogo,
  content,
  pitch,
  imageArrow,
  section,
  reverse,
  direction,
  custom,
  title,
  imageGallery,
  footer,
  sectionSocialMedia,
  linkSocialMedia,
  iconSocialMedia,
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
import Photo from "./components/Photo/Photo";
import Testimonial from "./components/Testimonial/Testimonial";
import imageEmily from "./images/image-emily.jpg";
import imageThomas from "./images/image-thomas.jpg";
import imageJennie from "./images/image-jennie.jpg";
import imageGalleryMilkbottles from "./images/desktop/image-gallery-milkbottles.jpg";
import imageGalleryOrange from "./images/desktop/image-gallery-orange.jpg";
import imageGalleryCone from "./images/desktop/image-gallery-cone.jpg";
import imageGallerySugarcubes from "./images/desktop/image-gallery-sugarcubes.jpg";
import iconFacebook from "./images/icon-facebook.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconPinterest from "./images/icon-pinterest.svg";
import iconMenu from "./images/icon-hamburger.svg";

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
      nam: "About",
      link: "#about",
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

  const photos = [
    {
      img: "GraphicDesign",
      title: "Graphic Design",
      text: "We deliver artwork that underscores your brand message and captures potential clients' attention.",
    },
    {
      img: "Photography",
      title: "Photography",
      text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];

  const users = [
    {
      id: uuid(),
      pic: imageEmily,
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      nam: "Emily R.",
      role: "Marketing Director",
    },
    {
      id: uuid(),
      pic: imageThomas,
      text: "Sunnyside's enthusiasm coupled with their keep interest in our brand's success made it a satisfying and enjoyable experience.",
      nam: "Thomas S.",
      role: "Chief Operating Officer",
    },
    {
      id: uuid(),
      pic: imageJennie,
      text: "Incredible end result! Our sales increaseed over 400% when we worked with Sunnyside. Highly recommended!",
      nam: "Jennie F.",
      role: "Business Owner",
    },
  ];

  return (
    <Fragment>
      <div className={container}>
        <div className={nav}>
          <img className={imageLogo} src={logo} alt="web logo" />

          <ul className={navMenu}>
            {menu.map((link) => (
              <li key={link.id}>
                <Link data={link} />
              </li>
            ))}
          </ul>

          <img className={iconNavMenu} src={iconMenu} alt="menu icon" />
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

      <div className={section}>
        <Photo data={photos[0]} />
        <Photo data={photos[1]} />
      </div>

      <div className={`${section} ${direction} ${custom}`}>
        <h2 className={title}>Client Testimonials</h2>

        <div className={section}>
          {users.map((usr) => (
            <Testimonial key={usr.id} data={usr} />
          ))}
        </div>
      </div>

      <div className={section}>
        <img
          className={imageGallery}
          src={imageGalleryMilkbottles}
          alt="gallery shot"
        />
        <img
          className={imageGallery}
          src={imageGalleryOrange}
          alt="gallery shot"
        />
        <img
          className={imageGallery}
          src={imageGalleryCone}
          alt="gallery shot"
        />
        <img
          className={imageGallery}
          src={imageGallerySugarcubes}
          alt="gallery shot"
        />
      </div>

      <footer className={footer}>
        <img className={imageLogo} src={logo} alt="web logo" />

        <div className={sectionSocialMedia}>
          <a className={linkSocialMedia} href="#home">
            Home
          </a>
          <a className={linkSocialMedia} href="#services">
            Services
          </a>
          <a className={linkSocialMedia} href="#about">
            About
          </a>
        </div>

        <div className={iconSocialMedia}>
          <img src={iconFacebook} alt="social media link" />
          <img src={iconInstagram} alt="social media link" />
          <img src={iconTwitter} alt="social media link" />
          <img src={iconPinterest} alt="social media link" />
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
