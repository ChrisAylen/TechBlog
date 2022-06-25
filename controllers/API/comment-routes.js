const router = require("express").Router();
const session = require("express-session");
const { Comment, Blog } = require("../../models");
const withAuth = require('../../utils/auth');

// Get a comment by Id
router.get("/:id", withAuth, async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, {
            include: [{ model: Blog, as: "blog" }],
        });
        if (!comment) {
            res.status(404).json({ message: "Comment not found" });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

// Create a comment
router.post("/", withAuth, async (req, res) => {
    try {
        const comment = await Comment.create({
            comment: req.body.comment,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id,
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

// Update a comment by Id
router.put("/:id", withAuth, async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            res.status(404).json({ message: "Comment not found" });
            return;
        }
        await comment.update({
            comment: req.body.comment,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id,
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

// Delete a comment by Id
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            res.status(404).json({ message: "Comment not found" });
            return;
        }
        await comment.destroy();
        res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;