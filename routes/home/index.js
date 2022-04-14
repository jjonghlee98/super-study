"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./index.ctrl');

router.get('/', ctrl.root);

router.get('/login', ctrl.login);

module.exports = router;