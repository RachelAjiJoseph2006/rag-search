type Props = {
  answer: string;
};

function AnswerCard({
  answer,
}: Props) {
  return (
    <div className="answer-card">
      <p>{answer}</p>
    </div>
  );
}

export default AnswerCard;