/*
 * amnc
 * https://github.com/chrisenytc/amnc
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect,
    userAgentString = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36',
    ip = '207.97.227.239',
    amnc = require('../lib/amnc.js');

describe('amnc module', function() {
    describe('#parse()', function() {
        it('should return a json object with result', function() {
            expect(amnc.parse(userAgentString, ip)).to.a('object');
        });
        it('should to have a property isMobile', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isMobile');
        });
        it('should to have a property isiPad', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isiPad');
        });
        it('should to have a property isiPod', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isiPod');
        });
        it('should to have a property isiPhone', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isiPhone');
        });
        it('should to have a property isAndroid', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isAndroid');
        });
        it('should to have a property isBlackberry', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isBlackberry');
        });
        it('should to have a property isOpera', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isOpera');
        });
        it('should to have a property isIE', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isIE');
        });
        it('should to have a property isIECompatibilityMode', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isIECompatibilityMode');
        });
        it('should to have a property isSafari', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isSafari');
        });
        it('should to have a property isFirefox', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isFirefox');
        });
        it('should to have a property isWebkit', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isWebkit');
        });
        it('should to have a property isChrome', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isChrome');
        });
        it('should to have a property isKonqueror', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isKonqueror');
        });
        it('should to have a property isOmniWeb', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isOmniWeb');
        });
        it('should to have a property isSeaMonkey', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isSeaMonkey');
        });
        it('should to have a property isFlock', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isFlock');
        });
        it('should to have a property isEpiphany', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isEpiphany');
        });
        it('should to have a property isDesktop', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isDesktop');
        });
        it('should to have a property isWindows', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isWindows');
        });
        it('should to have a property isLinux', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isLinux');
        });
        it('should to have a property isLinux64', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isLinux64');
        });
        it('should to have a property isMac', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isMac');
        });
        it('should to have a property isSamsung', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isSamsung');
        });
        it('should to have a property isRaspberry', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isRaspberry');
        });
        it('should to have a property isBot', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isBot');
        });
        it('should to have a property isCurl', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isCurl');
        });
        it('should to have a property isAndroidTablet', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isAndroidTablet');
        });
        it('should to have a property isWinJs', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('isWinJs');
        });
        it('should to have a property Browser', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('Browser');
        });
        it('should to have a property Version', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('Version');
        });
        it('should to have a property OS', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('OS');
        });
        it('should to have a property Platform', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('Platform');
        });
        it('should to have a property GeoIP', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('GeoIP');
        });
        it('should to have a property source', function() {
            expect(amnc.parse(userAgentString, ip)).to.have.property('source');
        });
    });
});
