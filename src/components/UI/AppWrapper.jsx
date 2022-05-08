import Header from "../Header/Header";

const AppWrapper = (props) => {
  return (
    <div className="font-nunito text-very-dark-blue-lm dark:text-white">
      <Header />
      {props.children}
    </div>
  );
};

export default AppWrapper;
