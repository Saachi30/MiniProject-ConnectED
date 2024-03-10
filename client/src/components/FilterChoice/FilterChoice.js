import "./FilterChoice.css";

const FilterChoice = (props) => {
  function onfilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }

  return (
    <div className="filter-area">
      <select name="preferredDomain" onChange={onfilterValueChanged}>
        <option value="">Select Preferred Domain</option>
        <option value="web development">Web Development</option>
        <option value="data structures and algorithms">Data Structures and Algorithms</option>
        <option value="machine learning">Machine Learning</option>
        <option value="data analysis">Data Analysis</option>
        <option value="blockchain">Blockchain</option>
      </select>
    </div>
  );
};

export default FilterChoice;
