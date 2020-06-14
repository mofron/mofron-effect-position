/**
 * @file mofron-effect-position/index.js
 * @brief center positon effect module
 *        position setter module for horizontal and vertical
 * @license MIT
 */
const HrzPos = require("mofron-effect-hrzpos");
const VrtPos = require("mofron-effect-vrtpos");

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) horiz parameter
     *                dict: effect config
     * @param (string) vrtic parameter 
     * @short horiz,vrtic
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.name("Position");
	    this.shortForm("horiz", "vrtic");
            /* init config */
	    this.confmng().add("horiz", { type: "string", init: "center" });
            this.confmng().add("vrtic", { type: "string", init: "center" } );
            /* set config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * component setter/getter
     * 
     * @param (component) effect target
     * @return (component) effect target
     * @type private
     */
    component (prm) {
        try {
	    if (undefined !== prm) {
                prm.effect([
		    new HrzPos(this.horiz()),
		    new VrtPos(this.vrtic())
		]);
	    }
            return super.component(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * horizontal position setter/getter
     * 
     * @param (string) horizontal position [left,center,right]
     * @return (string) horizontal position
     * @type parameter
     */
    horiz (prm) {
        try {
            return this.confmng("horiz", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * vertical position setter/getter
     *
     * @param (string) vertical position [top,center,bottom]
     * @return (string) vertical position
     * @type parameter
     */
    vrtic (prm) {
        try {
            return this.confmng("vrtic", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
