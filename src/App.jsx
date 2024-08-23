import { useState } from "react";
import Fetch from "./Components/Fetch";
import Promise from "./Components/Promise";
import FromAction from "./Components/FromAction";
import FromState from "./Components/FromState";
import FromStatus from "./Components/FromStatus";
import ForwordRef from "./Components/ForwordRef";
import Optimistic from "./Components/Optimistic";

function App() {
  const [example, setExample] = useState("");

  function handleChange(e) {
    setExample(e.target.value);
  }

  let content;
  if (example === "Fetch") {
    content = <Fetch />;
  }

  if (example === "Promise") {
    content = <Promise />;
  }

  if (example === "FromAction") {
    content = <FromAction />;
  }

  if (example === "FromState") {
    content = (
      <div className="mainState">
        <FromState itemID="1" title="Product 1" />
        <FromState itemID="2" title="Product 2" />
      </div>
    );
  }

  if (example === "FromStatus") {
    content = <FromStatus />;
  }

  if (example === "ForwordRef") {
    content = <ForwordRef />;
  }

  if (example === "Optimistic") {
    content = <Optimistic />;
  }
  return (
    <div className="main">
      <h1>What is new with React version-19</h1>
      <div>
        <p>
          We will show you what the React update version has taken, in a very
          <br />
          beautiful way through this examples. Its analyzed below..
        </p>
      </div>
      <div className="option">
        <select onChange={handleChange}>
          <option>Select example</option>
          <option value="Fetch">&quot;use&quot; Hook to fetch data </option>
          <option value="Promise">&quot;use&quot; Hook with promise</option>
          <option value="FromAction">&quot;Form Action&quot; </option>
          <option value="FromState">&quot;useFormState&quot;</option>
          <option value="FromStatus">&quot;useFormStatus&quot;</option>
          <option value="ForwordRef">&quot;forwardRef&quot;</option>
          <option value="Optimistic">&quot;useOptamistic&quot;</option>
        </select>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default App;
