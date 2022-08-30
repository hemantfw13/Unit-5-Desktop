import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { BookCard } from "../Components/BookCard/BookCard";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bookcard" element={<BookCard />} />
        <Route exact path="/bookdetailpage/:id" element={<BookDetailsPage />} />
        <Route exact path="/section" element={<Section />} />
        <Route exact path="/notfound" element={<NotFound />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
