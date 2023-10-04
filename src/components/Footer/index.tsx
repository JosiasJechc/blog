import styles from "./styles.module.css";
import image from "./img/LogoSeminario.jpeg";
import Image from "next/image";

const Footer = () => {
  return (
     <footer className={styles.footer}>
            <ul>
                <li>Sistemas</li>
                <li>Home</li>
                <li>Post</li>
                 <li>About</li>
            </ul>

            <ul>
                <li>Contactate con Nosotros</li>
                <li>Facebook</li>
                <li>Twiter</li>
                 <li>Telegram</li>
            </ul>

            <ul>
                <li>Next js</li>
            </ul>
            <ul>
                <li>Versel</li>
            </ul>

            <ul>
               <img src="https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/J6TBO7C3DVFK3GIIDWWQUN6UMA.jpg" height={100} width={100} alt="" />
            </ul>
        </footer>
  );
};

export default Footer;
