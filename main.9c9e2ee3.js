parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BibH":[function(require,module,exports) {
var define;
var e;parcelRequire=function(t,n,r,o){var i,a="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function s(e,r){if(!n[e]){if(!t[e]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(e,!0);if(a)return a(e,!0);if(u&&"string"==typeof e)return u(e);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}l.resolve=function(n){return t[e][1][n]||n},l.cache={};var c=n[e]=new s.Module(e);t[e][0].call(c.exports,l,c,c.exports,this)}return n[e].exports;function l(e){return s(l.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=t,s.cache=n,s.parent=a,s.register=function(e,n){t[e]=[function(e,t){t.exports=n},{}]};for(var c=0;c<r.length;c++)try{s(r[c])}catch(t){i||(i=t)}if(r.length){var l=s(r[r.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof e&&e.amd&&e(function(){return l})}if(parcelRequire=s,i)throw i;return s}({fw1k:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e,t){return'\n  <div class="container">\n    <output></output>\n    <div class="command">\n      <div class="prompt">'.concat(e).concat(t,'</div>\n      <input class="input" spellcheck="false" autofocus />\n    </div>\n  </div>\n')}},{}],OjAK:[function(e,t,n){t.exports={name:"text-terminal",version:"0.1.0",description:"A simple, extendable terminal interface for the web.",repository:"https://github.com/desholmes/text-terminal",scripts:{clean:"rm -rf ./dist/* ",start:"parcel ./src/index.html",build:"npm run clean && parcel build ./src/scss/main.scss --out-file text-terminal.css  && parcel build ./src/modules/textTerminal.js --out-file text-terminal.js",lint:"prettier --check .","lint-fix":"prettier --write ."},main:"dist/text-terminal.js",author:"Des Holmes https://github.com/desholmes",license:"MIT",devDependencies:{"parcel-bundler":"^1.12.4",prettier:"2.1.2",sass:"^1.28.0"}}},{}],TNT3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(e("../../package.json"));var o={clear:function(e){return e.clear()},version:function(e){return e.output("Text Terminal v".concat(r.default.version))}};n.default=o},{"../../package.json":"OjAK"}],bzbF:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){var t=e.cloneNode(!0),n=t.querySelector(".input");return n.autofocus=!1,n.readOnly=!0,n.insertAdjacentHTML("beforebegin",n.value),n.parentNode.removeChild(n),t.classList.add("line"),t}},{}],bvv8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("./template")),o=a(e("./defaultCommands")),i=a(e("./cloneCommandEl"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var m=new WeakMap,p=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),m.set(this,{writable:!0,value:"TextTerminal"}),l(this,"dom",{}),l(this,"commands",{}),l(this,"history",[]),l(this,"historyCursor",0),l(this,"prompt",void 0),l(this,"separator",void 0),l(this,"theme",void 0),l(this,"welcome",void 0),l(this,"onKeyDown",function(e){var n=t.dom.input.value.trim();if(13===e.keyCode&&n){var r=u(n.split(" ")),o=r[0],a=r.slice(1);if(t.history.push(n),localStorage[d(t,m)]=JSON.stringify(t.history),t.historyCursor=t.history.length,t.dom.output.appendChild((0,i.default)(t.dom.command)),t.dom.input.value="",Object.keys(t.commands).includes(o)){var s=t.commands[o];s&&s(t,a)}else t.output("<b>".concat(o,"</b>: command not found."))}}),l(this,"onKeyUp",function(e){t.dom.input.focus(),e.stopPropagation(),e.preventDefault(),27===e.keyCode&&(t.dom.input.value="",e.stopPropagation(),e.preventDefault()),38!==e.keyCode&&40!==e.keyCode||(38===e.keyCode&&t.historyCursor>0&&(t.historyCursor-=1),40===e.keyCode&&t.historyCursor<t.history.length-1&&(t.historyCursor-=1),t.history[t.historyCursor]&&(t.dom.input.value=t.history[t.historyCursor]))}),l(this,"resetCommand",function(){t.dom.input.value="",t.dom.command.classList.remove("input")});var r=n.containerId,a=void 0===r?"text-terminal":r,s=n.commands,c=void 0===s?{}:s,p=n.prompt,f=void 0===p?"":p,h=n.theme,v=void 0===h?"dark":h,y=n.welcome,b=void 0===y?"Welcome!":y,w=n.separator,g=void 0===w?":":w,C=document.getElementById(a);if(!C)throw Error("Container #".concat(a," does not exist!"));this.commands=Object.assign({},c,o.default),this.history=localStorage[d(this,m)]?JSON.parse(localStorage[d(this,m)]):[],this.historyCursor=this.history.length,this.prompt=f,this.separator=g,this.theme=v,this.welcome=b,this.createDom(C),this.addListeners(),this.welcome&&this.output(this.welcome)}return function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(e,[{key:"addListeners",value:function(){var e=this;this.dom.output.addEventListener("DOMSubtreeModified",function(){setTimeout(function(){return e.dom.input.scrollIntoView()},10)},!1),window&&window.addEventListener("click",function(){return e.dom.input.focus()},!1),this.dom.output.addEventListener("click",function(e){return e.stopPropagation()},!1),this.dom.command.addEventListener("click",function(){return e.dom.input.focus()},!1),this.dom.input.addEventListener("keyup",this.onKeyUp,!1),this.dom.input.addEventListener("keydown",this.onKeyDown,!1)}},{key:"clear",value:function(){this.dom.output.innerHTML="",this.resetCommand()}},{key:"createDom",value:function(e){e.classList.add(d(this,m),this.theme),e.insertAdjacentHTML("beforeEnd",(0,r.default)(this.prompt,this.separator)),this.dom={container:e.querySelector(".container"),output:e.querySelector("output"),command:e.querySelector(".command"),input:e.querySelector(".command .input"),prompt:e.querySelector(".command .prompt")}}},{key:"output",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&nbsp;";this.dom.output.insertAdjacentHTML("beforeEnd","<span>".concat(e,"</span>")),this.resetCommand()}}]),e}();window&&(window.TextTerminal=p);var f=p;n.default=f},{"./template":"fw1k","./defaultCommands":"TNT3","./cloneCommandEl":"bzbF"}]},{},["bvv8"]);
},{}],"Pw7z":[function(require,module,exports) {

},{}],"IEHn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={game:{name:"The Sleepy Traveller",version:1.2,description:"Use commands to help the sleepy traveller escape",author:'<a href="https://github.com/desholmes">Des Holmes</a>',intro:'<p>And so it begins...</p><p>Blink, blink, yawn: You slowly wake up.</p><p>"Where am I?!?, maybe I should <b>look</b> around."</p>'},player:{name:"Sleepy traveller",block:"entrance",bag:null,powers:null,blockHistory:null},powers:{help:{description:"help: Lists your powers and any hints."},look:{description:"look: Use `look` for a description of your surroundings."},bag:{description:"bag: view the contents of your `bag`."},use:{description:"use: `use` an item from your `bag`."},powers:{description:"powers: List the powers you have unlocked."},take:{description:"take: `take` an item from a room and put it in your `bag`"},north:{description:"north: travel `north` from your current location."},east:{description:"east: travel `north` from your current location."},south:{description:"south: travel `south` from your current location."},west:{description:"west: travel `west` from your current location."}},items:{key:{description:"A small brass key with a decorative, red ribbon tied through it."},torch:{description:"A bright metal torch with a strong glowing yellow flame."}},blocks:{entrance:{state:"default",states:{default:{name:"Cave entrance",description:"You find yourself in a damp entrance to a cave. You can't remember how you got here, but you know you must get out. The exit to the south is blocked by thick brambles.",items:["key"],actions:{"use key":{description:"You put the key into the lock and turn the handle. The large oak door slowly opens inwards...",bag:"key",actions:[{updateExitState:["north","open"]},{removeItemFromBag:["key"]}]}},exits:{north:{block:"grand-hall",state:"closed",states:{closed:{description:"A large, locked, oak door stands before you. There is a keyhole, but it's too small to peep through."}}},west:{block:"well-lit-tunnel",state:"open"},east:{block:"dark-tunnel",state:"open"}}}}},"dark-tunnel":{state:"default","bag-state":"torch",states:{default:{name:"Dark tunnel",description:"You're standing in the pitch black. The space doesn't feel very big and there's a funny smell.",exits:{west:{block:"entrance",state:"open"}}},"torch-no-key":{name:"Dim tunnel",description:"You're standing in a torch lit room. It's small and smelly with mouldy green walls.",exits:{west:{block:"entrance",state:"open"}}},torch:{name:"Dim tunnel",description:"You're standing in a torch lit room. It's small and smelly with mouldy green walls. You can see a small key on the floor.",items:["key"],actions:{"take key":{actions:[{removeItemFromBlock:["key"]},{addItemToBag:["key"]},{removeActionFromBlock:["take key"]},{removeBagState:null},{updateBlockState:["torch-no-key"]}]}},exits:{west:{block:"entrance",state:"open"}}}}},"well-lit-tunnel":{state:"default",states:{default:{name:"Well lit tunnel",description:"You're standing in a well lit room, there are two torches on the wall. One looks to have been lit recently.",items:["torch"],actions:{"take torch":{actions:[{removeItemFromBlock:["torch"]},{addItemToBag:["torch"]},{removeActionFromBlock:["take torch"]},{updateBlockState:["dim"]}]}},exits:{east:{block:"entrance",state:"open"}}},dim:{name:"Dimly lit tunnel",description:"You're standing in dimly lit room, there's a single torch fixed firmly to the wall, and sooty marks on the wall opposite where a torch once was.",exits:{east:{block:"entrance",state:"open"}}}}},"grand-hall":{state:"default",states:{default:{name:"Grand Hall",description:'<p>You\'re standing in a vast hall. The long, well dressed table is full of delicious-looking food. A voice from the back of the room booms:</p><h1>"There you are my boy! Sit down, sit down. The food is getting cold."</h1><p>Your quest is complete!</p>',"auto-actions":[{completeQuest:null}]}}}}},t=e;exports.default=t;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var _textTerminal=_interopRequireDefault(require("text-terminal"));require("text-terminal/dist/text-terminal.css");var _game=_interopRequireDefault(require("./game"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var TextQuest=function TextQuest(){var term,indent="---\x3e",divider="<p>------------------</p>",logo='<pre class="logo">*================================================================*<br>==================================================================<br>==================================================================<br>==================================================================<br>===  ==================  ====================================  ===<br>===  ==================  ====================================  ===<br>==    ===   ===  =  ==    ========    ==  =  ===   ====   ==    ==<br>===  ===  =  ==  =  ===  ========  =  ==  =  ==  =  ==  =  ==  ===<br>===  ===     ===   ====  ========  =  ==  =  ==     ===  ====  ===<br>===  ===  ======   ====  =========    ==  =  ==  =======  ===  ===<br>===  ===  =  ==  =  ===  ===========  ==  =  ==  =  ==  =  ==  ===<br>===   ===   ===  =  ===   ==========  ===    ===   ====   ====  ==<br>====================================  = ==========================<br>=====================================  ===========================<br>==================================================================<br>========================================*"""""""""""""""""""""""*=<br>=======================================* Unlock your imagination *<br>*======================================*-------------------------*<br></pre>',welcome="<h1>Welcome to</h1>\n  ".concat(logo,"\n  ").concat(divider,"\n  <p>(Type commands to complete your quest)</p>"),stats={startTime:0,endTime:0,commandsEntered:0},start=function(){stats.startTime=(new Date).getTime(),term.output(welcome),term.output("<h1>Quest: ".concat(_game.default.game.name," (v").concat(_game.default.game.version," by ").concat(_game.default.game.author,")</h1>")),term.output(divider),term.output(_game.default.game.intro),track("search","questWelcome"),_game.default.player.blockHistory=[],_game.default.player.blockHistory.push(_game.default.player.block)},getBlockState=function(e){var t=_game.default.blocks[e];if(_game.default.blocks[e].hasOwnProperty("bag-state")){var a=_game.default.blocks[e]["bag-state"];if(bagContainsItem(a))return a}return t.state},getBlock=function(e,t){return _game.default.blocks[t].states[e]},getBlockIntro=function(e){var t=getBlock(getBlockState(e),e);return"<h1>".concat(t.name,"</h1>\n            <p>").concat(t.description,"</p>")},getPowerList=function(){var e=_game.default.player.powers,t="Powers:<br>";return e?e.forEach(function(e){t+="".concat(indent," ").concat(_game.default.powers[e].description,"<br>")}):t+="You have no powers :( Try typing a command","<p>".concat(t,"<p>")},getBlockName=function(e){return getBlock(getBlockState(e),e).name},getBlockAction=function(e){var t=getBlock(getBlockState(_game.default.player.block),_game.default.player.block);return!!t.hasOwnProperty("actions")&&(!!t.actions.hasOwnProperty(e)&&t.actions[e])},toMinsAndSecs=function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return 60==a?t+1+"m 00s":t+"m "+(a<10?"0":"")+a+"s"},getStats=function(){var e,t,a=(new Date).getTime();t=toMinsAndSecs(a-stats.startTime),e=_game.default.player.powers&&Array.isArray(_game.default.player.powers)?_game.default.player.powers.length:0,term.output("".concat(divider,"\n                  <h1>Game Stats</h1>\n                  ").concat(indent," Time taken: ").concat(t,"<br>\n                  ").concat(indent," Commands entered: ").concat(stats.commandsEntered,"<br>\n                  ").concat(indent," Powers unlocked: ").concat(e,"/").concat(Object.keys(_game.default.powers).length,"<br>\n                  ").concat(indent," Blocks visited: ").concat(_toConsumableArray(new Set(_game.default.player.blockHistory)).length,"/").concat(Object.keys(_game.default.blocks).length))},bagContainsItem=function(e){return!(!Array.isArray(_game.default.player.bag)||!_game.default.player.bag.includes(e))},getBagList=function(){var e="Bag contents: ";return Array.isArray(_game.default.player.bag)&&_game.default.player.bag.length>0?(e+="<br>",_game.default.player.bag.forEach(function(t){e+="".concat(indent," ").concat(t,": ").concat(_game.default.items[t].description,"<br>")})):e+="Your bag is empty","<p>".concat(e,"<p>")},getExitState=function(e){return"open"===e.state?"".concat(getBlockName(e.block)):e.states[e.state].description},getExists=function(){return getBlock(getBlockState(_game.default.player.block),_game.default.player.block).hasOwnProperty("exits")?"<p><b>Exits:</b><br>".concat(getExitList(_game.default.player.block),"</p>"):""},getExitList=function(e){var t=getBlock(getBlockState(e),e),a="";for(var o in t.exits)a+="".concat(indent," <b>").concat(o,"</b>: ").concat(getExitState(t.exits[o]),"<br>");return a},existIsAvailable=function(e){var t=getBlock(getBlockState(_game.default.player.block),_game.default.player.block);return!(!t.exits.hasOwnProperty(e)||"open"!==t.exits[e].state)},bag=function(){isPowerKnown("bag");var e=getBagList();term.output(e)},help=function(){isPowerKnown("help");var e=getPowerList();term.output(e);var t=getBagList();term.output(t)},look=function(){term.clear(),isPowerKnown("look"),term.output(getBlockIntro(_game.default.player.block)),term.output(getExists(_game.default.player.block))},move=function(e){if(existIsAvailable(e)){term.clear(),isPowerKnown(e);var t=getBlock(getBlockState(_game.default.player.block),_game.default.player.block);_game.default.player.block=t.exits[e].block,term.output(getBlockIntro(_game.default.player.block)),term.output(getExists(_game.default.player.block));var a=getBlock(getBlockState(_game.default.player.block),_game.default.player.block);_game.default.player.blockHistory.push(_game.default.player.block),track("search",_game.default.player.block),a.hasOwnProperty("auto-actions")&&processActions(a["auto-actions"])}else isPowerKnown(e),term.output("There is no exit ".concat(e,"."))},powers=function(){isPowerKnown("powers");var e=getPowerList();term.output(e)},take=function(e){isPowerKnown("take");var t=getBlockAction("take ".concat(e));!1!==t?(processActions(t.actions),term.output("<p>You take the ".concat(e,".</p>")),track("search","took-".concat(e))):(term.output("<p>You can't take that.</p>"),track("search","cantTake-".concat(e)))},use=function(e){isPowerKnown("use");var t=getBlockAction("use ".concat(e));bagContainsItem(t.bag)?!1!==t?(processActions(t.actions),term.output("<p>".concat(t.description)),track("search","use-".concat(e))):(term.output("<p>You can't use that.</p>"),track("search","cantUse-".concat(e))):(term.output("<p>You don't have ".concat(e,".</p>")),track("search","useDontHave-".concat(e)))},processActions=function processActions(actions){for(var i=0;i<actions.length;i++){var funcName=Object.keys(actions[i])[0],func=eval(funcName);func(actions[i][funcName])}},completeQuest=function(){getStats(),document.querySelector(".command").style.display="none",track("search","questComplete")},addItemToBag=function(e){Array.isArray(_game.default.player.bag)||(_game.default.player.bag=[]),_game.default.player.bag.push(e[0])},removeItemFromBag=function(e){var t=_game.default.player.bag.indexOf(e);_game.default.player.bag.splice(t)},removeItemFromBlock=function(e){var t=getBlockState(_game.default.player.block),a=_game.default.blocks[_game.default.player.block].states[t].items.indexOf(e);_game.default.blocks[_game.default.player.block].states[t].items.splice(a)},removeActionFromBlock=function(e){var t=getBlockState(_game.default.player.block);delete _game.default.blocks[_game.default.player.block].states[t].actions[e]},updateBlockState=function(e){_game.default.blocks[_game.default.player.block].state=e},updateExitState=function(e){var t=getBlockState(_game.default.player.block);_game.default.blocks[_game.default.player.block].states[t].exits[e[0]].state=e[1]},removeBagState=function(){getBlockState(_game.default.player.block);delete _game.default.blocks[_game.default.player.block]["bag-state"]},newPowerUnlocked=function(e){term.output('<h1 class="power-unlocked">New power unlocked: '.concat(e,"</h1>")),term.output(divider),track("search","newPowerUnlocked--".concat(e))},isPowerKnown=function(e){Array.isArray(_game.default.player.powers)?_game.default.player.powers.includes(e)||(newPowerUnlocked(e),_game.default.player.powers.push(e)):(_game.default.player.powers=[],newPowerUnlocked(e),_game.default.player.powers.push(e))},setTerm=function(e){term=e},track=function(e,t){window.gtag&&"search"===e&&window.gtag("event","search",{search_term:t})},bumpCommandsEntered=function(){stats.commandsEntered+=1};return{logo:logo,divider:divider,bag:bag,help:help,look:look,move:move,powers:powers,take:take,use:use,setTerm:setTerm,start:start,track:track,bumpCommandsEntered:bumpCommandsEntered}},init=function(){var e=TextQuest(),t={bag:function(){e.bag()},clear:function(e){e.clear()},help:function(){e.help()},look:function(){e.look()},powers:function(){e.powers()},take:function(t,a){e.take(a)},use:function(t,a){e.use(a)},north:function(){e.move("north")},east:function(){e.move("east")},south:function(){e.move("south")},west:function(){e.move("west")}},a=new _textTerminal.default({containerId:"terminal",prompt:"Traveller",separator:": ",welcome:"",commands:t});a.dom.command.addEventListener("keydown",function(o){if(38===o.keyCode)e.track("search","up-arrow");else if(40===o.keyCode)e.track("search","down-arrow");else if(13===o.keyCode){var r,n,c;a.dom.input.value.includes(" ")?(n=(r=a.dom.input.value.split(" "))[0],c=r.join("-")):n=c=r=a.dom.input.value;var l=t.hasOwnProperty(n)?"commandKnown":"commandUnknown";e.track("search","".concat(l,"--").concat(c)),e.bumpCommandsEntered(),document.querySelector(".github-fork-ribbon").classList.add("mobile-hide")}},!0),e.setTerm(a),e.start(),document.body.addEventListener("click",function(){document.querySelector(".input").focus()},!0),"localhost"!==window.location.hostname&&document.querySelector(".github-fork-ribbon").classList.remove("hide")};"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?init():document.addEventListener("DOMContentLoaded",init);
},{"text-terminal":"BibH","text-terminal/dist/text-terminal.css":"Pw7z","./game":"IEHn"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.9c9e2ee3.js.map