import { useParams } from "react-router-dom";
import Container from "../components/UI/Container";

const Country = () => {
  const params = useParams();

  return (
    <main>
      <Container>{params.countryName}</Container>
    </main>
  );
};

export default Country;
