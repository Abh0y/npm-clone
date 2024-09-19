import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import { useSearchPackages } from "../hooks/useNpmApi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery().get("q") || "";
  const { data: packages, isLoading, error } = useSearchPackages(query);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">Error: {error.message}</div>
    );
  }

  console.log(packages, "Packages");

  return (
    <div>
      {packages ? (
        <div className="mt-16 px-4">
          <h1 className="text-3xl font-bold mb-8">
            Search Results for "{query}"
          </h1>
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="h-[480px] rounded-lg flex items-center justify-center px-4 mt-16 bg-gray-100">
          <article className="bg-white dark-gray p-10 rounded-lg shadow-lg">
            <section className="text-center">
              <div className="mx-auto w-full">
                <h1 className="text-4xl font-bold mb-6 text-red-600">
                  Welcome to Our JavaScript Package Registry
                </h1>
                <div className="text-lg text-gray-700 mb-8">
                  <p>
                    This website is a clone created for educational purposes,
                    inspired by npm and similar platforms. Our goal is to
                    demonstrate the features and functionality of a JavaScript
                    package registry in a controlled environment, strictly for
                    assignment and learning objectives.
                  </p>
                  <h2 className="text-2xl text-black font-semibold mt-8 mb-4">
                    Explore and Experiment
                  </h2>
                  <p>
                    While this site offers a similar experience to the npm
                    registry, it is designed solely for demonstrating and
                    practicing web development concepts. Feel free to explore
                    the features, search for packages, and see how our mock
                    tools and services work.
                  </p>
                  <p className="text-sm mt-8">
                    Please note that this is not an actual service and is
                    intended only for educational use. It provides a hands-on
                    opportunity to understand and replicate the core
                    functionalities of a JavaScript package registry.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
