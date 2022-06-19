const { Blog } = require('../models');
const BlogData = [
  {
    "title": "Test 1",
    "body": "This is test 1",
    "user_id": "1"
  },
  {
    "title": "Test 2",
    "body": "This is test 2",
    "user_id": "2"
  },
  {
    "title": "Test 3",
    "body": "This is test 3",
    "user_id": "3"
  },
  {
    "title": "Test 4",
    "body": "This is test 4",
    "user_id": "4"
  },
  {
    "title": "Test 5",
    "body": "This is test 5",
    "user_id": "5"
  },
  {
    "title": "Test 6",
    "body": "This is test 6",
    "user_id": "5"
  },
  {
    "title": "Test 7",
    "body": "This is test 7",
    "user_id": "3"
  },
  {
    "title": "Test 8",
    "body": "This is test 8",
    "user_id": "2"
  }

];

const seedBlogs = () => Blog.bulkCreate(BlogData);

module.exports = seedBlogs;
