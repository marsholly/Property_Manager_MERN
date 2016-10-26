const express = require('express');

const router = new express.Router();

const Client = require('../models/client');

router.route('/')
  .get((req, res) => {
    Client.find({})
      .then(clients => res.send(clients))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    Client.create(req.body)
      .then(client => res.send(client))
      .catch(err => res.status(400).send(err));
  });

router.route('/:id')
  .get((req, res) => {
    Client.findById(req.params.id)
      .then(client => res.send(client))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(Client.find({}))
      .then(clients => res.send(clients))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Client.findByIdAndRemove(req.params.id)
      .then(Client.find({}))
      .then(clients => res.send(clients))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
