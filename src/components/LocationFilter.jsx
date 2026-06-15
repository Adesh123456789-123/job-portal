function LocationFilter({ location, setLocation }) {
  return (
    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    >
      <option value="">All Locations</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Chennai">Chennai</option>
    </select>
  );
}

export default LocationFilter;