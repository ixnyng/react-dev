function PollOption({ label, count, onVote }) {
    return (
      <div className="option-box">
        <p>{label.toLowerCase()}: {count}</p>
        <button onClick={onVote}>Vote</button>
      </div>
    );
  }
  
  export default PollOption;