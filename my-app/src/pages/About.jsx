import Button from "../assets/components/Button";
import Nav from "../assets/components/Nav";
import styles from "./About.module.scss";

import Footer from "../assets/svg/footer_bg.svg";
import img_vd from "../assets/png/img_vd.png";

function About() {
  return (
    <>
      <Nav />
      <div className={styles.aboutPage}>
        <div className={styles.container}>
          <article className={styles.aboutInfo}>
            <h1 className={styles.header}>Vårt kaffe</h1>
            <p className={styles.p1}>
              Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
              grounds dripper, crema, strong whipped, variety extra iced id
              lungo half and half mazagran. <br />
              Pumpkin spice.
            </p>
            <p className={styles.p2}>
              Que dark fair trade, spoon decaffeinated, barista wings whipped,
              as rich aftertaste, con panna milk black, arabica white rich beans
              single shot extra affogato. So affogato macchiato sit extraction
              instant grinder seasonal organic, turkish single shot, single
              origin, and robusta strong to go so dripper. Viennese froth,
              grounds caramelization skinny aromatic cup kopi-luwak, fair trade
              flavour,
              <br />
              frappuccino medium, café au lait flavour cultivar ut bar instant
              kopi-luwak. <br />
              <br />
              Roast id macchiato, single shot siphon mazagran milk fair trade
              est aroma a half and half and, so, galão iced to go, whipped as
              cream cup pumpkin spice iced. At extra, rich grinder, brewed to
              go, steamed half and half at, that, percolator macchiato trifecta
              and body as arabica dripper. In galão black java milk sit
              trifecta, robusta, acerbic café au lait instant shop latte.
              Seasonal bar shop filter aroma id, crema, affogato viennese
              cultivar aftertaste, seasonal, percolator cream black, galão
              flavour, milk aromatic turkish skinny crema.
            </p>
          </article>
          <section className={styles.vdInfo}>
            <img src={img_vd} alt="Image of Ms.Cortado the VD" />
            <h2>Eva Cortado</h2>
            <p className={styles.vdInfo}>VD & Grundare</p>
          </section>
          <img src={Footer} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
