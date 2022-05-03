import { useState } from "react";
import feedbackTypes from "../utils/FeedBackTypes";
import CloseButton from "./CloseButton";

type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                type="button"
                key={key}
                onClick={() => setFeedbackType(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>oie</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por{" "}
        <a
          className="underline underline-offset-2"
          target={`_blank`}
          href="https://jeffersonbrandao.com.br"
        >
          Jefferson Brandão
        </a>
      </footer>
    </div>
  );
};

export default WidgetForm;
