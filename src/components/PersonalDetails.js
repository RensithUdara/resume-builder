import React from "react";

function PersonalDetails({ personalDetails, setPersonalDetails, handleProfilePicture }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  return (
    <div className="form-section">
      <h2 className="section-title">
        <i className="fas fa-user"></i> Personal Details
      </h2>
      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder=" "
          value={personalDetails.name}
          onChange={handleChange}
          required
        />
        <label>Full Name</label>
      </div>
      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder=" "
          value={personalDetails.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
      </div>
      <div className="input-group">
        <input
          type="tel"
          name="phone"
          placeholder=" "
          value={personalDetails.phone}
          onChange={handleChange}
          required
        />
        <label>Phone</label>
      </div>
      <div className="input-group">
        <input
          type="text"
          name="address"
          placeholder=" "
          value={personalDetails.address}
          onChange={handleChange}
          required
        />
        <label>Address</label>
      </div>
      <div className="input-group">
        <label>Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePicture}
          className="file-input"
        />
      </div>
    </div>
  );
}

export default PersonalDetails;