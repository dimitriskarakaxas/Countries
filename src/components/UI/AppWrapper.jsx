import Header from "../Header/Header";

const AppWrapper = (props) => {
  return (
    <div className="font-nunito text-very-dark-blue-lm dark:text-white bg-very-light-gray-lm dark:bg-very-dark-blue-dm min-h-screen">
      <Header />
      {props.children}
    </div>
  );
};

export default AppWrapper;
