import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div;
  /* Apply some responsive styling to children */
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      console.log(res);
      setBook(res.data);
    });
  }, []);

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <div className="mainContainer row">
        {book.map((e) => {
          return (
            <div className="col-4">
              <Link to={`/bookdetailspage/${e.id}`}>
                <img src={`${e.imageUrl}`} alt="" />
                <p>{e.title}</p>
                <p>{e.price}</p>
              </Link>
            </div>
          );
        })}

        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      </div>
    </div>
  );
};
