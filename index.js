/**
 * @file mofron-effect-position/index.js
 * @brief position effect for mofron
 *        it makes easy to move the component position by the animation.
 * @feature default animation speed is 300ms
 * @attention it may not work well if "posType" was configured incorrectly.
 *            "posType" is disabled if the target component was already set "position" style.
 * @author simpart
 */
const mf = require("mofron");

mofron.effect.Position = class extends mofron.Effect {
    /**
     * initialize effect
     *
     * @param (string/object) string: direction parameter
     *                        object: effect options
     * @param (string) value parameter
     * @pmap dirction,value
     * @type private
     */
    constructor (po,p2) {
        try {
            super();
            this.name('Position');
            this.prmMap(["dirction","value"]);
            this.speed(300);
            this.prmOpt(po,p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set begin position
     *
     * @type private
     */
    component (prm) {
        try {
            if (true === mf.func.isComp(prm)) {
                let set_st = {};
                set_st[this.direction()] = this.value()[0];
                prm.style(set_st, {loose:true});
            }
            return super.component(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * set end position
     * 
     * @param (object) effect target component
     * @type private
     */
    contents (cmp) {
        try {
            cmp.style(
                { "position" : this.posiType() },
                { loose: true }
            );
            let tp = {};
            tp[this.direction()] = this.value()[1];
            cmp.style(tp);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * position type
     * value of "position" style
     *
     * @param (string) position type, the default is "relative"
     *                 ["absolute"/"fixed"/"inherit"/"initial"/"relative"/"static"/"sticky"/"unset"]
     * @return (string) position type
     * @type parameter
     */
    posiType (prm) {
        try {
            return this.member(
                "posiType",
                ["absolute", "fixed", "inherit", "initial", "relative", "static", "sticky", "unset"],
                prm,
                "relative"
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * direction type
     *
     * @param (string) direction type, the default is "left"
     *                 ["top"/"left"/"bottom"/"right"]
     * @return (string) direction type
     * @type parameter
     */
    direction (prm) {
        try {
            return this.member(
                "type",
                ["top", "left", "bottom", "right"],
                prm,
                "left"
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * position value
     * component position is moved by this value size
     * 
     * @param (string) begin position value, default is "0rem"
     * @param (string) end position value, default is "0rem"
     * @return (string) position value
     * @type parameter
     */
    value (bgn, end) {
        try {
            if (undefined === bgn) {
                return [this.beginVal(), this.endVal()];
            }
            this.beginVal(bgn);
            this.endVal(end);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * begin position value
     *
     * @param (string) begin position value, default is "0rem"
     * @return (string) begin position value
     * @type parameter
     */
    beginVal (prm) {
        try {
            if (undefined !== prm) {
                mf.func.getSize(prm);
                if (null !== this.component()) {
                    let set_st = {};
                    set_st[this.direction()] = prm;
                    this.component().style(set_st);
                }
            }
            return this.member("biginVal", "string", prm, "0rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * end position value
     *
     * @param (string) end position value, default is "0rem"
     * @return (string) end position value
     * @type parameter
     */
    endVal (prm) {
        try {
            if (undefined !== prm) {
                mf.func.getSize(prm);
            }
            return this.member("endVal", "string", prm, "0rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Position;
/* end of file */
