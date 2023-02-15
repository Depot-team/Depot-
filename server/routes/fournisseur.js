const express = require('express');
const router = express.Router();

// Require controller modules.
const Fournisseur = require('../controllers/fournisseur.js');



//ADD a new fournisseur 
router.post('/addf', Fournisseur.addFournisseur);
// update fournisseur information
router.put('/updatef/:id', Fournisseur.updateFournisseur);
// delete fournisseur information
router.delete('/deletef/:id', Fournisseur.deleteFournisseur);

module.exports = router;