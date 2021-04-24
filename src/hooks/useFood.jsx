import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { FoodContext } from "../context/FoodContext";

const useFood = () => {
  const { food, setFood } = useContext(FoodContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const saveFood = (e) => {
    e.preventDefault();

    if (!name.trim() || price <= 0) {
      return alert("Error, All Field Are Required");
    }

    const food = { id: uuid(), name, price };

    const foodLS = JSON.parse(localStorage.getItem("food"));

    let newFood;
    if (foodLS) {
      newFood = [...foodLS, food];
    } else {
      newFood = [food];
    }

    localStorage.setItem("food", JSON.stringify(newFood));
    setFood(newFood);
  };

  const deleteFood = (id) => {
    const oldFood = [...food];
    const newFood = oldFood.filter((item) => item.id !== id);

    //const foodLS = JSON.parse(localStorage.getItem('food'));

    localStorage.setItem("food", JSON.stringify(newFood));
    setFood(newFood);
  };

  return {
    saveFood,
    deleteFood,
    name,
    price,
    setName,
    setPrice,
    food,
    setFood,
  };
};

export default useFood;
