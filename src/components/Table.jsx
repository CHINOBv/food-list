const Table = ({ food, setFood }) => {
  const deleteFood = (id) => {
    const oldFood = [...food];
    const newFood = oldFood.filter((item) => item.id !== id);

    setFood(newFood);
  };

  return (
    <>
      <div className="col-md-8 mt-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {food.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="w-25">
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => deleteFood(item.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
