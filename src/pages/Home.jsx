import Container from "../components/UI/Container";
import InputSearch from "../components/InputSearch/InputSearch";
import CountriesList from "../components/CountriesList/CountriesList";

const Home = () => {
  return (
    <section className="bg-very-light-gray-lm dark:bg-very-dark-blue-dm py-8">
      <Container>
        <InputSearch />
        <CountriesList />
      </Container>
    </section>
  );
};

export default Home;
