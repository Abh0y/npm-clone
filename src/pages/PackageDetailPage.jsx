import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePackageDetails } from "../hooks/useNpmApi";
import VersionSelector from "../components/VersionSelector";
import { marked } from "marked";
import DOMPurify from "dompurify";

function PackageDetailPage() {
  const { packageName } = useParams();
  const {
    data: packageDetails,
    isLoading,
    error,
  } = usePackageDetails(packageName);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">Error: {error.message}</div>
    );
  }

  if (!packageDetails) {
    return null;
  }

  console.log(packageDetails, "pkk");

  const latestVersion = packageDetails["dist-tags"].latest;
  const versions = Object.keys(packageDetails.versions).reverse();

  const htmlContent = marked(packageDetails.readme);
  const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);

  return (
    <div className="mt-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{packageName}</h1>
      <p className="text-xl mb-2">{packageDetails.description}</p>
      <Link
        to={packageDetails.homepage}
        className="text-lg mb-4 text-blue-500 hover:underline"
      >
        {packageDetails.homepage}
      </Link>

      <VersionSelector
        packageName={packageName}
        versions={versions}
        currentVersion={latestVersion}
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>npm install {packageName}</code>
        </pre>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">README</h2>
        {packageDetails.readme ? (
          <div
            className="w-full text-start space-y-2"
            dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
          />
        ) : (
          <div>No data...</div>
        )}
      </div>
    </div>
  );
}

export default PackageDetailPage;
