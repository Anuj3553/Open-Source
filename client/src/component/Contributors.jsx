import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ContributorCard = ({
  login,
  avatar_url,
  html_url,
  contributions,
  type,
  mode,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`rounded-lg overflow-hidden border transition-all duration-300 ${mode === "dark"
      ? "bg-black/30 backdrop-blur-md border-white/10"
      : "bg-white backdrop-blur-sm border-gray-300"
      }`}
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div className="p-6 text-center">
      <img
        src={avatar_url}
        alt={login}
        className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${mode === "dark" ? "border-primary" : "border-blue-500"
          }`}
      />
      <h3
        className={`font-bold text-xl ${mode === "dark" ? "text-white" : "text-gray-800"
          }`}
      >
        {login}
      </h3>
      <p
        className={`text-sm ${mode === "dark" ? "text-primary" : "text-gray-600"
          } mb-2`}
      >
        {type}
      </p>
      <div
        className={`mt-4 rounded-full py-2 px-4 inline-block ${mode === "dark" ? "bg-white/10" : "bg-blue-100"
          }`}
      >
        <span
          className={`font-semibold ${mode === "dark" ? "text-primary" : "text-blue-600"
            }`}
        >
          {contributions} contributions
        </span>
      </div>
    </div>
    <div
      className={`py-3 px-6 flex justify-between items-center ${mode === "dark" ? "bg-white/5" : "bg-blue-200"
        }`}
    >
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-primary hover:text-primary/80 transition-colors flex items-center ${mode === "dark" ? "text-white" : "text-blue-800"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
        View Profile
      </a>
    </div>
  </motion.div>
);

ContributorCard.propTypes = {
  login: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  contributions: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

const IssueCard = ({
  title,
  number,
  html_url,
  user,
  state,
  mode,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className={`rounded-lg overflow-hidden border transition-all duration-300 ${mode === 'dark'
      ? 'bg-black/30 backdrop-blur-md border-white/10'
      : 'bg-white backdrop-blur-sm border-gray-300'
      }`}
    style={{ minHeight: '350px' }} // Set a minimum height
    data-aos="fade-up"
    data-aos-duration='1500'
  >
    <div className='flex flex-col justify-between pt-6' style={{ height: '100%' }}>
      <div className='text-center flex-grow'>
        <img
          src={user.avatar_url}
          alt={user.login}
          className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${mode === 'dark' ? 'border-primary' : 'border-blue-500'
            }`}
        />
        <h3 className={`font-bold text-xl px-3 ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>
        <p className={`text-sm ${mode === 'dark' ? 'text-primary' : 'text-gray-600'} mb-2`}>
          Status: {state}
        </p>
        <div className={`mt-4 rounded-full py-2 px-4 inline-block ${mode === 'dark' ? 'bg-white/10' : 'bg-blue-100'
          }`}>
          <span className={`font-semibold ${mode === 'dark' ? 'text-primary' : 'text-blue-600'
            }`}>
            Issue : #{number}
          </span>
        </div>
      </div>
      <div className={`flex justify-between items-center p-2 ${mode === 'dark' ? 'bg-white/5' : 'bg-blue-200'
        }`} style={{ padding: '0', margin: '0' }}>
        <a
          href={html_url}
          target='_blank'
          rel='noopener noreferrer'
          className={`text-primary hover:text-primary/80 transition-colors flex items-center ${mode === 'dark' ? 'text-white' : 'text-blue-800'
            }`}
          style={{ flexGrow: 1, padding: '8px 0' }} // Remove padding left and right
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
            <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
          </svg>
          View Issue
        </a>
        <a href={html_url} target="_blank">
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-blue-500 cursor-pointer'
          >
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

IssueCard.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired, // Add validation for html_url
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

const StatCard = ({ label, value, icon, mode, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-lg p-6 flex items-center border transition-all duration-300 cup ${mode === 'dark'
      ? 'bg-black/30 backdrop-blur-md border-white/10'
      : 'bg-white backdrop-blur-sm border-gray-300'
      }`}
    onClick={onClick}

  >
    <div
      className={`rounded-full p-3 mr-4 ${mode === "dark" ? "bg-white/10" : "bg-gray-200"
        }`}
    >
      {icon}
    </div>
    <div>
      <h3
        className={`text-3xl font-bold ${mode === "dark" ? "text-white" : "text-gray-800"
          }`}
      >
        {value}
      </h3>
      <p
        className={`text-sm ${mode === "dark" ? "text-white/70" : "text-gray-600"
          }`}
      >
        {label}
      </p>
    </div>
  </motion.div>
);
StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Contributor.propTypes = {
  mode: PropTypes.string.isRequired,
};


export default function Contributor(props) {
  const [contributors, setContributors] = useState([]);
  const [openIssues, setOpenIssues] = useState([]);
  const [showIssue, setShowIssue] = useState(true); // Determine which section to show
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoStats, setRepoStats] = useState({
    stars: 0,
    forks: 0,
    openIssues: 0,
  });
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const itemsPerPage = 9; // Set the number of items per page (for both contributors and issues)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch contributors
        const contributorsResponse = await fetch("https://api.github.com/repos/Bitbox-Connect/Bitbox/contributors?page=1&per_page=100");

        if (!contributorsResponse.ok) {
          throw new Error("Failed to fetch contributors data");
        }
        const contributorsData = await contributorsResponse.json();
        setContributors(contributorsData);

        // Fetch repo stats
        const repoResponse = await fetch('https://api.github.com/repos/Bitbox-Connect/Bitbox');
        const repoData = await repoResponse.json();
        setRepoStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          openIssues: repoData.open_issues_count,
        });

        // Fetch issues
        const issueResponse = await fetch('https://api.github.com/repos/Bitbox-Connect/Bitbox/issues');
        const issueData = await issueResponse.json();
        setOpenIssues(issueData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter contributors or issues based on search term
  const filteredContributors = contributors.filter(contributor =>
    contributor.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredIssues = openIssues.filter(issue =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current items based on selected section and search
  const currentItems = showIssue
    ? filteredIssues.slice(indexOfFirstItem, indexOfLastItem)
    : filteredContributors.slice(indexOfFirstItem, indexOfLastItem);

  // Determine total pages
  const totalPages = showIssue
    ? Math.ceil(filteredIssues.length / itemsPerPage)
    : Math.ceil(filteredContributors.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`min-h-screen ${props.mode === "dark"
        ? "bg-gradient-to-br from-gray-900 to-black text-white"
        : "bg-gradient-to-br from-white to-blue-100 text-black"
        }`}
    >
      {/* Hero Section */}
      <section
        className={`relative h-[70vh] flex items-center justify-center text-center ${props.mode === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
          : "bg-gradient-to-br from-white via-blue-100 to-blue-200"
          }`}
      >
        <div
          className={`absolute inset-0 ${props.mode === "dark" ? "bg-black/50" : "bg-white/50"
            } backdrop-blur-sm`}
        />
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            className={`text-5xl font-bold sm:text-6xl md:text-7xl ${props.mode === "dark" ? "text-white" : "text-black"
              }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Amazing Contributors
          </motion.h1>
          <motion.p
            className={`text-xl sm:text-2xl ${props.mode === "dark" ? "text-white/80" : "text-black/80"
              }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaping the future of Bitbox, one commit at a time
          </motion.p>
        </div>
      </section>

      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${props.mode === "dark"
          ? "bg-black/30 backdrop-blur-md"
          : "bg-white/30 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${props.mode === "dark" ? "text-white" : "text-black"
              }`}
          >
            Project Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contributors */}
            <div className="cursor-pointer">
              <StatCard
                mode={props.mode}
                label="Contributors"
                value={contributors.length}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 7H7v6h6V7z" />
                    <path
                      fillRule="evenodd"
                      d="M18 10A8 8 0 11-1 10a8 8 0 0117 0zm-6-4H7v6h6V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                onClick={() => {
                  setShowIssue(false);
                  setCurrentPage(1); // Reset pagination when switching to contributors
                }}
              />
            </div>

            {/* Repository Stats */}
            <a href="https://github.com/Bitbox-Connect/Bitbox/stargazers" target="_blank">
              <StatCard
                mode={props.mode}
                label="Stars"
                value={repoStats.stars}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                }
              />
            </a>

            {/* Forks */}
            <a href="https://github.com/Bitbox-Connect/Bitbox/network" target="_blank">
              <StatCard
                mode={props.mode}
                label="Forks"
                value={repoStats.forks}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 9a3 3 0 116 0 3 3 0 01-6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M10 12a4 4 0 10-4-4 4 4 0 004 4zm0 0a4 4 0 104-4 4 4 0 00-4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </a>
            {/* Open Issues */}
            <div className="cursor-pointer">
              <StatCard
                mode={props.mode}
                label="Open Issues"
                value={repoStats.openIssues}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.05 3.05A7 7 0 1018 10a7.002 7.002 0 00-12.95 0A5.001 5.001 0 115 3.05zm0 2A3.001 3.001 0 105 10a3.001 3.001 0 000-4.95z" />
                  </svg>
                }
                onClick={() => {
                  setShowIssue(true);
                  setCurrentPage(1); // Reset pagination when switching to contributors
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <input
            type="text"
            placeholder={showIssue ? "Search issues..." : "Search contributors..."}
            className={`w-full p-3 text-lg border rounded-lg 
        ${props.mode === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Display Issues or Contributors based on `showIssue` */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {currentItems.length > 0 ? (
              currentItems.map(item => (
                showIssue ? (
                  <IssueCard
                    key={item.id}
                    title={item.title}
                    number={item.number}
                    html_url={item.html_url}
                    user={item.user}
                    state={item.state}
                    mode={props.mode}
                  />
                ) : (
                  <ContributorCard
                    key={item.id}
                    login={item.login}
                    avatar_url={item.avatar_url}
                    html_url={item.html_url}
                    contributions={item.contributions}
                    type={item.type}
                    mode={props.mode}
                  />
                )
              ))
            ) : (
              <div className="col-span-full text-center text-xl text-gray-500">No items found</div>
            )}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded-lg text-lg ${currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border-gray-300'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Contributor.propTypes = {
  mode: PropTypes.string.isRequired,
};