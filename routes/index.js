var express = require('express');
var router = express.Router();

var quizController = require ('../controllers/quiz_controller.js');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Definición de rutas de /quizes
router.get('/quizes',                     quizController.index);
router.get('/quizes/:quizId(\\d)',        quizController.show);
router.get('/quizes/:quizId(\\d)/answer', quizController.answer);

router.get('/author', function(req, res) {
  res.render('author', { autor: 'Jos\u00E9 Estarl\u00ED' });
});


module.exports = router;