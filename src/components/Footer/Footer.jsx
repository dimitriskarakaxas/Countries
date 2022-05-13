import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { DiGithubFull } from "react-icons/di";

import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="w-full h-[200px] fixed bottom-0 -z-10 bg-white dark:bg-dark-blue-dm flex justify-center items-center">
      <Container>
        <div className="text-center">
          <Link to="/" className="font-bold">
            Where in the world?
          </Link>
          <ul className="flex justify-center mt-3">
            <li>
              <a
                href="https://www.linkedin.com/in/dimitris-karakaxas/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="ml-4">
              <a href="/">
                <SiWhatsapp />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://github.com/dimitriskarakaxas"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <p className="flex justify-center items-center mb-1">
            You can find the source code by clicking{" "}
            <AiOutlineCaretDown className="ml-2" />
          </p>
          <a
            href="https://github.com/dimitriskarakaxas/Countries"
            className="flex justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <p className="bg-blue-400 hover:bg-purple-400 px-3 py-1 flex justify-center items-center">
              Get the code <DiGithubFull className="text-4xl ml-2" />
            </p>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
