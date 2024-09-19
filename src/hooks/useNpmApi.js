import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = 'https://registry.npmjs.org';

const searchPackagesApi = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/-/v1/search?text=${query}`);
  return response.data.objects.map((obj) => obj.package);
};

const getPackageDetailsApi = async (packageName) => {
  const response = await axios.get(`${API_BASE_URL}/${packageName}`);
  return response.data;
};

const getPackageVersionApi = async (packageName, version) => {
  const packageData = await getPackageDetailsApi(packageName);
  const versionData = packageData.versions[version];
  return { packageData, versionData };
};

export const useSearchPackages = (query) => {
  return useQuery(['searchPackages', query], () => searchPackagesApi(query), {
    enabled: !!query,
  });
};

export const usePackageDetails = (packageName) => {
  return useQuery(['packageDetails', packageName], () => getPackageDetailsApi(packageName), {
    enabled: !!packageName,
  });
};

export const usePackageVersion = (packageName, version) => {
  return useQuery(['packageVersion', packageName, version], () => getPackageVersionApi(packageName, version), {
    enabled: !!packageName && !!version,
  });
};