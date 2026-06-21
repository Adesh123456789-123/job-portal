function JobCard({
  job,
  handleSaveJob,
  savedJobs
}) {
  const isSaved = savedJobs.includes(job.id);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>Company: {job.company}</p>

      <p>Location: {job.location}</p>

      <p>Salary: {job.salary}</p>

      <p>Type: {job.type}</p>

      <button>
        Apply Now
      </button>

      <br />
      <br />

      <button
        onClick={() => handleSaveJob(job.id)}
      >
        {isSaved ? "Saved ✓" : "Save Job"}
      </button>
    </div>
  );
}

export default JobCard;