import React, { useState } from "react";

const FileComplaint = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    incidentType: "",
    incidentDate: "",
    description: "",
    evidence: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files[0] });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.incidentType) newErrors.incidentType = "Select an incident type.";
    if (!formData.incidentDate) newErrors.incidentDate = "Select an incident date.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate API Call (Replace with real API integration)
    setTimeout(() => {
      setSuccessMessage("Your complaint has been successfully submitted.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        incidentType: "",
        incidentDate: "",
        description: "",
        evidence: null,
      });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          File a Cybercrime Complaint
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please provide accurate details to help us investigate your case.
        </p>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Incident Type */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Incident Type</label>
            <select
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Incident Type</option>
              <option value="phishing">Phishing</option>
              <option value="financial-fraud">Financial Fraud</option>
              <option value="identity-theft">Identity Theft</option>
              <option value="cyberbullying">Cyberbullying</option>
              <option value="other">Other</option>
            </select>
            {errors.incidentType && <p className="text-red-500 text-sm">{errors.incidentType}</p>}
          </div>

          {/* Incident Date */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Incident Date</label>
            <input
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.incidentDate && <p className="text-red-500 text-sm">{errors.incidentDate}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Describe the incident in detail"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          {/* Evidence Upload */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Upload Evidence (Optional)</label>
            <input
              type="file"
              name="evidence"
              onChange={handleFileChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileComplaint;
