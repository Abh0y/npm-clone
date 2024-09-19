import React from "react";
import { Link } from "react-router-dom";

function PackageCard({ pkg }) {
  return (
    <Link to={`/package/${pkg.name}`}>
      <>
        <div className="border rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-200">
          <div className="text-xl font-semibold text-red-600 ">
            {pkg.name}
          </div>
          <p className="text-gray-600 mt-2">{pkg.description}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>v{pkg.version}</span>
            <span className="mx-2">•</span>
            <span>Updated {new Date(pkg.date).toLocaleDateString()}</span>
          </div>
        </div>
      </>
    </Link>
  );
}

export default PackageCard;
