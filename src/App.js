import React from "react";
import "./App.scss";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";

function App() {
  const [time, setTime] = React.useState(5);
  const [isCounting, setIsCounting] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTime((time) => (time >= 1 ? time - 1 : 0));
    }, 1000);
    if (time === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [time, isCounting]);

  return (
    <div className="App">
      <Header title="Timer" />
      <Timer time={time} />
      <Buttons
        time={time}
        setIsCounting={setIsCounting}
        setTime={setTime}
        isCounting={isCounting}
      />
    </div>
  );
}

export default App;
