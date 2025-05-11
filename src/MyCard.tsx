import type { Memo } from "./App";
import "./MyCard.css";

function MyCard(memo: Memo) {
  return (
    <div className="card">
      <p>{memo.contents}</p>
    </div>
  );
}

export default MyCard;
