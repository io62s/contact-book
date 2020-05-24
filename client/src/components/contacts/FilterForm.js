import React from "react";

function FilterForm({ type, name, handleNameChange, handleSelect }) {
  return (
    <React.Fragment>
      <label htmlFor="type">Filter by Name:</label>
      <input
        className="filter-name"
        type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={handleNameChange}
      />
      <label htmlFor="type">Select contacts by type:</label>
      <select
        className="select-contact-type"
        name="type"
        value={type}
        onChange={handleSelect}
      >
        <option value="all">All</option>
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
      </select>
    </React.Fragment>
  );
}

export default FilterForm;
