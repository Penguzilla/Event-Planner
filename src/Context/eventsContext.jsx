import { createContext, useState } from "react";

export const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);

  function addEvent(newEvent) {
    setEvents((prev) => [...prev, newEvent]);
  }

  function deleteEvent(eventToDelete) {
    setEvents((prev) => prev.filter((e) => e !== eventToDelete));
  }

  function updateEvent(oldEvent, updatedEvent) {
    setEvents((prev) =>
      prev.map((evt) => (evt === oldEvent ? updatedEvent : evt))
    );
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, deleteEvent, updateEvent }}>
      {children}
    </EventsContext.Provider>
  );
}
