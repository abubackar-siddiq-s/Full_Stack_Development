import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";

const ColorContext = createContext();

function ColorBox() {
  const { color, setColor } = useContext(ColorContext);

  const input = useRef();

  useEffect(() => {
    document.title = "Color: " + color;
  }, [color]);

  return (
    <div
      style={{
        backgroundColor: color.toLowerCase(),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>My Favourite Color is: {color}</h1>

      <p>Select your favourite color:</p>
      <button onClick={() => setColor("Red")}>Red</button>
      <br />
      <button onClick={() => setColor("Blue")}>Blue</button>
      <br />
      <button onClick={() => setColor("Pink")}>Pink</button>
      <br />
      <button onClick={() => setColor("Green")}>Green</button>
      <br />
      <button onClick={() => setColor("Yellow")}>Yellow</button>
      <br />
      <button onClick={() => setColor("Purple")}>Purple</button>

      <p>(or)</p>

      <input ref={input} placeholder="Enter your Favorite Color" />
      <br />
      <button onClick={() => setColor(input.current.value)}>Set Color</button>
    </div>
  );
}

function App() {
  const [color, setColor] = useState("--------");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorBox />
    </ColorContext.Provider>
  );
}

export default App;