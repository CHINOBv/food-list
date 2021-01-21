import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [food, setFood] = useState([]);

  return (
    <>
      <h1 className="text-center text-white bg-dark">Food</h1>
      <div className="container row m-auto">
        <Form setFood={setFood} />
        <Table food={food} setFood={setFood} />
      </div>
    </>
  );
}

export default App;
