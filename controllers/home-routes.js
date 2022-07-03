const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Prevent non logged in users from viewing the homepage
router.get('/',  async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['name', 'ASC']],
    // });

    //const users = userData.map((project) => project.get({ plain: true }));
    const blogData = await Blog.findAll({
      include: [{ model: Comment, as: 'comments' }, { model: User, as: 'user', attributes:['name'] }],
      order: [['created_date', 'DESC']],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', {
      blogs,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
