const express = require('express');

const router = new express.Router();

const Property = require('../models/property');

router.route('/')
  .get((req, res) => {
    Property.find({})
      .limit(20)
      .populate('customers').exec()
      .then(properties => res.send(properties))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    Property.create(req.body)
      .then(property => res.send(property))
      .catch(err => res.status(400).send(err));
  });

router.route('/:id')
  .get((req, res) => {
    Property.findById(req.params.id)
      .populate('customers').exec()
      .then(property => res.send(property))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Property.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(Property.find({}))
      .then(properties => res.send(properties))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Property.findByIdAndRemove(req.params.id)
      .then(Property.find({}))
      .then(properties => res.send(properties))
      .catch(err => res.status(400).send(err));
  });

router.put('/:propertyId/addClient/:clientId', (req, res) => {
  const { propertyId, clientId } = req.params;

  Property.findById(propertyId)
    .then((property) => {
      property.customers.push(clientId);
      return property.save();
    })
    .then(saveProperty => res.send(saveProperty))
    .catch(err => res.status(400).send(err));
});

router.put('/:propertyId/removeClient/:clientId', (req, res) => {
  const { propertyId, clientId } = req.params;

  Property.findById(propertyId)
    .then((property) => {
      property.customers.pull(clientId);
      return property.save();
    })
    .then(saveProperty => res.send(saveProperty))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
