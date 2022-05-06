import bugImgUrl from "../assets/imgs/Bug.svg";
import ideaImgUrl from "../assets/imgs/Idea.svg";
import thoughtImgUrl from "../assets/imgs/Thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "Imagem de uma minhoca representando um bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgUrl,
      alt: "Imagem de uma lampada acesa representando uma ideia",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export default feedbackTypes;
