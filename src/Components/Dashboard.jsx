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
  const { events, deleteEvent } = useContext(EventsContext);
  const navigate = useNavigate();

  const locales = {
    "en-US": enUS,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  // keep track of current date and view
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  // track selected event
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = () => setSelectedEvent(null);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

 // delete handler
const handleDelete = () => {
  if (selectedEvent) {
    deleteEvent(selectedEvent); // call context function
    setSelectedEvent(null);
  }
};

  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
     <br/> 
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week", "day", "agenda"]}
        view={view}
        onView={setView}     // updates when user clicks Month/Week/Day/Agenda
        date={date}
        onNavigate={setDate} // updates when user clicks Today/Back/Next
        onSelectEvent={handleSelectEvent} // fires when event is clicked
      />

       {/* Popup event modal */}
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
            
<Button variant="primary" onClick={() => navigate("/newEvent", { state: { eventToEdit: selectedEvent } })}>
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
