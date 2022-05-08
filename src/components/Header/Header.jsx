import Container from "../UI/Container";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  return (
    <header className="py-8 bg-white  dark:bg-dark-blue-dm">
      <Container>
        <div className="flex justify-between">
          <h1 className="font-extrabold">Where in the world?</h1>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default Header;
