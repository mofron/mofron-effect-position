/**
 * @file mofron-effect-position/index.js
 * @brief position effect for mofron
 *        it makes easy to move the component position by the animation.
 * @attention it may not work well if "posType" was configured incorrectly.
 *            "posType" is disabled if the target component was already set "position" style.
 * @author simpart
 */
const mf = require("mofron");

mofron.effect.Position = class extends mofron.Effect {
    /**
     * initialize effect
     *
     * @param (string/object) string: position direction type
     *                        object: effect options
     * @pmap type
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('Position');
            this.prmMap("types");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @param (object) effect target component
     */
    contents (cmp) {
        try {
            cmp.style(
                { "position" : this.posiType() },
                { loose: true }
            );
            let tp = {};
            tp[this.type()] = this.value();
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
    dirType (prm) {
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
     * set position, direction types
     *
     * @param (string) same as "posType"
     * @param (string) same as "dirType"
     * @return (array) types [posType, dirType]
     * @type parameter
     */
    types (pos, dir) {
        try {
            if (undefined === pos) {
                return [this.posType(), this.dirType()];
            }
            this.posType(pos);
            this.dirType(dir);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * position value
     * component position is moved by this value size
     * 
     * @param (string) position value, default is "0rem"
     * @return (string) position value
     * @type parameter
     */
    value (prm) {
        try {
            if (undefined !== prm) {
                mf.func.getSize(prm);
            }
            return this.member("value", "string", prm, "0rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Position;
/* end of file */
