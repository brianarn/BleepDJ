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
dojo.require('dijit.form.Button');
dojo.require('dijit.form.Slider');

// Build 'er up
dojo.declare(
    'rtnet.BleepDJ',
    [dijit._Widget, dijit._Templated],
    {
        templatePath: dojo.moduleUrl('rtnet', 'templates/BleepDJ.html'),
        widgetsInTemplate: true,

        // Local variables - the note array is intentionally defined here for all
        notes: ['c2','d2','e2','f2','g2','a2','b2','c3'],
        cols: null, // Will be a set of query objects for LEDs per column
        curCol: 0,
        numCols: 0,
        isPlaying: false,

        postCreate: function () {
            var ledCols, i, l;
            
            // Build up an array of NodeLists of LEDs per column
            ledCols = dojo.query('.bleepdj_led_col', this.domNode);
            this.cols = [];
            this.numCols = ledCols.length;
            for (i = 0, l = ledCols.length; i < l; i++) {
                this.cols.push(dojo.query('.bleepdj_led', ledCols[i]));
            }
            
            dojo.query('.bleepdj_led', this.domNode).onclick(function (e){
                dojo.toggleClass(e.target, 'on');
            });
            
            // Cycle the lights
            this.curCol = this.numCols - 1;
            (dojo.hitch(this, function cycle(){
                this.cols[this.curCol].removeClass('on');
                this.curCol = (this.curCol + 1) % this.numCols;
                this.cols[this.curCol].addClass('on');
                setTimeout(dojo.hitch(this, cycle), 1000 / this.tempo.value * 30);
            }))();
        }, 
        
        _playClick: function (e) {
            console.log('_playClick');
        }
    }
); // declare('rtnet.BleepDJ')