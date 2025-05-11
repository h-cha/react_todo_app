import MyCard from "./MyCard.tsx";
import "./App.css";

export interface Memo {
  id: number;
  contents: string;
}
const memos: Memo[] = [
  {
    id: 1,
    contents: "Hello, World!",
  },
  {
    id: 2,
    contents: "I'm studying react",
  },
  {
    id: 3,
    contents: "God day!",
  },
];

function App() {
  return (
    <>
      <div className="card-container">
        {memos.map((memo) => (
          <MyCard key={memo.id} {...memo} />
        ))}
      </div>
    </>
  );
}

export default App;
