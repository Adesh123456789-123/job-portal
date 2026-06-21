function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>Company: {job.company}</p>

      <p>Location: {job.location}</p>

      <p>Salary: {job.salary}</p>

      <p>Type: {job.type}</p>

      <button>Apply Now</button>
    </div>
  );
}

export default JobCard;