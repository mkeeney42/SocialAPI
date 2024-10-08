const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');
const User = require('../models/User');

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single thought by its _id
router.get('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST to create a new thought
router.post('/', async (req, res) => {
  const { thoughtText, username, userId } = req.body;
  const newThought = new Thought({
    thoughtText,
    username,
  });

  try {
    const savedThought = await newThought.save();

    // Add the thought's ID to the associated user's thoughts array
    await User.findByIdAndUpdate(userId, { $push: { thoughts: savedThought._id } });

    res.status(201).json(savedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update a thought by its _id
router.put('/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE to remove a thought by its _id
router.delete('/:thoughtId', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    // Optionally, remove the thought ID from the user's thoughts array
    await User.findByIdAndUpdate(deletedThought.userId, { $pull: { thoughts: req.params.thoughtId } });

    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST to create a reaction
router.post('/:thoughtId/reactions', async (req, res) => {
  const { reactionBody, username } = req.body;
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    thought.reactions.push({ reactionBody, username });
    await thought.save();
    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE to remove a reaction by its reactionId
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    thought.reactions.id(req.params.reactionId).remove();
    await thought.save();
    res.json({ message: 'Reaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;



