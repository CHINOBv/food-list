import { useState } from "react";

import { v4 as uuid } from "uuid";

const Form = ({ setFood }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const saveFood = (e) => {
    e.preventDefault();

    if (!name.trim() || price <= 0) {
      alert("Error, All Field Are Required");
    }

    const food = { id: uuid(), name, price };
    setFood((e) => [...e, food]);
  };

  return (
    <>
      <div className="col-md-4 card mt-5">
        <h3 className="text-center mt-4">Add You Food</h3>
        <form onSubmit={(e) => saveFood(e)}>
          <div className="my-4">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="my-4">
            <label>Price:</label>
            <input
              type="number"
              name="Price"
              className="form-control"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.valueAsNumber)}
              value={price}
            />
          </div>
          <input
            type="submit"
            value="Add"
            className="btn btn-success w-100 mb-4"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
