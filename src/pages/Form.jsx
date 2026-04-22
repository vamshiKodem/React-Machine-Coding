import React, { useState } from "react";

const FullForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    gender: "other",
    interests: [],
    country: "usa",
    birthdate: "",
    profilePic: null,
    volume: 50,
    isSubscribed: false,
    color: "#000000",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      if (name === "interests") {
        const newInterests = checked
          ? [...formData.interests, value]
          : formData.interests.filter((i) => i !== value);
        setFormData({ ...formData, interests: newInterests });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
      }}
    >
      {/* Text, Email, Password */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
      />

      {/* Textarea */}
      <textarea
        name="bio"
        placeholder="Short bio..."
        value={formData.bio}
        onChange={handleChange}
      />

      {/* Select Dropdown */}
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
      </select>

      {/* Radio Buttons */}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />{" "}
          Female
        </label>
      </div>

      {/* Checkboxes (Multiple) */}
      <div>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="coding"
            onChange={handleChange}
          />{" "}
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="music"
            checked={formData.interests === "music"}
            onChange={handleChange}
          />{" "}
          Music
        </label>
      </div>

      {/* Specialized Inputs */}
      <input type="date" name="birthdate" onChange={handleChange} />
      <input
        type="range"
        name="volume"
        min="0"
        max="100"
        onChange={handleChange}
      />
      <input type="color" name="color" onChange={handleChange} />
      <input type="file" name="profilePic" onChange={handleChange} />

      {/* Single Toggle Checkbox */}
      <label>
        <input
          type="checkbox"
          name="isSubscribed"
          checked={formData.isSubscribed}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      <button type="submit">Submit Form</button>
    </form>
  );
};

export default FullForm;
