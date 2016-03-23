'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Masticake = new Module('masticake');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Masticake.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Masticake.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Masticake.menus.add({
    title: 'masticake example page',
    link: 'masticake example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Masticake.aggregateAsset('css', 'masticake.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Masticake.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Masticake.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Masticake.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Masticake;
});
