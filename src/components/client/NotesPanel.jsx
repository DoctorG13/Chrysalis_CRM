import Section from "../common/Section";
import Button from "../common/Button";
import Input from "../common/Input";
import PanelItem from "../common/PanelItem";

function NotesPanel({
  selectedClient,
  newNote,
  setNewNote,
  addNote,
}) {
  if (!selectedClient) return null;

  const notes = selectedClient.notes || [];

  return (
    <Section
      title="📝 Notes"
      subtitle="Client notes and reminders"
    >
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <PanelItem key={index}>
            <p
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {note}
            </p>
          </PanelItem>
        ))
      ) : (
        <p>No notes recorded.</p>
      )}

      <Input
        placeholder="Add a new note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />

      <div style={{ height: "16px" }} />

      <Button onClick={addNote}>
        ➕ Add Note
      </Button>
    </Section>
  );
}

export default NotesPanel;