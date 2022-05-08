import Container from "../components/UI/Container";
import CountriesList from "../components/CountriesList/CountriesList";

const Home = () => {
  return (
    <section className="bg-very-light-gray-lm dark:bg-very-dark-blue-dm py-8">
      <Container>
        <CountriesList />
      </Container>
    </section>
  );
};

export default Home;
