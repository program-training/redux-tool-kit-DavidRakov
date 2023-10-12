import CatsFamily from "./CatsFamily";
import DogsFamily from "./DogsFamily";
import InputAnimal from "./InputAnimal";

const BodyComponent = () => {
  return (
    <div>
      <div id="body-buttons">
        <CatsFamily />

        <DogsFamily />
      </div>
      <InputAnimal />
    </div>
  );
};

export default BodyComponent;
