# npm-Clone

## Overview

This project is a clone of the npmjs.com website, built using React, Tailwind CSS, and React Query. It provides a simplified version of the npm package registry, allowing users to search for packages, view package details, and explore different versions of packages.

## Features

- Search for npm packages
- View package details including description, installation instructions, and README
- Explore different versions of packages
- Responsive design for various screen sizes

## Technologies Used

- React
- React Router
- React Query
- Tailwind CSS
- Axios

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
2. Install dependencies:
3. Start the development server:
4. Open your browser and visit:

## Project Structure

## Components

- `Header`: Contains the logo and search bar
- `Footer`: Displays copyright information
- `SearchBar`: Allows users to search for packages
- `PackageCard`: Displays basic information about a package in search results
- `VersionSelector`: Allows users to select different versions of a package

## Pages

- `SearchPage`: Displays search results
- `PackageDetailPage`: Shows detailed information about a specific package
- `VersionPage`: Displays information about a specific version of a package

## Custom Hooks

- `useNpmApi`: Contains React Query hooks for fetching data from the npm registry API

## API

This project uses the official npm registry API. The base URL for API requests is `https://registry.npmjs.org`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [npm](https://www.npmjs.com/) for providing the inspiration and API
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
