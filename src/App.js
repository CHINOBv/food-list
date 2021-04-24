import Form from "./components/Form";
import Table from "./components/Table";
import FoodContext from "./context/FoodContext";

function App() {
  return (
    <>
      <h1 className="text-center text-white bg-dark">Food List</h1>
      <div className="container row m-auto">
        <FoodContext>
          <Form />
          <Table />
        </FoodContext>
      </div>
    </>
  );
}

export default App;
