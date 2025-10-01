import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Naif Alhammad" id="202322770" department="CS" />
          <StudentCard name="Fahhad Alhammad" id="199022770" department="SWE" />
        </div>
      </main>
    </div>
  )
}

export default App
