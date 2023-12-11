const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { name, date, venue } = req.body;
    const event = await Event.create({ name, date, venue, /* Other event fields */ });

    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    console.error('Error retrieving event:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
const Event = require('../models/Event');

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    if (event.userId !== req.user.id) {
      return res.status(403).json({ msg: 'Permission denied' });
    }

    await event.destroy();

    res.status(200).json({ msg: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
