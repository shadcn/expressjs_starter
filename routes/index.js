
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: req.app.config.name });
};