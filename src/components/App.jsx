import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function addFinalNote(event, finalNote) {
    event.preventDefault();

    return setNote((prev) => {
      return [...prev, finalNote];
    });
  }

  function deleteNote(id) {
    return setNote(() => {
      return note.filter((indexValue, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea note={note} createNote={addFinalNote} />
      {note.map((currentNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={currentNote.title}
            content={currentNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
