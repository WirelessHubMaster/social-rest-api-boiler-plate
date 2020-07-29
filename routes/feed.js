const express = require('express')
const {body} = require('express-validator')

const feedController = require('../controllers/feed')
const isAuth = require('../middleware/is-auth')

const router = express.Router()

router.get('/posts', isAuth, feedController.getPosts)

router.post('/post', isAuth,
    [
        body('title')
            .trim()
            .isLength({min:5}),
        body('content')
            .trim()
            .isLength({min:5}),
    ],
    feedController.createPost)

module.exports = router