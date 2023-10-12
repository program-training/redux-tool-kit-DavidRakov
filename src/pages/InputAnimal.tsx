import { showAnimal } from "../store/animalSlice";
import { useAppDispatch } from "../store/hooks";

const InputAnimal = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <input
        type="text"
        onChange={(e) => dispatch(showAnimal(e.target.value))}
        placeholder="שם החיה:"
        style={{ width: "420px", padding: "10px" }}
      />
    </>
  );
};

export default InputAnimal;
