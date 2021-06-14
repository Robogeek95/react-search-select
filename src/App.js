import "./App.css";
import CustomSelectWithSearch from "./components/CustomSelectWithSearch";

const categories = [
  "Assessment",
  "Note",
  "Test",
  "Syllabus",
  "Lessons",
  "Reports",
  "Assignments",
  "Past Questions",
  "Text Books",
  "Handouts",
];

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <CustomSelectWithSearch
          label="Category"
          defaultOptions={categories}
          placeholder="Select Category"
        />
      </div>
    </div>
  );
}

export default App;
