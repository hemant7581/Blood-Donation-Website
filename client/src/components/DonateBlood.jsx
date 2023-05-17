import React, { useState } from "react";

const DonateBlood = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [lastDonationDate, setLastDonationDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
  };

  const handleLastDonationDateChange = (e) => {
    setLastDonationDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send donation request to server using user input
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Donate Blood</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <div className="mt-1">
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={age}
                  onChange={handleAgeChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
                Blood Type
              </label>
              <div className="mt-1">
                <input
                  id="bloodType"
                  name="bloodType"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={bloodType}
                  onChange={handleBloodTypeChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastDonationDate" className="block text-sm font-medium text-gray-700">
                Date of Last Donation
              </label>
              <div className="mt-1">
                <input
                  id="lastDonationDate"
                  name="lastDonationDate"
                  type="date"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={lastDonationDate}
                  onChange={handleLastDonationDateChange}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M11.293 5.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L12.586 10H5a1 1 0 110-2h7.586l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;