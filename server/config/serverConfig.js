require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');

const config = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = config;
