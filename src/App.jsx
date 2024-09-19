import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes in React Router v6
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import PackageDetailPage from "./pages/PackageDetailPage";
import VersionPage from "./pages/VersionPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route
                path="/package/:packageName"
                element={<PackageDetailPage />}
              />
              <Route
                path="/package/:packageName/v/:version"
                element={<VersionPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
