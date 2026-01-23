"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

    try {
      const response = await fetch('/api/github-contributions', {
        method: 'GET',
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch GitHub contributions');
      }

      setContributions(data.contributions);
      setTotalCommits(data.totalCommits);
      
      // Cache the data
      setCachedData(CACHE_KEY, {
        contributions: data.contributions,
        totalCommits: data.totalCommits
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
    if (count === 0) return 'bg-muted dark:bg-muted/30';
    if (count < 3) return 'bg-green-200 dark:bg-green-900/40';
    if (count < 6) return 'bg-green-400 dark:bg-green-800/50';
    if (count < 9) return 'bg-green-600 dark:bg-green-700/60';
    return 'bg-green-800 dark:bg-green-600/70';
  }

  if (loading) {
    return (
      <div className="w-full mx-auto">
        <div className="text-center text-sm sm:text-base text-muted-foreground">Loading GitHub contributions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mx-auto p-4 sm:p-8">
        <div className="text-destructive text-center text-sm sm:text-base">
          Error: {error}
          <div className="text-xs sm:text-sm mt-2 text-muted-foreground">
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
    <Link 
      href="https://github.com/codebyemily" 
      target="_blank" 
      rel="noopener noreferrer" 
      className=" flex flex-col hover:opacity-80 transition-opacity "
    >
      <div className=" p-2 sm:p-4 rounded-lg flex flex-col">
        <div className="mb-3 sm:mb-4 md:mb-6">
          <p className="text-xs sm:text-sm text-foreground">
            {totalCommits} contributions in the last year
          </p>
        </div>

        <div className=" min-w-0 overflow-x-auto flex-1">
          <div className="flex justify-end gap-0.5 md:gap-1">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-0.5">
                {week.map((day, dayIdx) => (
                  <div
                    key={day.date}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-sm ${getColorClass(day.contributionCount)} transition-colors`}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6 flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-0.5 md:gap-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-sm bg-muted dark:bg-muted/30" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-sm bg-green-200 dark:bg-green-900/40" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-sm bg-green-400 dark:bg-green-800/50" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-sm bg-green-600 dark:bg-green-700/60" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-sm bg-green-800 dark:bg-green-600/70" />
          </div>
          <span>More</span>
        </div>
      </div>
    </Link>
  );
}