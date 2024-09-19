import React from "react";
import { Link } from "react-router-dom";

function VersionSelector({ packageName, versions, currentVersion }) {
  return (
    <div className="mb-4 flex items-center">
      <label
        htmlFor="version"
        className="block text-sm font-medium text-gray-700 mr-2"
      >
        Version:
      </label>
      <select
        id="version"
        className="mt-1 block pl-3 pr-10 py-2 border text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
        value={currentVersion}
        onChange={(e) => {
          const version = e.target.value;
          window.location.href = `/package/${packageName}/v/${version}`;
        }}
      >
        {versions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VersionSelector;
