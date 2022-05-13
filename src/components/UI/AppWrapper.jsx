import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const AppWrapper = (props) => {
  return (
    <div className="font-nunito text-very-dark-blue-lm dark:text-white bg-very-light-gray-lm dark:bg-very-dark-blue-dm">
      <div className="min-h-screen relative z-10 mb-[200px] shadow-md">
        <Header />
        <main className="py-8">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AppWrapper;
