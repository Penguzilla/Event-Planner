import NavBar from "../routes/NavBar";
import { useContext, useState } from "react";
import { EventsContext } from "../Context/eventsContext";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { events, deleteEvent } = useContext(EventsContext); //To get and delete events
  const navigate = useNavigate(); //Navigates to the new event page from the pop up

  //For the calendar
  const locales = { "en-US": enUS };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [selectedEvent, setSelectedEvent] = useState(null);

  //Event handlers. Close modal, delete event, click on an event will store it in selectedEvent
  const handleClose = () => setSelectedEvent(null);
  const handleSelectEvent = (event) => setSelectedEvent(event);

  const handleDelete = () => {
    if (selectedEvent) {
      deleteEvent(selectedEvent);
      setSelectedEvent(null);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
      <br />

      {/*Calendar*/}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week", "day", "agenda"]}
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
        onSelectEvent={handleSelectEvent}
      />
      <br />
      {/* I went looking to see if react had a calendar and found react big calendar and 
      figuring it would do what I needed the app to do I researched and impletmented it.
      I must have missed/forgotten the sentence that said "Use React's array.map() method to dynamically
generate these event displays based on the data stored in the app". Saw it when I went through
the objectives again only after I had already coded the react big calendar. Im pretty proud of 
my coding in this app so far so instead of removing what I already did I decided to rather add
this section to meet that objective*/}

      <h2>Summary of Events</h2>
      <ul>
        {events.map((evt, index) => (
          <li key={index}>
            <strong>{evt.title}</strong> — {evt.start.toLocaleString()} to{" "}
            {evt.end.toLocaleString()}
            {evt.location && <> | Location: {evt.location}</>}
            {evt.description && <> | Description: {evt.description}</>}
          </li>
        ))}
      </ul>

      {/* Popup modal for calendar events */}
      <Modal show={!!selectedEvent} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Date:</strong>{" "}
            {selectedEvent &&
              format(selectedEvent.start, "PPP p") +
                " - " +
                format(selectedEvent.end, "p")}
          </p>
          {selectedEvent?.location && (
            <p>
              <strong>Location:</strong> {selectedEvent.location}
            </p>
          )}
          {selectedEvent?.description && (
            <p>
              <strong>Description:</strong> {selectedEvent.description}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() =>
              navigate("/newEvent", { state: { eventToEdit: selectedEvent } })
            }
          >
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Event
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

{
  /* https://jquense.github.io/react-big-calendar the react big calendar*/
}
