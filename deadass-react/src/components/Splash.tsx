import { useEffect, useState } from "react";
import "../App.css";

function Splash() {
  const [hide, setHide] =
    useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="splash-screen">
      <div className="netflix-logo">
        D
      </div>
    </div>
  );
}

export default Splash;