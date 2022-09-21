import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function GenerateRandomNumber(props) {
  if (props.number < 5) {
    throw new Error();
  }
}

function App() {
  const [r_number, setR_number] = React.useState(
    "press button to generate random from 1 to 20"
  );

  function randomInteger() {
    setR_number(Math.floor(Math.random() * 20));
  }

  return (
    <div>
      <h1>{r_number}</h1>
      <button onClick={randomInteger}>Generate</button>
      
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setR_number("press button to generate random from 1 to 20")}>

      {/* {r_number < 5 ? <GenerateRandomNumber number={r_number} /> : <></>} */}

      <GenerateRandomNumber number={r_number} />
      </ErrorBoundary>
    </div>
  );
}
export default App;
