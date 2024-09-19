import React from 'react';
import { useParams } from 'react-router-dom';
import { usePackageVersion } from '../hooks/useNpmApi';
import VersionSelector from '../components/VersionSelector';

function VersionPage() {
  const { packageName, version } = useParams();
  const { data, isLoading, error } = usePackageVersion(packageName, version);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  const { packageData, versionData } = data;
  const versions = Object.keys(packageData.versions).reverse();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{packageName}@{version}</h1>
      <p className="text-xl mb-4">{versionData.description}</p>
      <VersionSelector
        packageName={packageName}
        versions={versions}
        currentVersion={version}
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>npm install {packageName}@{version}</code>
        </pre>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">README</h2>
        <div dangerouslySetInnerHTML={{ __html: versionData.readme }} />
      </div>
    </div>
  );
}

export default VersionPage;