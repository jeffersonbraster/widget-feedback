import { useState } from "react";
import feedbackTypes from "../../utils/FeedBackTypes";
import CloseButton from "../CloseButton";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccess from "./Steps/FeedbackSuccess";
import FeedBackTypeStep from "./Steps/FeedbackTypeStep";

export type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSend(false);
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccess restartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              restartFeedback={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
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
