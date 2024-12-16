import React from 'react';

export default function AdminHeader() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              <div className="relative">
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                  <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/32" alt="Admin avatar" />
                  <span className="ml-2">Admin User</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
