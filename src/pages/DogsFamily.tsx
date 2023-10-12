import { showAnimal } from "../store/animalSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const animals = ["כלב", "זאב", "שועל"];

const DogsFamily = () => {
  const storeAnimal = useAppSelector((store) => store.header.animal);
  const dispatch = useAppDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {animals.map((animal) => (
        <button
          key={animal}
          style={{
            background: animal === storeAnimal ? "red" : "yellow",
          }}
          onClick={() => dispatch(showAnimal(animal))}
          className="buttons"
        >
          {animal}
        </button>
      ))}
    </div>
  );
};

export default DogsFamily;
