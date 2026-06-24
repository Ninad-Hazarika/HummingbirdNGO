import { useEffect, useState } from "react";
import api from "../services/api";
import EventCard from "../components/EventCard";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/events");

        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>

      {events.map((event) => (
        <EventCard
          key={event._id}
          event={event}
          />
      ))}
    </div>
  );
}

export default Events;
