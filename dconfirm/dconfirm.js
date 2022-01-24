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

function Dconfirm(options,content,callback){
    this.options = options;
    this.content = content;
    this.callback = callback;
    this.create();
    window.addEventListener("resize",resize.bind(this));
    

    function resize(){
        this.mainFrame.style.top = window.innerHeight/8+"px";
        this.mainFrame.style.left = (window.innerWidth/2)-(options.width/2)+"px";

    }
}

Dconfirm.prototype.create = function(){
    this.mainFrame = document.createElement("div");
    this.mainFrame.className = "dconfirm_container";
    this.mainFrame.style.display = "flex";
    this.mainFrame.style.flexDirection = "column";
    this.mainFrame.style.alignItems = "center";
    this.mainFrame.style.justifyContent = "center";
    this.mainFrame.style.width = options.width+"px";
    this.mainFrame.style.height = options.height+"px";
    this.mainFrame.style.position = "absolute"
    this.mainFrame.style.top = window.innerHeight/8+"px";
    this.mainFrame.style.left = (window.innerWidth/2)-(options.width/2)+"px";
    this.mainFrame.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px ";
    this.mainFrame.style.background = "red";
    this.mainFrame.style.zIndex = 99999;

    this.titleFrame = document.createElement("div");
    this.titleFrame.style.background = "yellow";
    this.titleFrame.style.width = options.width+"px";
    this.titleFrame.style.height = options.height+"px";
    this.titleFrame.style.flex ="0.1";


    this.contentFrame = document.createElement("div");
    this.contentFrame.style.background = "blue";
    this.contentFrame.style.width = options.width+"px";
    this.contentFrame.style.height = options.height+"px";
    this.contentFrame.style.flex ="0.9";
    this.contentFrame.style.display = "flex";
    this.contentFrame.style.justifyContent = "center";
    this.contentFrame.style.alignItems = "center";
    
    this.contentSubFrame = document.createElement("div");
    this.contentSubFrame.style.background = "green";
    this.contentSubFrame.style.width = (options.width)/1.05+"px";
    this.contentSubFrame.style.height = (options.height/1.2)+"px";
    this.contentSubFrame.style.display = "flex";
    this.contentSubFrame.style.alignItems = "center";
    this.contentSubFrame.style.justifyContent = "center";
    this.contentSubFrame.style.flexDirection = "column";
    
    this.contentComponent = document.createElement("div");
    this.contentComponent.style.background = "red";
    this.contentComponent.style.width = (options.width)/1.5+"px";
    this.contentComponent.style.height = (options.height)/5+"px";
    this.contentComponent.style.margin = "5px";

    this.contentSpan = document.createElement("span");
    this.contentSpan.innerText= options.text;
    this.contentComponent.append(this.contentSpan);

    this.btnComponent = document.createElement("div");
    this.btnComponent.style.background = "yellow";
    this.btnComponent.style.width = (options.width)/1.5+"px";
    this.btnComponent.style.height = (options.height)/5+"px";
    this.btnComponent.style.margin = "5px";
    
    //this.subFrame.append(this.btnComponent);
    this.contentSubFrame.appendChild(this.contentComponent);
    this.contentSubFrame.appendChild(this.btnComponent);
    this.contentFrame.append(this.contentSubFrame);
    this.mainFrame.append(this.titleFrame);
    this.mainFrame.append(this.contentFrame);
    document.body.append(this.mainFrame)

    

}

Dconfirm.prototype.confirm = function(btnOptions){
    if(btnOptions!=null || btnOptions!=undefined){
        
    }
}

Dconfirm.prototype.alert = function(){
    
}