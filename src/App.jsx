import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksList from "./components/BooksList";
import Footer from "./components/Footer";
import FormAddBook from "./components/FormAddBook";
import useFetch from "./hooks/useFetch";

function App() {
  const dataBooks = useFetch("http://localhost:8000/books");

  return (
    <>
      <Router>
        <Navbar />
        <main className="container mx-auto flex flex-col gap-y-6">
          <Switch>
            <Route exact path="/">
              {dataBooks && (
                <>
                  <BooksList
                    bgColorList={"#e7f0fe"}
                    bgColorCounter={"#b6d1fc"}
                    textCounterColor={"#0a61e4"}
                    title="Unread Books"
                    books={dataBooks.filter(
                      (book) => book.isCompleted === false
                    )}
                  />
                  <BooksList
                    bgColorList={"#d8f6ed"}
                    bgColorCounter={"#b5ddd2"}
                    textCounterColor={"#487569"}
                    title="Readed Books"
                    books={dataBooks.filter(
                      (book) => book.isCompleted === true
                    )}
                  />
                </>
              )}
            </Route>
            <Route path="/addbook">
              <FormAddBook />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
