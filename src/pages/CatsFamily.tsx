import { showAnimal } from "../store/animalSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const animals = ["חתול", "נמר", "אריה"];

const CatsFamily = () => {
  const storeAnimal = useAppSelector((store) => store.header.animal);
  const dispatch = useAppDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {animals.map((animal) => (
        <button
          key={animal}
          style={{
            background: animal === storeAnimal ? "red" : "green",
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

export default CatsFamily;
