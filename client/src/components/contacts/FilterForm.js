import React from "react";

function FilterForm({
  type,
  name,
  isSorted,
  handleNameChange,
  handleSelect,
  sortContacts,
}) {
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
      <div className="select-inputs-container">
        <div>
          <label htmlFor="type">Select by type:</label>
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
        </div>
        <div>
          <label htmlFor="type">Sort contacts:</label>
          <select
            className="select-contact-type"
            name="isSorted"
            value={isSorted}
            onChange={sortContacts}
          >
            <option value="desc">A - Z</option>
            <option value="asc">Z - A</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilterForm;
