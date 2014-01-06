/**
 * ImagesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var fs=require("fs"),
    latenize=require("latenize"),
    sanitze=require('validator').sanitize;

module.exports = {

  
  /**
   * Action blueprints:
   *    `/images/create`
   */
   create: function (req, res) {
      var newPath;
      fs.readFile(req.files.file.path, function (err, data) {
          console.log("/tmp/"+req.files.file.name);
          newPath = "/tmp/"+latenize(req.files.file.name);
          fs.writeFile(newPath, data, function (err) {

          });
      });


          // we now have a model with instance methods attached
          // update an attribute value

          // save the updated value
              Images.create({name: req.files.file.name, path : newPath}).done(function(error, user) {
                  if (error) {
                      res.send(500, {error: "DB Error"});
                  } else {

                  }
              })



    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/images/destroy`
   */
   destroy: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/images/tag`
   */
   tag: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ImagesController)
   */
  _config: {}

  
};
