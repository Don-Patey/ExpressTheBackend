const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const Categories = await Category.findAll({include: Product,});
    res.json(Categories);
    }catch (error) {
      console.error(error)
      res.status(500).json();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      include: Product,
    });

    if (!category) {
      return res.status(404).json({ error: 'ERROR: Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR: Server' });
  }  
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const categoryUpdateID = await Category.update(req.body,{
      where: {id: req.params.id}
    })
    res.status(200).json(categoryUpdateID)
   }catch(err){
    console.log(err);
    res.status(400).json(err)
   }
  });

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {id: req.params.id}
    });
    if (!categoryData) {
      res.status(404).json({message: 'No category matching ID found'})
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
