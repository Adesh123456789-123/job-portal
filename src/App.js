import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import jobs from "./data/jobs";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="job-container">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}

export default App;