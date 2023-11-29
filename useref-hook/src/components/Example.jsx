import React, { useRef } from "react";

const Example = () => {
  const sudriptoRef = useRef(null);
  const biplabRef = useRef(null);
  const sulagnaRef = useRef(null);

  const handleScroll = (nam) => {
    let target;
    if (nam === "sudripto") {
      target = sudriptoRef;
    } else if (nam === "biplab") {
      target = biplabRef;
    } else if (nam === "sulagna") {
      target = sulagnaRef;
    } else {
      return;
    }

    if (target.current) {
      target.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button onClick={() => handleScroll("sudripto")}>Sudripto</button>
      <button onClick={() => handleScroll("biplab")}>Biplab</button>
      <button onClick={() => handleScroll("sulagna")}>Sulagna</button>

      <div className="info" ref={sudriptoRef}>
        <h4>Sudripto</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quis
          minus aut vel cumque saepe quibusdam asperiores aperiam? Consectetur,
          maiores.
        </p>
      </div>
      <div className="info" ref={biplabRef}>
        <h4>Biplab</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quis
          minus aut vel cumque saepe quibusdam asperiores aperiam? Consectetur,
          maiores.
        </p>
      </div>
      <div className="info" ref={sulagnaRef}>
        <h4>Sulagna</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quis
          minus aut vel cumque saepe quibusdam asperiores aperiam? Consectetur,
          maiores.
        </p>
      </div>
    </div>
  );
};

export default Example;
