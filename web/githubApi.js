import { useState, useEffect } from 'react';

export default function GitHubContributionChart() {
  const [contributions, setContributions] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const username = 'codebyemily'; // Change this to your username

  useEffect(() => {
    fetchGithubContributions();
  }, []);

  async function fetchGithubContributions() {
    const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE'; // Replace with your token
    const CACHE_KEY = `github-contributions-${username}`;
    const CACHE_TTL = 3600000; // 1 hour in milliseconds

    // Check cache first
    const cachedData = getCachedData(CACHE_KEY);
    if (cachedData) {
      setContributions(cachedData.contributions);
      setTotalCommits(cachedData.totalCommits);
      setLoading(false);
      return;
    }

    if (!GITHUB_TOKEN || GITHUB_TOKEN === 'YOUR_GITHUB_TOKEN_HERE') {
      setError('Please add your GitHub token');
      setLoading(false);
      return;
    }

    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { username }
        }),
      });

      const data = await response.json();
      
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const calendar = data.data.user.contributionsCollection.contributionCalendar;
      const allDays = calendar.weeks.flatMap(week => week.contributionDays);
      
      setContributions(allDays);
      setTotalCommits(calendar.totalContributions);
      
      // Cache the data
      setCachedData(CACHE_KEY, {
        contributions: allDays,
        totalCommits: calendar.totalContributions
      }, CACHE_TTL);
      
    } catch (err) {
      console.error('Error fetching GitHub contributions:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function getCachedData(key) {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      const parsedItem = JSON.parse(item);
      const now = Date.now();

      if (now - parsedItem.timestamp > parsedItem.ttl) {
        localStorage.removeItem(key);
        return null;
      }

      return parsedItem.value;
    } catch {
      return null;
    }
  }

  function setCachedData(key, value, ttl) {
    const item = {
      value,
      timestamp: Date.now(),
      ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getColorClass(count) {
    if (count === 0) return 'bg-gray-100';
    if (count < 3) return 'bg-green-200';
    if (count < 6) return 'bg-green-400';
    if (count < 9) return 'bg-green-600';
    return 'bg-green-800';
  }

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="text-center">Loading GitHub contributions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="text-red-500 text-center">
          Error: {error}
          <div className="text-sm mt-2 text-gray-600">
            Make sure to add your GitHub Personal Access Token
          </div>
        </div>
      </div>
    );
  }

  // Group contributions by week
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">GitHub Contribution Graph</h2>
        <p className="text-gray-600">
          {totalCommits} contributions in the last year
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {week.map((day, dayIdx) => (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm ${getColorClass(day.contributionCount)}`}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-100" />
          <div className="w-3 h-3 rounded-sm bg-green-200" />
          <div className="w-3 h-3 rounded-sm bg-green-400" />
          <div className="w-3 h-3 rounded-sm bg-green-600" />
          <div className="w-3 h-3 rounded-sm bg-green-800" />
        </div>
        <span>More</span>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Data cached for 1 hour • 
        <button 
          onClick={() => {
            localStorage.removeItem(`github-contributions-${username}`);
            window.location.reload();
          }}
          className="ml-2 text-blue-500 hover:underline"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}