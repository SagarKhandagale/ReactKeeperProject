import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    return setNewNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    props.createNote(e, newNote);
    setNewNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={newNote.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={newNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
