const FilterSidebar = () => {
  return (
    <aside className="w-full lg:w-1/5 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
      <div className="space-y-6">
        {/* Filter by Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <input
            type="text"
            placeholder="Search skills"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Filter by Rate */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Rate</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rate"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Below 10,000</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rate"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">
                  10,000 - 50,000
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rate"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Above 50,000</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Filter by Fixed Price */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Fixed Price</h3>
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Filter by Hourly Rate */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Hourly Rate</h3>
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Filter by Listing Type */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Listing Type</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Featured</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Sealed</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">NDA</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Urgent</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
