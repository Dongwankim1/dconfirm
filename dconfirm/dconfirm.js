/**
 * Bead Sort, also known as Gravity sort.
 *
 * This algorithm was inspired from natural phenomena and was designed keeping in mind objects (or beads) falling under
 * the influence of gravity.
 *
 * NOTE: It only works for arrays of positive integers.
 *
 * 
 */


/**
 * 
 * @param {html} mainElem  html structure to use.
 * @param {string} innerElemId 
 * @param {Object} options {width : window width size, height : window height size }
 * @param {string} content  Display the contents on the screen.
 * @param {function} callback 
 * @returns {boolean} 
 */

function Dconfirm(mainElem,innerElemId,options,content,callback){
    this.mainElem = mainElem;
    this.innerElemId = innerElemId;
    this.options = options;
    this.content = content;
    this.callback = callback;
    this.create();
}

Dconfirm.prototype.create = function(){
    this.mainElem.style.display = "none";
    document.body.appendChild(this.mainElem);
}

Dconfirm.prototype.confirm = function(){
    
}

Dconfirm.prototype.alert = function(){
    
}