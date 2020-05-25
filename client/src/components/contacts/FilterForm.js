import React from "react";

function FilterForm({
  type,
  name,
  sortByName,
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem",
        }}
      >
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
            name="sortByName"
            value={sortByName}
            onChange={sortContacts}
          >
            <option value={true}>A-Z</option>
            <option value={false}>Z-A</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilterForm;
