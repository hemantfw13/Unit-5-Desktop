import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Event = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8080/meetups/${id}`).then(({ data }) => {
      console.log(data);
      setEvent(data);
    });
  }, []);
  return (
    <div className="eventContainer">
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}
      <div className="title"> {event.title}</div>
      <div className="date"> {event.date}</div>
      <div className="location"> {event.location}</div>
      <div className="time"> {event.time}</div>
      <div className="theme">{event.theme}</div>
      <div className="description">{event.description}</div>
      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <>
        {true ? (
          <button className="unsubscribe">Unsubscribe</button>
        ) : (
          <button className="subscribe" onClick={() => {}}>
            Subscribe
          </button>
        )}
      </>
    </div>
  );
};
