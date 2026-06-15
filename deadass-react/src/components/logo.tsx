function Logo() {
  const text = "DEADASS.";

  return (
    <h1 className="logo">
      {[...text].map((char, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

export default Logo;