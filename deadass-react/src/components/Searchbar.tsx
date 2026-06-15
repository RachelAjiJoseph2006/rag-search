import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [question, setQuestion] =
    useState<string>("");

  const navigate = useNavigate();

  function handleSearch(): void {
    if (!question.trim()) return;

    navigate(
      `/results?q=${encodeURIComponent(
        question
      )}`
    );
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Ask something..."
      />

      <button
        className="search-button"
        onClick={handleSearch}
      >
        🔍
      </button>
    </div>
  );
}

export default SearchBar;