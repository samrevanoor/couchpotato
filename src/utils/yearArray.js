export default function getYear() {
  let currentYear = new Date().getFullYear();
  let years = [];
  let startYear = 1930;
  for (let i = startYear; i <= currentYear; i++) {
    years.push(startYear++);
  }
  const selectYears = years.reverse().map(year => <option value={year} key={year}>{year}</option>)
  return selectYears;
}