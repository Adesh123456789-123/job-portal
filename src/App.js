import { useState } from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import jobs from "./data/jobs";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="job-container">
        {filteredJobs.map((job) => (
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