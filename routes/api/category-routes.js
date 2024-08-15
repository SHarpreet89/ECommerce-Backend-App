const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then(categories => res.json(categories))
  .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product]
  })
  .then(category => {
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  })
  .catch(err => res.status(500).json(err));
});
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(newCategory => res.status(201).json(newCategory))
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id }
  })
  .then(updatedRows => {
    if (updatedRows[0] === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category updated' });
  })
  .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id }
  })
  .then(deletedRows => {
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;
