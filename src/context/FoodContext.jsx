import { createContext, useState } from "react";

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [food, setFood] = useState(JSON.parse(localStorage.getItem("food")));

  return (
    <FoodContext.Provider
      value={{
        food,
        setFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
