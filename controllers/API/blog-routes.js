const router = require("express").Router();
const session = require("express-session");
const { Blog, Comment } = require("../../models");
const withAuth = require('../../utils/auth');


//Get All Blogs
router.get("/", withAuth, async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            include: [{ model: Comment, as: "comments" }],
        });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

//Get a Blog by Id
router.get("/:id", withAuth, async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id, {
            include: [{ model: Comment, as: "comments" }],
            });
        if(!blog) {
            res.status(404).json({ message: "Blog not found" });
            return;
        }
        
        res.status(200).json(blog);
        
    } catch (err) {
        res.status(500).json(err);
    }
}
);


// Create a blog
router.post("/", withAuth, async (req, res) => {
    try {
        const blog = await Blog.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,    
        });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
}
);



// Update a blog by Id
router.put("/:id", withAuth, async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if(!blog) {
            res.status(404).json({ message: "Blog not found" });
            return;
        }
        await blog.update({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
}
);


// Delete a blog by Id

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if(!blog) {
            res.status(404).json({ message: "Blog not found" });
            return;
        }
        if(blog.user_id !== req.session.user_id) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        await blog.destroy();
        res.status(200).json({ message: "Blog deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
}
);


module.exports = router;