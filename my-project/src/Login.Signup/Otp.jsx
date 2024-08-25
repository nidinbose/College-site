import React, { useState } from "react";
import axios from "axios";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
        // Replace with your backend endpoint
        const response = await axios.post("https://localhost", { otp });

        // Assuming the backend sends a success message upon correct OTP verification
        if (response.data.success) {
          setSuccess("OTP verified successfully!");
        } else {
          setError("Invalid OTP. Please try again.");
        }
      } catch (error) {
        setError("An error occurred while verifying OTP. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 text-center text-2xl tracking-widest rounded"
          maxLength="6"
          placeholder="Enter 6-digit OTP"
          disabled={loading}
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
      </form>
    </div>
  );
};

export default OTPPage;
