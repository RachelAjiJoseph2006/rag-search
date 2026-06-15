import { useState } from "react";

type Props = {
  text: string;
  limit?: number;
};

function SourceCard({ text, limit = 120 }: Props) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > limit;

  const displayText =
    expanded || !isLong
      ? text
      : text.slice(0, limit) + "...";

  return (
    <div className={`sourceChunk ${expanded ? "expanded" : "collapsed"}`}>
      <p className="chunkText">{displayText}</p>

      {isLong && (
        <button
          className="seeMoreBtn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default SourceCard;