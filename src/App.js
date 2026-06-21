import { useState } from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import LocationFilter from "./components/LocationFilter";
import jobs from "./data/jobs";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSaveJob = (jobId) => {
    if (!savedJobs.includes(jobId)) {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <br />
        <br />

        <LocationFilter
          location={location}
          setLocation={setLocation}
        />
      </div>

      <div className="job-container">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            handleSaveJob={handleSaveJob}
            savedJobs={savedJobs}
          />
        ))}
      </div>
    </div>
  );
}

export default App;