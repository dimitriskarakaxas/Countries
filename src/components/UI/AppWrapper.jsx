import Header from "../Header/Header";

const AppWrapper = (props) => {
  return (
    <div className="font-nunito text-very-dark-blue-lm dark:text-white bg-very-light-gray-lm dark:bg-very-dark-blue-dm min-h-screen">
      <Header />
      <main className="py-8">{props.children}</main>
    </div>
  );
};

export default AppWrapper;
