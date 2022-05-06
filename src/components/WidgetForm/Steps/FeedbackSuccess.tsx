import CloseButton from "../../CloseButton";
import imgSuccess from "../../../assets/imgs/Success.svg";

type FeedbackSuccessProps = {
  restartFeedback: () => void;
};

const FeedbackSuccess = ({ restartFeedback }: FeedbackSuccessProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img
          src={imgSuccess}
          alt="Imagem de uma seta indicando sucesso ao enviar formulario"
        />

        <span className="text-xl mt-2">Agradecemos seu feedback!</span>

        <button
          type="button"
          onClick={restartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};

export default FeedbackSuccess;
