function EventCard({ event }) {
  return (
    <div>
      <h2>{event.title}</h2>

      <p>{event.description}</p>

      <p>
        📍 {event.location}
      </p>

      <p>
        📅{" "}
        {new Date(
          event.date
        ).toLocaleDateString()}
      </p>

      <div>
        {event.images?.map(
          (img, index) => (
            <img
              key={index}
              src={img}
              alt={event.title}
              width="250"
            />
          )
        )}
      </div>
    </div>
  );
}

export default EventCard;