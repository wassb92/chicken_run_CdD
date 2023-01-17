const Chicken = require("../models/chicken");

exports.getChickens = async function (req, res, next) {
  try {
    const chickens = await Chicken.find();
    res.status(200).json(chickens);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getChicken = async function (req, res, next) {
  try {
    const chicken = await Chicken.findById(req.params.id);
    res.status(200).json(chicken);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.createChicken = async function (req, res, next) {
  try {
    const chicken = await Chicken.create(req.body);
    res.status(201).json(chicken);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateChicken = async function (req, res, next) {
  try {
    const chicken = await Chicken.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(chicken);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.patchChicken = async function (req, res, next) {
  try {
    const chicken = await Chicken.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(chicken);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deleteChicken = async function (req, res, next) {
  try {
    await Chicken.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Supprimer avec succès" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.runChickens = async function (req, res, next) {
  try {
    const chickens = await Chicken.find();
    chickens.forEach((chicken) => {
      ++chicken.steps;
      chicken.save();
    });
    res.status(200).json(chickens);
  } catch (error) {
    res.status(500).json({ error });
  }
};
