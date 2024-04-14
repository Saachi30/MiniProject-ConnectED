import "./FilterChoice.css";

const FilterChoice = (props) => {
  function onfilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }

  return (
    <div className="filter-area">
      <select name="preferredDomain" onChange={onfilterValueChanged}>
        <option value="">Select Preferred Domain</option>
        <option value="web dev">Web Development</option>
        <option value="dsa">Data Structures and Algorithms</option>
        <option value="ml">Machine Learning</option>
        <option value="cloud computing">Cloud Computing</option>
        <option value="blockchain">Blockchain</option>
        <option value="ui/ux">UI/UX</option>
        <option value="finance">Finance</option>
      </select>
    </div>
  );
};

export default FilterChoice;
