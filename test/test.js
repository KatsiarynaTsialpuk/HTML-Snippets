"use strict";

var a11y = require('a11y');
var chalk = require('chalk');
var emoji = require('node-emoji');

var pages = [
    './meta-data/index.html',
    './picture/index.html',
    './quotes/index.html',
    './article/index.html',
    './semantic-forms/index.html'
];

module.exports = function() {
    pages.forEach(function(page) {
        a11y(page, function (err, reports) {

            if(err) throw err;

            console.log(page);
            console.log('------------------------------');

            reports.audit.forEach(function (el) {
                if (el.result === 'FAIL') {
                    console.log(emoji.get(':cry:') + chalk.red( ' ' + el.heading));
                } else {
                    console.log(emoji.get(':smile:') + chalk.green(' ' + el.heading));
                }
            });

            console.log('------------------------------');

        });
    });
}();
