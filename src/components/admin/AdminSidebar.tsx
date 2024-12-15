import React from 'react';

const menuItems = [
  { href: '/admin/posts', label: 'Posts', icon: '📝' },
  { href: '/admin/comments', label: 'Comments', icon: '💬' },
  { href: '/admin/projects', label: 'Projects', icon: '🚀' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen shadow-lg">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}