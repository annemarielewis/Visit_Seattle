const { Activity } = require("../models");

module.exports = {
  getAllActivities,
  getOneActivity,
  createActivity,
  updateActivity,
  deleteActivity,
  getNatureActivities,
  getSportActivities,
  getHistoryActivities,
  getArtActivities,
  getMusicActivities,
  getNightlifeActivities,
  getLandmarkActivities,
};

async function getAllActivities(req, res) {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function getNatureActivities(req, res) {
  try {
    const natureSites = await Activity.find({ type: "nature" });
    if (natureSites.length > 0) {
      res.json(natureSites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getSportActivities(req, res) {
  try {
    const sportSites = await Activity.find({ type: "sport" });
    if (sportSites.length > 0) {
      res.json(sportSites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getArtActivities(req, res) {
  try {
    const ArtSites = await Activity.find({ type: "art" });
    if (ArtSites.length > 0) {
      res.json(ArtSites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getHistoryActivities(req, res) {
  try {
    const historySites = await Activity.find({ type: "history" });
    if (historySites.length > 0) {
      res.json(historySites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getMusicActivities(req, res) {
  try {
    const musicSites = await Activity.find({ type: "music" });
    if (musicSites.length > 0) {
      res.json(musicSites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getLandmarkActivities(req, res) {
  try {
    const landmarkSites = await Activity.find({ type: "landmark" });
    if (landmarkSites.length > 0) {
      res.json(landmarkSites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getNightlifeActivities(req, res) {
  try {
    const nightSites = await Activity.find({ type: "nightlife" });
    if (nightSites.length > 0) {
      res.json(nightSites);
    } else {
      res
        .status(404)
        .send(
          "Activity with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneActivity(req, res) {
  try {
    const id = req.params.id;
    const activity = await Activity.findById(id);
    if (activity) {
      return res.json(activity);
    }
    return res.status(404).send("Activity with specified ID does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function createActivity(req, res) {
  try {
    const activity = await new Activity(req.body);
    await activity.save();
    return res.status(201).json({ activity });
    // return res.redirect('')
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

async function updateActivity(req, res) {
  try {
    const id = req.params.id;
    let activity = await Activity.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (activity) {
      return res.status(200).json(activity);
    }
    throw new Error("Activity not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function deleteActivity(req, res) {
  try {
    const id = req.params.id;
    let activity = await Activity.findByIdAndDelete(id);
    if (activity) {
      return res.status(200).json(activity);
    }
    throw new Error("Activity not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
