import uniqid from "uniqid";
import imgAmy from "../images/amy.png";
import imgBender from "../images/bender.png";
import imgBrannigan from "../images/brannigan.png";
import imgConrad from "../images/conrad.png";
import imgFry from "../images/fry.png";
import imgLeela from "../images/leela.png";
import imgLuigi from "../images/luigi.png";
import imgMario from "../images/mario.png";
import imgMom from "../images/mom.png";
import imgNibbler from "../images/nibbler.png";
import imgProfessor from "../images/professor.png";
import imgZoidberg from "../images/zoidberg.png";

const textDescription =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et";
const productData = [
  {
    name: "Fry",
    description: textDescription,
    price: 10.0,
    amount: 0,
    img: imgFry,
    id: uniqid(),
  },

  {
    name: "Bender",
    description: textDescription,
    price: 10.0,
    amount: 0,
    img: imgBender,
    id: uniqid(),
  },

  {
    name: "Brannigan",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgBrannigan,
    id: uniqid(),
  },

  {
    name: "Leela",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgLeela,
    id: uniqid(),
  },

  {
    name: "Nibbler",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgNibbler,
    id: uniqid(),
  },

  {
    name: "Luigi",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgLuigi,
    id: uniqid(),
  },

  {
    name: "Mario",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgMario,
    id: uniqid(),
  },
  {
    name: "Amy",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgAmy,
    id: uniqid(),
  },

  {
    name: "Mom",
    description: textDescription,
    price: 12.0,
    amount: 0,
    img: imgMom,
    id: uniqid(),
  },
];

export default productData;

/**
 * next steps:
 * 6-10 dasta entries
 * aim: display all data entries
 * cards for entries
 */
