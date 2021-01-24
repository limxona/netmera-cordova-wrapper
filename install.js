
var ncp = require('ncp').ncp;

var source = 'source/@ionic-native/netmera-plugin';
var destination = '../@ionic-native/netmera-plugin';

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copied netmera-plugin files successfuly');
  console.log('Source: '+ source);
  console.log('Destination: '+ destination);
});

