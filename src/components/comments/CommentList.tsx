import React from 'react';
import type { Comment } from '../../types';
import { formatDate } from '../../utils/date';

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">{comment.author}</h4>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(comment.createdAt)}
              </time>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}