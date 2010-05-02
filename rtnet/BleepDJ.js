/*
 * BleepDJ
 * My first Dojo project/dijit, also a hopefully amusing audio experiment
 * Copyright Brian Arnold, 2010
 *
 * MIT Licensed, so, y'know, do what'cha want with it
 * See LICENSE for details
 *
 * Any audio files associated with this project are licensed under
 * Creative Commons Attribution 3.0 United States License
 * See http://creativecommons.org/licenses/by/3.0/us/ for details
 */

// Specify who we are
dojo.provide('rtnet.BleepDJ');

// Bring in template-y stuff
dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

// Build 'er up
dojo.declare(
    'rtnet.BleepDJ',
    [dijit._Widget, dijit._Templated],
    {
        templatePath: dojo.moduleUrl('rtnet', 'templates/BleepDJ.html');
    }
)