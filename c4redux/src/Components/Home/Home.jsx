import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventsAction } from "../../Redux/events/eventsaction";

export const Home = () => {
  const [events, setEvents] = useState([]);
  let dispatch = useDispatch();
  let user_status = useSelector((state) => state.login);
  let event = useSelector((state) => state.event.events);
  console.log(event);
  // console.log(event);
  const [location, setLocation] = useState(null);
  //console.log(user_status);
  const loc_filter = (location) => {
    // axios.get("http://localhost:8080/meetups").then(({ data }) => {
    //   let data1 = data.filter((e) => e.location === location);
    //   //console.log(data1)
    //   setEvents(data1);
    // });
    let data1 = event.filter((e) => e.location === location);
    // dispatch(eventsAction(data1));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/meetups")
      .then(({ data }) => {
        let data1 = data.sort((a, b) => a.date - b.data);
        //console.log(data1)
        setEvents(data1);
        dispatch(eventsAction(data1));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="homeContainer">
      {user_status.user ? (
        <div className="subscribedData">
          <div>
            <select
              // value={location}  // add value here
              onChange={(e) => {
                setLocation(e.target.value);
                loc_filter(location);
              }}
            >
              <option value="">------</option>
              <option value="bangalore">Bangalore</option>
              <option value="kolkata">Kolkata</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
          <Link to={`/addmeetup`}> Add Meetup</Link>
          <h1>Subscribed Events</h1>
          <div className="subscribedEvents">
            {/* All user subcribed events should be displayed here in an ascending order of date */}

            {event.map((el) => {
              return (
                <Link to={`/meetup/${el.id}`} className="events border">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                  <div className=" border border-dark p-3 m-2 w-50 mx-auto">
                    <div className="title">
                      <h2>{el.title}</h2>
                    </div>
                    <div className="date">
                      <h2>{el.date}</h2>
                    </div>
                    <div className="location">
                      <h2>{el.location}</h2>
                    </div>

                    <div className="time">
                      <h2>{el.time}</h2>
                    </div>

                    <div className="description">
                      <h2>{el.description}</h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div>
            <select
              // value={location}  // add value here
              onChange={(e) => {
                setLocation(e.target.value);
                loc_filter(location);
              }}
            >
              <option value="">------</option>
              <option value="bangalore">Bangalore</option>
              <option value="kolkata">Kolkata</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
          {event
            .filter((el) => el) // Filter on the basis of Users interests and location (both true)
            .map((el) => {
              return (
                <Link to={`/meetup/${el.id}`} className="events">
                  {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
                  <div className="title">
                    <h2>{el.title}</h2>
                  </div>
                  <div className="date">
                    <h2>{el.date}</h2>
                  </div>
                  <div className="location">
                    <h2>{el.location}</h2>
                  </div>

                  <div className="time">
                    <h2>{el.time}</h2>
                  </div>

                  <div className="description">
                    <h2>{el.description}</h2>
                  </div>
                </Link>
              );
            })}
        </>
      )}
    </div>
  );
};
