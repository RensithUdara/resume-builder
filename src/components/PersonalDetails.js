import React from "react";

function PersonalDetails({ personalDetails, setPersonalDetails, handleProfilePicture }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  return (
    <div className="form-section">
      <h2 className="section-title">Personal Details</h2>
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={personalDetails.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          value={personalDetails.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="+1234567890"
          value={personalDetails.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="123 Main St, City, Country"
          value={personalDetails.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePicture}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;