function StudentCard(props) {
    return (
      <div className="student-card">
        <h3>{props.name}</h3>
        <p><strong>ID:</strong> {props.id}</p>
        <p><strong>Department:</strong> {props.department}</p>
      </div>
    );
  }
  
  export default StudentCard;
  