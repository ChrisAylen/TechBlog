const { Comment } = require('../models');

const commentData = [
  {
    "blog_id": "1",
    "comment": "comment 1 on blog 1",
    "user_id": "1"
  },
  {
    "blog_id": "1",
    "comment": "comment 2 on blog 1",
    "user_id": "2"
  },
  {
    "blog_id": "2",
    "comment": "comment 1 on blog 2",
    "user_id": "1"
  },
  {
    "blog_id": "2",
    "comment": "comment 2 on blog 2",
    "user_id": "2"
  },
  {
    "blog_id": "3",
    "comment": "comment 1 on blog 3",
    "user_id": "1"
  },
  {
    "blog_id": "3",
    "comment": "comment 2 on blog 3",
    "user_id": "2"
  },
  {
    "blog_id": "4",
    "comment": "comment 1 on blog 4",
    "user_id": "1"
  },
  {
    "blog_id": "4",
    "comment": "comment 2 on blog 4",
    "user_id": "2"
  },
  {
    "blog_id": "5",
    "comment": "comment 1 on blog 5",
    "user_id": "1"
  },
  {
    "blog_id": "5",
    "comment": "comment 2 on blog 5",
    "user_id": "2"
  },
  {
    "blog_id": "6",
    "comment": "comment 1 on blog 6",
    "user_id": "1"
  },
  {
    "blog_id": "6",
    "comment": "comment 2 on blog 6",
    "user_id": "2"
  },
  {
    "blog_id": "7",
    "comment": "comment 1 on blog 7",
    "user_id": "1"
  },
  {
    "blog_id": "7",
    "comment": "comment 2 on blog 7",
    "user_id": "2"
  },
  {
    "blog_id": "8",
    "comment": "comment 1 on blog 8",
    "user_id": "1"
  },
  {
    "blog_id": "8",
    "comment": "comment 2 on blog 8",
    "user_id": "2"
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
