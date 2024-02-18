// data import
import booksData from "./assets/data/booksData";
import classData from "./assets/data/classData";
// components import
import Book from "./Components/Book";
import Class from "./Components/Class";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Heading from "./Components/MiniComponents/Heading";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <div className="backgroundBody md:p-5">
        <Home />
        <div className="m-5 min-h-80">
          <Heading>Your Books</Heading>
          <div className="center flex-wrap  gap-5 md:gap-10">
            {booksData.map(({ title, image, link }) => {
              return <Book key={title} image={image} link={link} />;
            })}
          </div>
        </div>
        <Heading>Classes And Resources</Heading>
        <div className="flex flex-col gap-3 py-4">
          {classData.map(
            ({ id, title, paragraph, instructor, image, resources }) => {
              return (
                <Class
                  key={id}
                  title={title}
                  paragraph={paragraph}
                  instructor={instructor}
                  image={image}
                  resources={resources}
                />
              );
            },
          )}
        </div>
        <Heading>Marks</Heading>
        <Search />
      </div>

      <Footer />
    </>
  );
}

export default App;
