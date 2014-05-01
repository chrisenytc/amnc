/*
 * amnc
 * https://github.com/chrisenytc/amnc
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module Dependencies
 */

var GeoIP = require('geoip-lite'),
    UserAgent = require('express-useragent'),
    _ = require('underscore');

/**
@class Amnc
 */

/*
 * Public Methods
 */

/**
 * Method responsible for parse the data and return a json object with the browser name, browser version, os name, plataform, country, region and city.
 *
 * @example
 *
 *     amnc.parse('Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36', '207.97.227.239');
 *
 * @method parse
 * @param {String} userAgentString A user-agent header
 * @param {String} ip Name of People A ip address
 * @return {Object} Returns json
 */

exports.parse = function(userAgentString, ip) {
    //Get data
    var userAgentData = UserAgent.parse(userAgentString),
        ipData = GeoIP.lookup(ip),
        Storage = {};
    //Extend
    _.extend(Storage, userAgentData);
    Storage.GeoIP = ipData;
    //Return result
    return Storage;
};
