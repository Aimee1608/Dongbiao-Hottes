(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.che = function() {
	this.initialize(img.che);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.setsdgsdgs = function() {
	this.initialize(img.setsdgsdgs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.stdfgnrthdr = function() {
	this.initialize(img.stdfgnrthdr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.yetet = function() {
	this.initialize(img.yetet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.背景图 = function() {
	this.initialize(img.背景图);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ArnFdQAygKBPgsQCdhXCQipQCQioHWh+QDsg/DPge");
	this.shape.setTransform(74.9,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(-1.8,0,153.3,74.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ABQrnIAAFUQhAC7guDqQhfHXBWD3");
	this.shape.setTransform(10.3,74.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,-2.2,20.6,152.5), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Al0EaQhJhhA4iYQA5iXCbh0QCah1ChgOQCggOBLBiQBJBig4CXQg6CXiaB1QiaB0ihAOQgTACgSAAQiFAAhBhWg");
	this.shape.setTransform(41.3,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(-0.1,0,82.9,73.6), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4).p("AGdgmQhFCciqB7QiqB6iqARQirAQhIhkQhIhkBFieQBFicCqh6QCqh7CqgQQCrgQBIBkQBIBkhFCdg");
	this.shape.setTransform(46.6,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AmZEoQhIhkBFieQBFicCqh6QCqh7CqgQQCrgQBIBkQBIBkhFCeQhFCciqB6QiqB7iqAPQgYADgWAAQiHAAg+hWg");
	this.shape_1.setTransform(46.6,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(-0.1,-1.7,97.9,83.3), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkoCzQAjAOA8gIQB6gPCChqQCDhpA6hsQAcg2ADggQAzBEgwBrQgvBoh1BZQhzBYh4ANQgUACgRAAQhbAAgrg5g");
	this.shape.setTransform(29.7,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,59.4,47.3), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("Almj5QA5AoByBkQA5AyAtAqQCWBZCuBzQFdDlB2B7QhyghiMgdQkZg5iDAbQkuidlJi3IiIiFICkn7QAcA4AoA/QBQB+A5Ang");
	this.shape.setTransform(73.9,56);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,147.8,111.9), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("APjFRQhEBfiGApQieAwifhIQiNhAiugZQiigQgqgKQgMgDgWAFQgkAIgOACQhTALh4gnQgvglhIgxQiRhiiJg+QiCjbi2lWIUgB9QBsAOBiAUQE9BBB2BpQCBBzAMCdQAJCEhBBdg");
	this.shape.setTransform(106.2,50.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0.1,213,100.3), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("Ai6xdQATCLCDELQBPCiCkEfQBWCXB3GBQBREHAFAOQAtCMAfA+QA8B5CVDhQBLBxA+BZQghBLhNAwQiaBgjZiEQmKp7hoijQgWgihjh4QhoiAhChgQjilKhIltIkHlqQgZidAnicQBQk4FDAHQBGAhBJA8QCTB5ASCEg");
	this.shape.setTransform(93,147.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(-0.1,0,186.3,294.9), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AAkGQQgvgWgYgFQgsgKhBAHQg6AGhbAXQiXAmgBAAQi2AphxgwIgcqTQArAlA9AZQB6AzBag2QBag2AZhzQANg5gGgvIDlCrIECCGQEPCOA9AyIB0AEQB4ALAUAfQAUAgAEBsQACA1gCAwQgxAZhVAZQiqAzi0ABQiWABhjgsg");
	this.shape.setTransform(78,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,156.3,93.2), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ak5DuQgng0BAhrQBAhpCBhjQCBhiB4ghQB4ghAoA1QAoA0hBBqQhABqiBBiQiBBjh4AgQguANgjAAQg2AAgZggg");
	this.shape.setTransform(32.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(-0.1,-0.1,65.8,54), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AnegpQB5gJC2AHQFrAOE0BN");
	this.shape_1.setTransform(48,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(-2.1,0,102,14), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AI5OeIkyoEQhkhihkiPQjHkfAAjnQhRjni2i+QhbhfhKgx");
	this.shape_1.setTransform(57.8,93.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(-1,-0.3,117.9,188.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Al7EMQgTgcgFglIgBgeQAtARBLgBQCWgCCVheQC8h1BBioQAghUgFg8IAOgBQASACAPALQAyAjANBxQAFAtguBQQguBPhOBQQi/DFjBAcQgmAFghAAQh1AAgvhGg");
	this.shape.setTransform(40.6,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0.1,0.1,81.1,67.6), null);


(lib.元件75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgsdgs, null, new cjs.Matrix2D(1,0,0,1,-432.8,-384.2)).s().p("ACHcnQpXgcpOg3Qq7hFpxkgQhxgzgyiEQkZrzh6sKQg2lWClkrQDulhE2kwIA2gOIAcgpQTfjcUTBaQDUATC3BUQG6BXGXCtIApAAQJjHqFxLbQBHCOBxCbQAbABARAZQAKAPAJARQAFALADANIAIAcQADANAAAOIAbApIAABSQAyC4AHDUQAFChgfCOQg6AuhDAnQgdARgbAVIgqAAIkRCyIgpAAIgcApIiJAbQmzC7ntAlQiCAKiEgBIhTBSQk1B3l1AAQhFAAhHgEg");
	this.shape.setTransform(295.9,183.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.7,367);


(lib.元件74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],-5.2,-98.9,0.9,1.5).ss(2).p("AAVjOQgaALgOADQgaAFgmgDQgigDg1gMIhZgUQhqgVhCAZIgRFRQAZgTAkgNQBHgaA1AcQA1AbAOA7QAHAegDAXICGhXICWhFQCehIAkgaIBEgCQBGgFAMgQQALgRADg3QABgbgBgYQgdgNgygNQhjgahpgBQhYAAg6AWg");
	this.shape.setTransform(44.9,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.8,92,49.9);


(lib.元件73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],15,189.5,15,29.4).ss(2).p("AoImBQgOBGBJgCQAogCBKg1QAVgPB2hhQBZhIAzgbQBIgnAqAUIArBbQA1BwA3BmQCyFECEBmQCEBmAPCiQAHBQgTA8QhnAsiNAVQkZAri5hsQhfg3hLhFQgFgFhbhfQgrgtghgLQgrgNhDAYQg4ATgqhmQglhZAAhYQAAg7BXjYIAwhyQABgFABgFQAGgZAQgeIAOgZg");
	this.shape.setTransform(38.3,31.2,0.584,0.512,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1,79.6,65.7);


(lib.元件72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],1,254,1,-9).ss(4.6).p("A0RjcIB4BFQCeBRC4A8QJMC/J6hbICbB9IBSgUQBngXBhgPQE5gyCWAr");
	this.shape.setTransform(82.8,16.3,0.535,0.479,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],5.2,188.8,13.3,6.9).ss(2).p("AFckRQBgBVgJBgQgsAmgvAuQhfBbgTAlQgkBIhgBHQh/Bfh7gXQhJgNhFgyQhIg1glhIQhdizCxixIBHgiQBdgmBqgSQBpgTBsgMQA1gGAhgDIAfARQAlAWAeAbg");
	this.shape_1.setTransform(158.6,22.1,0.535,0.479,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],20.5,300.4,20.5,-1).ss(2).p("AMzjAQCIAzBVANQCgAaBTA5QAEACAxAnQAbAUAYAIIAUAJQAXAOATAVQA7BDgNB2QgOB7hwAuQhKAfhbgJQiQgNhqAPQhEAKhkAhQhxAlhCANQh5AZifAAQmjAAkgg2QiTgbhpgqQgjgOitg1QiigxgmgJQhUAAhCgCQh/gCgmgmQghghgthtQg2iGgIh7QgKigBLhnQBch/DWgfQExgtF9BNQC/AnCCAvIBhAMQB2AQBuATQFiA/CKBPg");
	this.shape_2.setTransform(80.1,27,0.535,0.479,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,184.5,56.7);


(lib.元件71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],3.2,236.9,3.2,-17.5).ss(3.2).p("AmfLwQBCgYB5giQB9g4CBhoQEDjSAVj2QAYkLA+jRQAUhBAVg0IARgmQgTg1gegzQg9hng8AHQguAxheBUQiqCah0CdQhZB5hRChQhqDQgVDUQgMB5AQBNQADARgNBVQgGBKAogPg");
	this.shape.setTransform(23.7,34.3,0.525,0.451,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],-5.6,208.6,-5.6,-9.1).ss(3.2).p("AC/nrQipBFhEA/QhFA/g6AyIgsAlQgqAFg+APQh7AeheAzQhZAsg4AdQhnA0hFAuQjNCLgLCXQgNC2D1AOQCdAJDMg2IBEACQBWAABVgEQEOgPCjg/QCMg2BQgsQA/gjA7gSQDPg/B/g3QDnhjgghAQgZhJgVg7Qgphwg7hNQi3jxmJAXQhHAWhVAig");
	this.shape_1.setTransform(59.3,24.8,0.525,0.451,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-5.9,130.9,75.8);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgksACSIi2FOIifAQIEXoAIjCASIAKhQIKbhBIgLBRIk6AfIg5BpIB5gLIhIIHIiWAOgA8RF8Ig6hhIAjkFIgbADIALhRIAcgEIAOhjIB5gMIgNBjIAugEIANhkIB7gMIgOBjIAbgCIgLBTIgbACIgmENIhSBsIBVCPIiUAPIgZgtIgnAzIiVAOgA6uAJIgfDgIATAgIAbgiIAfjhgA3Ei6IE+gfIhiK8Ik/AegA1LhxIhKIVIA0gFIBJoUgAvGC+ICqgRIjIEeIitASgEgiFAAbICUgPIAvGiIiWANgAsECOIlTAhIALhNIEDgaIASiHIhkAKIgpBoIiSAOIBrkTICUgOIgjBYIBPgIIAQhyICVgOIgPBxIDigVIgLBQIjjAWIgTCHIEDgZIgLBOIixASIgfDbIDCgTIgpBTIk6AegAjyE6ICCgOIAIg9IkTAbIAKhJIETgbIAFgiIBwgqIlRAhIAKhFIJLg4IgLBGIjcBUIENgaIgKBIIkNAbIgSCHIjvAWgAJvChIilhYIDZgUIBCAiIB0hIImPAnIAHg0IgrAFIAXifIBFgHIgZhmICUgPIAWBmIBDgGIgZhnICTgOIAYBnIAZgDIBDhvICZgPIhEBvIA+gGIgWCgIghAEIgJBAIjMCBIDmB3IjcAVIiAhBIiTBcIjbAVgAJBhZIgIA4IF9glIAJg5gASMCqIHwgxIAQhvInWAvIALhLIHWguIAOhvInpAxIALhMID3gXIAlkGICOgPIgkEHID0gYIg/G/IqBA/gEAiRgHSIjIATIAKhSIKvhCIgMBSIlNAgIhWJtIiYAOgAkYijIJgg8IgbC9IpfA8gAiThsIgGAxIFBgfIAGgygEAlIgFgICagQIBTFqIiaAOgAkukGIEJgaIgKgtICcgPIALAsIEAgZIgKBLIqmBCgATemwICVgPIAxCzIiVAOgAHgllIHygwIASgdICegQIg8BsIpxA9gAbcniICWgOIhnDAIiXAQg");
	this.shape.setTransform(234.4,64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,5.1,538,119.3);


(lib.元件68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrdAHeIAWhxIg0AGIAQhSIAzgGIAWhzIg0AGIAPhTIA1gFIAUhpIg1AGIARhWIF2glIiPLoIirAQIgIhVIA9gGIAki6IgzAGIgcCPIhPCHIiWAPgEgobACbIgWB0IAzgGIAXhzgEgn3gAgIgTBoIAygEIAVhpgEgkFgCOIEwgdIg2EaIhFAvIA0ArIg5ElIipARIgPBQIiGANgEgjEADTIgqDbIArgEIApjbgEgiOgBIIgnDLIArgEIAnjLgA+cHiIgOAuIhVAIIBGjpIBTgJIg0CzIAjgEIAnjNIhhAKIA1kQIFVghIg0EPIhmAKIg2EeIiSAOgA8GBHIgWBwIBIgHIAVhwgA6jHpIgpAEIAXjXIBTgJIgNCGIAzhUIAykFIggADIAQhSIAggDIAnjMICJgOIgoDMICvgRIgQBTIiuARIg4EdIhyC7IiRANgA1yBMIB4gLIhDFcIAwgEIgxBUIiGANgAvAgeIipARIAQhSIBTiYICSgOIhPCVIAzgFIBhiyICjgPIhgCyIFmgkIgQBUImHAmIglBFIF6gkIgRBVIi2CuICqCmIjEASIhRhQIhmBiIi4ASIDMjCIhShQIiXEVIinARgArgCoIBUhPIjnAWIgUApICJgNgAkjBHICdgQIiFFOIifAQgAhPh0IgpAEIAPhIIiPAOIgfiwICZgPIAeCmIAigEIAbiQICLgNIgcCQIAogEIAhirIB1gLIggCqIApgEIAhiqIBzgLIghCqIAkgDIgRBTIgjAEIhCFWIkSAbIBClWIgpAEIhOGeIFkgkIg1BVInKAtgADaiQIgyEBIAqgEIAxkCgAH5ADIgzAFIC2kbIh0ALIARhVICdgQIA2hSIClgQIg0BSIGKgnIgQBWIm1ArIh7DAIhOGVIieAPgAJ4DeICxgRIAtjpIihAPIAQhVIChgPIAeidICbgPIgdCdICbgQIgQBVIicAPIgsDqIC5gSIgRBSIoFAzgAUaBiIA5kqIhAAGIARhYIDYgVIhLGJIALAJIDGjtIhripICygSIAkA7IBRhiIktAdIAQhWICfgPIgMhpICogRIALBqICpgRIgQBVIgVADIi4DeICLDbIi0AQIhDhqIhnB7IiVAPIAkAbIHPgtIg/BYIm1ArIhHgxIgpA8IihAPgAf/BVIEigdIAQhNIkAAYIAPhRIEAgZIAOhGIkAAZIBSmwIKihBIhUGwIkBAZIgNBFIEAgZIgPBSIkBAZIgPBNIEigcIgPBUIrkBIgEAkHgFTIgSBbIBogKIAShbgEAoPgFtIgSBbIBogKIAShagEAkngH9IgRBcIBogLIAShbgEAowgIXIgSBbIBogJIAShbgAk/iKICdgQIAfC6IidAPgA95h5IBzgLIgEhCICZgPIAGBBIBxgLIgPBQIl/AmgA02jYIB5gMIgICTIh8ALgApVkrICZgOIAaB+IiaAPgAVLn6ICfgQIAdC6IigAPg");
	this.shape.setTransform(296.9,51.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,-12.9,576.4,129.2);


(lib.元件68_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrEACnIgsAPIAHhOIArgOIANiOICBgKIgKBtIBVgdIANiSIB/gLIgJBzIDWhHIgnHLIilANIgVhJIBBgGIAYkRIhVAcIgfFoIiAAKIAdlHIhWAbIgcFPIHQgmIghBOIo2AvgEggTAC5IgoACIBSi0Ig/AFIBUi2ICIgMIhIChIA6gFIhMCuIAagCIgdFPIiFALgA64GGIAvgEIAKhuIkMAWIAGhKIEMgWIADgfIj/AVIAGhFIGjgiIgGBFIgiADIgDAfIA1gFIgGBLIg1AEIgQC2IiSAMgA9wE4ICIgLIAuCJIiIALgA02B7IhFAFICBjgIhmAIIAGhIICMgMIAnhDICXgNIgnBEIFbgdIgGBIImAAgIgpBGIGFggIgnHMIjzATIgahDICLgMIAFg8IkUAXIgLCCIiIALgAyyCgIgGA9IEUgXIAFg9gAynAiIgGA7IEUgWIAFg8gAqOBZIB8gKIg2EfIh+ALgAn1DQIB2gJIghBXIAygFIAKhqIixAOIAGhDIHVgmIgFBDIitAOIgPCuIiUAMIgXgyIgUA2Ih4AKgAjTC5IB2gKIATCVIh2AKgABzDOIAGhIIhjAIIAMiOIJpgyIgMCNIheAIIgJBsIBqgJIgqBIIjHAQIALiGIijANIgGBJIhEBDIizAOgACWA+IgDAqIFygeIAEgqgAL/k7IA6gFIAehVICEgLIgeBVIBhgIIgKB6IBNjSIB+gKIgeBWIClgOIgyJBIjbASIgWhJIB5gKIAkmsIg6AFIgcBPIh5AKIglGqIkfAYgANVgFIgQC2IA6gEIAQi2gANpj6IgOCtIA6gFIAPitgAZCByIhrgiIAHhQIg7AEIAGhFIA7gFIAEgnICDgLIgEAnIDtgTIAEgoICCgKIgEAnIA6gFIgGBHIg6AFIgGBOIhvA0ICvA7IkUAWIgwgOIgyAXIkUAWgAZhgKIgBASIBzAlIB6g3IABgUgEAkJgCOICJgLIgSDLIDEgRIgmBNIksAYgEAiCgB1IB/gKIg8D6Ih9AKgA9FitIGLghIgXEMImLAggA7UgRIgCAdICMgLIACgdgA7MhwIgCAcICMgLIADgcgAnwAeIGogiIgFA+ImoAjgEApCgCZICDgLIAID0IiAALgAQZilIB8gKIAjD+Ih9AKgAqdheIB8gKIAQChIh7AKgEAmlgCYIB6gJIAJChIh+AJgAnoi6IBpgJIADggIh5AJIAGhEIHWgnIgGBFIh3AJIgDAhIBqgJIgQDAIm6AkgAmAiCIgFA8IAYgCIAFg9gAkfiLIgFA9IAZgCIAFg8gAi6iTIgFA8IAZgBIAFg8gAkWjsIgDAhIAZgCIADghgABfjIIISgrIgOCnIoSArgADgiPIgDAgIEBgWIADgfgAX2kXICLgMIhdChIiKAMgAqRkXIB7gKIAUCgIh6AKgAb8knIAFg0ICCgKIgGBJIArgDICCBvIiwAPIg/g2IhUBCIi0APgEAkBgF/IiDAKIAGhKICzgPIAyhFICcgNIguBGIEagYIgGBLIh5AKIB5DYIifANIh7jYIgxAEIg2BPIBegIIBOCJIiXANIg1hgIhRBzIiiANgAA6kpIDwgUIgIgnICRgMIAKAnIDmgTIgGBGIppAzgAZtlDIh0AKIg+iMICFgLIA4B6IBLiFICJgLIgXApID2gUIgKB/Ih9AKIAFg6IibANIgkA+IiKAMg");
	this.shape.setTransform(286.3,56);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,1.6,560.2,109);


(lib.元件67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggaAGAIhCAGICkjcIh5ALIAMhOICqgQIAtg8IhGAIIAKg+IiLANIAMhOICKgOIAKhAICVgQIgJBCIB3gMIAKhBICZgPIgKBBICEgNIgMBPIiEAMIgKA/IiZAOIAKg9Ih3ALIgIAuIBogJIg3BLIFbgiIgNBOImLAnIhMBoIGkgpIgsEhIpZA7gA+AFVIgUCBIEugdIATiBgAygBMIgzAFICXlPICcgPIiIEnIAigEIhEG9IiVAOgAu3GVIh/ANIBhlmICFgNIhWFCIAygGIBCmwICNgNIhPIDIiyARgAklAzIhOAGICij9IhzALIANhQICcgPIAwhNICqgQIgxBNIGFgmIgNBQImuApIgyBPIGzgrIhOIBIkQAaIgXhKICagQIALhCIk0AdIgWCRIiZAQgAiVBZIgKBDIEzgeIALhEgAh/g0IgKBCIE0gdIAKhCgAqmAeICEgMIgSFeIiFAMgAIhCiIAtkjIg7AFIAMhTIDNgUIg8GIIARAMIBHkOICCgNIhHEOIiBAOIAuAdIG/gtIg4BVImoAqIhHgvIgmA5IiiAQgAVoBqIBdpdIKYhAIgjDoIoFAyIgIA4IIRg0IhDG0IjvAXIgTg2IjrAXIAnkCIFBggIgjDtIAjgEIArkYImAAlIgoEGIgrBlIiZAOgAatgrIgQBpIA6gGIAQhogAZMmxIgLBKIFrgkIALhJgAOdiHIisARIANhRICrgQIAlj4ICTgNIglD2ICjgPIgMBQIijAQIgwEyIiTAPgAQ4h7ICAgMIgKEIIiBANgAtxkSICTgOIgkBPIEXgbIgeDGIiLAOIAShzIinAQIhACJIiTAOgAMbmiICBgNIACDAIiCAOgAI5mmICegRIAtCxIicAOgASHnGIB+gMIg6DGIh/AMg");
	this.shape.setTransform(283.2,40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,-15.5,428.3,112.8);


(lib.元件67_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmhAG1IBJl8IgjADIAOhHIBlgLIgHhMICEgNIALBMIBQgIIgNBIIiiAQIgQBWICLgPICQj0ICCgNIhHB6ICmgQIgOBIIgOACIiYECIBWDTIiGAMIgihTIg2BdIiAAMICFjjIg8iYICGgNIAJAYIBIh7Ig2AGIgsBLIh4ALIhNGQIh8AMIgHhGIApgEIA1kaIgjAEIgvD4Ig2BsIiBANgA7wGcIA0iJIglADIAOhGIASgCIBGlpID6gZIgNBHIiCAMIgJAyIB4gMIgPBGIh3AMIgJAyIB3gNIgNBHIh4AMIgKA0ICDgOIgNBHIhwALIg8CYIAzgEIAEh2IBfgJIgFC7IhfAJIABg0IgjA4IiTAOgA2CF4IhjAKIAOhGIBjgJIAHgmIhXAIIAPhHIBWgJIAIgqIhXAIIAOhFIBWgIIAIgrIhnAKIAMhGIBpgKIAIgoIhXAIIAOhGIBWgIIAMg8IB9gMIgMA8IBxgMIgWBwIAXgDIgNBFIgXACIgWBxIhwALIgIArIBvgLIgNBHIhwALIgHAmICIgNIgOBFIiIAOIgQBVIh9AMgAzEAfIgJAqIAhgDIAJgrgAyvhQIgIApIAigDIAHgogAvGERIgzhaIAvjyIgaACIAPhNIAagDIAShcIBxgMIgSBdIAqgEIAThcIBzgLIgSBcIAagCIgPBMIgaADIgwD6IhSBkIBJCFIiKAOIgWgqIgmAwIiMANgAtYhHIgpDOIARAgIAagiIAojQgAp1j+IEpgdIh8KLIkqAdgAoIi5IhfHwIAwgFIBgnwgAj9C0ICWgOIh+C1IiWAOgAhRCFIj6AZIAOhHID5gZIAJgyIjhAWIA+lGIJOg6Ig/FIIjiAWIgJAxID9gZIgNBHIj+AZIgnDKIiJAOgAh+hrIgLA6IBdgJIAKg6gABoiBIgLA5IBegJIAKg5gAhmjpIgLA5IBdgJIALg6gACAj/IgLA4IBdgJIAMg4gABECVICVgPIA8CjIiUAPgAG8h0IE2geIhPGUIiRAPIgMhFIAtgEIAJgxIg3AGIgXB3IiAAMgAIaAxIgHAlIA2gGIAHglgAIug4IgHAkIA3gGIAGgkgAL/hHICBgMIgQBWIAdgDIARgkIB2gLIgsBrIiHAMIgTBmICigQIgoBIIkIAagATsm+IB3gMIh/KWIh3ALgAWghNIhpAKIAPhJIBygLIAciSIhIAHIANhIIBIgIIAVhlIB+gOIgUBnICdgPIgrDaIAagCIgOBIIi4ASIgXAlIBTgIIBTDdIiLANIg/imIhsC2IiKAPgAZSk1IgbCRIArgEIAciSgAejA6IBagJIAqjWIjvAYIAQhUIBnj8IGLgnIAVgpICWgOIg6B0ImLAnIhLC7IBfgJIAdiRICOgOIgcCRID0gYIgOBKIjzAYIg4EhIjGATgAdxh1ICOgNIh8DyIiOAOgEAjUgCXICLgOIAoDjIiMANgASYk5IA2gFIg3DlIg0AGgAM+mSICBgNIgQBTIAdgCIATgkIB1gLIgwBtIiDANIgQBVIChgQIglBGIkJAagAHFjZIBoifICCgMIhmCeIBIgHIAAhbIB2gMIABCiIh1AMIgBgpIgaArIjAASgAVXlMIAwgEIgVCqIg0AEg");
	this.shape.setTransform(336.7,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.4,-25,506.6,114.4);


(lib.元件67_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6oEJIB6gKIg1DIIh7AKgA4cDrICDgLIgNCUIDDgRIgeBHIktAZgAzrDgIB+gKIATDIIh+AKgAvqB/IBzgJIguEbIh0AKgAtxEUIAhmGIgQABIAGhIIA3gEIgMhHIB/gLIALBHIAugDIgGBIIhsAJIgIBYIBwgJIgkGoIhsAJIgNgwIgSAxIhrAKgAr4ApIgVD5IgJAcIAigCIAYkVgAp9EyIAzgFIALh4IhJAFIAGhHIBJgGIAFgzIAzhEIhfAIIAFg6Ig0AEIBIjgIBwgJIgUA+IB+gKIgHBLIiQAMIgYBJICVgLIgHBNIg3BOIgDAhIBCgGIgGBIIhCAGIgRDAIiLAMgAjgA9IhFjcIB4gKIASA6IArhnIiwAOIAGhGIEcgXIgIBjIhkDzIAzCkIAfgCIBahqIgOinIhXAQIAGhKIBJgOIgSjGICCgMIASC3ICkghIgHBKIiVAfIAEA2IAggjICGgMIiZCyIAMCEIBogIIgmBPIi/APIgHhMIghAmIhQAHIAMApIh3AKIgjhxIgwB3Ih4AJgA2HDjIB+gLIAMB4Ih/ALgALBmIICWgLIh2DwIB8gKICaGfIiYAMIiOmBIjPGeIiaAMgARzkjICDgKIguILIiCAKgA5KhGIhhAIIAGhGIBhgJIAFg8IB1gJIgFA8IBdgIIgHBHIhdAHIgYEiIh1AJgA6eggIBKgHIgoD2IhMAGgAV8CIICtgPIArn4IkLAVIAGhFIGQghIg4KHIkMAVgA1XjUIEUgWIgjGbIkVAXgA0DBLIgEAtIA7gGIADgsgAz6glIgDAsIA6gFIAEgrgAzwiUIgEArIA7gFIAEgrgA3PgxIBEgGIACDwIhEAHgAUaksIERgWIgkGgIkRAXgAV4hDIgJBpIAtgEIAJhpgAWHjvIgJBkIAtgEIAJhjgAvvg8IBzgJIAOChIhyAKgAvlj0IBxgJIAPCeIhyAJgADClCIBxgKIAKB4IhuAKgAR3mpICYgMIA4BmIiWAMg");
	this.shape.setTransform(392.7,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.9,-13.6,351.8,93.1);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AE/BOQgsgQgugZQhpg4gMg4QgDgqgFgdQgIg5gYggQg0hGhihNIhZg/IgEA3QgHBDgNA6QgqC5heAZIARBFQAZBUAmBLQB4DtDHAsQAMgNAPggQAehBANhkIAQgfQAVglAXgdQBBhTA0AOQAGABAFAD");
	this.shape.setTransform(15.4,20.9,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(-1.6,-1.4,33.5,50.9), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AAYCmQhBASgdiAQgMgzABgyQABg0ANgZQAohKA6AvQAeAXAVAn");
	this.shape.setTransform(19.3,36.1,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(2).p("AC/pjQByBCBaB4IBEC4QBAC8gVAZQgUAagKAuQgFAYgBASIgLBpIAjBFQAfBHgRALQgRALggABIgbgCIgCArQgHAsgfADIAQAbQAHAhgmAcIgFAPQgFATAGAVQAHAdgVAZQgZAeg5AKQg/AKh9g1QiAg3huhZIg1jDQiiiMhZhYQgWgWgQg4QgSg7gDhHQgIizBOh7QBOh5Bsg+QBog7B1AEQB0ADBuBBg");
	this.shape_1.setTransform(24.1,31.9,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(-1,-3.2,50.4,72.4), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(3).p("Ap/snQAai3Beh+QA3hJBvglQB5goCCAYQCUAcB6BuQCNB/BYDeQBGCygNDFQgHBigVA/IAvBHQA4BbAoBhQCAE6hLELQhmFvifCpQhPBUg7AKQhihkhwjEQjdmIhCniQhLg2hThlQimjLgmjrQgYiXAViQg");
	this.shape.setTransform(44.7,86.1,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(-2.9,-4.5,93.8,182.1), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AoImBQgOBGBJgCQAogCBKg1QAVgPB2hhQBZhIAzgbQBIgnAqAUIArBbQA1BwA3BmQCyFECEBmQCEBmAPCiQAHBQgTA8QhnAsiNAVQkZAri5hsQhfg3hLhFQgFgFhbhfQgrgtghgLQgrgNhDAYQg4ATgqhmQglhZAAhYQAAg7BXjYIAwhyQABgFABgFQAGgZAQgeIAOgZg");
	this.shape.setTransform(45.2,42,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(-2.1,-1,93.5,86.6), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(5).p("ACGuMIgYAyQgdBAgcBNQhaD0gwEJQgcCZASFAQAKChAPCCIg8Fo");
	this.shape.setTransform(23.7,81.9,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AlGDHIALgzIAHgZQADgNAEgMIAghiQAuhxArhKQAKgTARgaIAcgrIA4hNIFIgEIAYBQIBCDTIgLAtIh7j2QhfAFh8gFQiBBChpDnQhCCRgrC1QAEhNARhRg");
	this.shape_1.setTransform(50.4,66.6,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AmgDeQAalvCXlxQAwAUC0CCIDqgFIDIiCIh7ILIhGkvIi7gDIiugCIgKAAIgGAHQgxBCgOAVIgdAtQgQAbgKATIgZAvIgXAxIgUAwIgSAzQggBegQBxQgMBlAGBQIgGAfQgShuANi3g");
	this.shape_2.setTransform(54.1,59.3,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AiCCrQgwgugmg6IgcgwIAok7QA4DhDKCaQBlBOBaAgIgeBkQgcAEgcAAQifAAiCh+g");
	this.shape_3.setTransform(17.1,185.3,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32FFEB").s().p("AAtExQjMhXhsjgIA3lUIAgBMQArBbAzBPQCkD8C+AhIgoCiIgFAAQhPAAhjgqg");
	this.shape_4.setTransform(23.4,153.7,0.688,0.688);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(2).p("Agz2EQCxjACkAAQCwAABYCQQAjA5AMBCQALA+gMAuQgOA6h6IIQiFIYhgDkQhgDkixJzQhZE5hGEMQhbAzhgAFQjBAJgYjkQgVjNBWocQA6lpACgMQAai0gGg+QgEglgTh5QgShxgGhKQgUjwBDjHQBCjGBniYQAggvAhglIAZgcQA5hgBZhgg");
	this.shape_5.setTransform(41.7,110.4,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(-1,-1,87.4,222.9), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(5).p("AnRs9Ig9A6QhHBMgyBXQigEWBwEZQBxEYIcEWQENCKD3BTIEdBf");
	this.shape.setTransform(61.8,65.4,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AH3LvIhakYQk/hYkBjEQkZjUgvjkQgiimBRizQAZg3AigzIAdgn");
	this.shape_1.setTransform(66.4,66.3,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("ABrJQQoVj+iMlIQhvkCCfkjQAyhbBHhUIA9hBIBzBVIgfAoQglA1gbA9QhWDAApDCQBBE0GiD7QDSB+DEBAIBVC5Qjvg9kLh/g");
	this.shape_2.setTransform(52.7,62.2,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(2).p("AlMtiQlnixhuA5IguAkQg4AxgyBBQigDNgnEYQgoEcBaCzQAeA7AwA3QAZAcAlAnQBNBhCIBnQDQCeDnBEQFkBpHXCPIB5AVQCPATBugKQFhgehkkuQhlkulrkIQhxhTh+hDIhog1IlNo+Qichji0hZg");
	this.shape_3.setTransform(80.2,68.9,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(-1.5,-1,163,139.7), null);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AgUgzIgShSIAYgBQAbACASATQATASggB1QgRA7gTA3QANhYgPhjg");
	this.shape.setTransform(105.6,93.3,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AhyHiQAkg9AVjxIAOjkQg4hRgxjlIgmjUQAYBLCECmQBBBTA9BEIBaGtQAHBehiB6QgxA9gxArg");
	this.shape_1.setTransform(22.4,155.9,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AjhB4QAPgoA+g3QB9htDthLIAMAlQhVAahaAwQixBfgTBxg");
	this.shape_2.setTransform(65.2,45.2,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AgRC4Qhii+hUg3QAZgzA1g/QBoh9CIg+IAfA2QAiA7AQAaQgLAQgPAdQgfA5gYBCQhNDQAVDSQgghUgwhfg");
	this.shape_3.setTransform(74.7,67.3,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AB4lKQgKAegbBOQgXBDAAAZIAZBoQAeBwAZArQAgA4BYCQQAABGglAtQhLBai7h9QhrhHgziEQgdhLgUiDQgIg5gDg3IgCgsQAxgdA5g1QByhpAnhyIAEATQAHAWALATQAkA9A+AGg");
	this.shape_4.setTransform(97.1,31.5,0.688,0.688);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(2).p("AqnugQB1iLBbgmQBrguD6hRQEEhWA2gFIAGBUQALBmAaBaQBWEhDXA/QB3AkAohMQAUgmgEgtIAWgIQAbgIAbABQBWACAwBTQAwBTg9CZQgfBMgoA7IgFA9QgJBLgQBHQg0DjhyBpQi2CogqAcIgsDAIgkCIQgxChhDCBQjXGak5hIQk5hIiBh4QgpglgRgmIgJgeQhLqSgXhcQgFgUgMhrQgQiIgGh/QgUmHBJhzQB8jABZhrg");
	this.shape_5.setTransform(65.4,111.8,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件54, new cjs.Rectangle(-1.2,-3.3,134.3,207.4), null);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(1.5).p("Egp7gDKQADAFlKDEQlJDDADAEUAAEAAHAyOgADUAn/gABANrgABIrAmS");
	this.shape.setTransform(333.7,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件52, new cjs.Rectangle(-1,-1,669,42.6), null);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkoHIIHHnIInHnHIAAiKIJRJRIpRJSg");
	this.shape.setTransform(29.7,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件40, new cjs.Rectangle(0,0,59.4,118.8), null);


(lib.元件40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkoHIIHHnIInHnHIAAiKIJRJRIpRJSg");
	this.shape.setTransform(29.7,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件40_1, new cjs.Rectangle(0,0,59.4,118.8), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmpDGIiKiKQABABgEkCIPvAAIB+B+IAAENIj5AAIrnAAg");
	this.shape.setTransform(56.7,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(0,0,113.3,39.6), null);


(lib.元件39_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmpDGIiKiKQABABgEkCIPvAAIB+B+IAAENIj5AAIrnAAg");
	this.shape.setTransform(56.7,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39_1, new cjs.Rectangle(0,0,113.3,39.6), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhXBoQgMhggHhoIgFhVQBRibBQhuQBMhngSAwQhLFFAeFEQAPCiAeBiIhaBuQhDhqgmk0g");
	this.shape.setTransform(37.1,46.5,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AhZDEIgthRQAfh8A6jDIAyiqQgMFqBGCqQAiBUAmANIg8B4QhjhRhBhig");
	this.shape_1.setTransform(25,68.9,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(2).p("ADBliIAHBGQACBXgXBYQhNEXkzCx");
	this.shape_2.setTransform(63.6,40,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(2).p("AHxtBIATAPQAZAUAZAdQBRBcA7CJQA7CKATBhQAJAxgDAVIAKANQALASAJAZQAdBSgGB7QgFBkgSCFQgIBsAgBuQAbBCgeBGQg9CLkfATQkAAQhVjIQgag/gGhNIgBhAIgVkHQhoBvhkB6QjHD0AaA7QASAmAoBwQAfBSAJAHQg8gjh3ghQjxhCjqA0IB3h5QCBiIAuhPQAYgpAjhwQAIgYA9jSQBklSBMiGQBcijCfiUQCEh6BYgnQAdgNAggYQARgNAegWQAwghAsAfQAuAhANAiQAGARgCALg");
	this.shape_3.setTransform(46.7,52.7,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1,99.8,109.7);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkmCQIBag8IAKizIg8iWIAtgMQA6gOBAgKQDJghC1ATQg3AFgxAHQg1AIgyAKQg1ALgwAPQg9ASgmAYIgGAEIgCBRIgGBJQgDAkgGAiIgIAjQgFATgIAJIgHAKIAHAIQAeAmA0AyQAqAnAxAlIApAbQklhsg7gzg");
	this.shape.setTransform(165.6,56.5,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("Ag1EBQgpgigtgtQgjgigkgsQAGgKAFgSQAEgNAFgZQAHgiADgnQAGhHAAhHQAbgRA6gVQAigMBAgSQAsgMA4gOIBmgXQhLAZhOAgQidA+gTAfIgeEDIAdA4QAsBFBNA/QgdgVgagVg");
	this.shape_1.setTransform(170.3,56.6,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(4.6).p("AyrglIAYgfQAhgmAtggQCPhnDOgHQDOgGItDLQEWBkDuBmIDmhkIG4DI");
	this.shape_2.setTransform(82.2,29.6,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AJdCyQjrhuhkgZIjGg5QiGgnjtgrQjzgrjVBrQhDAhg3AsIgqAmIhkizIAwgdQA+gkBBgdQDSheCvACQCvADE+BhQCfAwB8AwQEoBFDpB4QB0A8A6AuIjIBKQhigyh1g3g");
	this.shape_3.setTransform(64.9,15.8,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3).p("AE9lKQDCAjCVBwQA4AqAkAsQAhAmAEAWQAQBQgCA9QgFBsg8AhQg7Ahh8AaIhvAUQieAHikAFQlGAKgegKQgQgGj8gSQjsgRgGgSQgHgUgWglIgVgiIA4gUQBAgbAjgkQBxhwjXiZIA6gwQBJgvBOAAQAIAACdAIQBdAEBYgMQBKgLCTgxQCQgmCKAZg");
	this.shape_4.setTransform(273.3,59.7,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(3.2).p("ACYj+QBCAeA6APQDVA4CVAtQChAxAWASQAVAQAMAqQAMAsgFAsQgPB0h3AAQg0gBhCACQiEAEhHAPQhBAOhnAcQh+AjgnAKQjEAwiggGQikgGiHg+QgqgUgjgWIhYg9QhAhKgghhQhAjACghsQAsgLAxgVQA+gbAVgHQBwglDiAGQCQAECFA8QAkARBIAig");
	this.shape_5.setTransform(191,56.4,0.558,0.558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#32FFEB").ss(3.2).p("ABJnJQBKAPBMAUQD0BCCxBiQBUAvFLCeQDPBiASAqQAIATAnBBQAmBGANA2QApCri1BeQhZAAhiAUQgdAGiFAhQhdAYg8AFQhUAHhOgTQiOgjooh2IoMhwImJAAQgogRg1ghQhrhDhBhVQjSkQETliIA3giQBFgpBKggQDvhmDLAUQDMATDfBSQBvApBGAlg");
	this.shape_6.setTransform(77.5,36.3,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,321.1,82.1);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("ACHAtQiHgxjgAxICWiVIB0AMQB/AaA4A+IAABtQgWgjhEgZg");
	this.shape.setTransform(36.3,64.1,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("Ai9h7QCJgsDSASQBoAIBOASIgeCLQjag3jtBbQhKAdhEAoIg0Ajg");
	this.shape_1.setTransform(26.3,83.3,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(3.2).p("AmfLwQBCgYB5giQB9g4CBhoQEDjSAVj2QAYkLA+jRQAUhBAVg0IARgmQgTg1gegzQg9hng8AHQguAxheBUQiqCah0CdQhZB5hRChQhqDQgVDUQgMB5AQBNQADARgNBVQgGBKAogPg");
	this.shape_2.setTransform(25.2,93.4,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(3.2).p("AC/nrQipBFhEA/QhFA/g6AyIgsAlQgqAFg+APQh7AeheAzQhZAsg4AdQhnA0hFAuQjNCLgLCXQgNC2D1AOQCdAJDMg2IBEACQBWAABVgEQEOgPCjg/QCMg2BQgsQA/gjA7gSQDPg/B/g3QDnhjgghAQgZhJgVg7Qgphwg7hNQi3jxmJAXQhHAWhVAig");
	this.shape_3.setTransform(63.1,105.1,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3.2).p("AAECvQhhgPhNg3QhBgvgcgzQgohJANhsIATAHQAWAJATAPQA8AvAABSIAMgLQAPgNASgHQA6gWBDArQBXA4BpARQA0AJAjgDQgKAPgWAWQgtAqg/AfQgvAYhYgOg");
	this.shape_4.setTransform(53.1,53.2,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(1.2).p("AichNQgXATgQAYQggAvAhAaQAmAfCMAHQCJAHApgYQAhgUAMgUQAGgKgBgG");
	this.shape_5.setTransform(65.1,56.9,0.558,0.558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#32FFEB").ss(3.2).p("AgqnSQBnAqBkAyQFCCfCgCtIA7BKQA9BRAGAhQAHAjgbBWQgYBJgNAVQgNAUhSAvIhPArQgwAPg7AOQh2Adg1AAQg6AAkTg5Qkag7hMgfQg0gVhAgvQhTg+g2hMQibjXB9j5QBvjfD5gQQB9gIBmAlg");
	this.shape_6.setTransform(74.8,29.6,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-1.5,140.2,143.9);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ApDAwIBkiVICzAMQDdAGDRgcIAeAbQApAhAxAeQCdBhC8Al");
	this.shape.setTransform(137.9,107.5,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AoLhfIBkCVIAggIQApgIAwgCQCZgICbA4IAwgOQA+gRA+gJQDJggCNAv");
	this.shape_1.setTransform(145.4,52.4,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AOIGxIgWgPQh5giiyADQiZACgwATQgfAMgNgFIgGgHQhIhPjeh8Qi5hohGgXQhig1hVglQikhLh6AGQh9AGjZDHQhEA+hFBKIg4A+IhahBQgbgMAri0IAwiwIhjj6IAKgqQAHgjBGAEQAwADB3AcQCaAlA4ALQB9AWBSgHQCdgNCzB0QBZA5A5A9QBCAND7CnQB+BUBxBRQDYgND0AqQB6AVBPAXIBphFQBuhCAaAUQAMAJAWAuQAXAxAZBHQhPAFhWAJQitAUglAZQgbASgXAAQgJAAgJgDg");
	this.shape_2.setTransform(96,24.3,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AzzGdQiRghhIhUICCn8IAAjmIBkAAIAIBDQAPBIAlAfIBBBHQBRBWBUBJQEODqDIAZIEXggQEugtB2g/IAjgKQAtgKAyAAQAOAAB+AOQBwAMB2gGQBrgFBMgbQA+gWAtAEQAgADBDAiQAoAUBbAwQC0BcBQgRIAAADQgdBLgaA1QgYAwgJAGQgKAHgvgZIhmg8QiXhagvALQg0ANi9gFIizgIQgVgDglABQhJAChOAVQl9BpmYAQQiAAFhzgFIhagFQgvAfhdAVQhTAThaAAQhzAAiAgeg");
	this.shape_3.setTransform(86.8,106.9,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32FFEB").s().p("AigArIgWgrIBGhPIBpA8QB0A6BKABQgwAAg+AFQh+AKhFAZIgDAAQgNAAgWglg");
	this.shape_4.setTransform(63.9,63.8,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(3.2).p("Az4tWQgjDoA+BiIhzFWQhxFtANB2IAABzIgzBiQg2B2gSBpQg3FRFPBMQDlA1C7gqQBdgVAvgfIBaAFQBzAFCAgFQGZgQF8hpQBOgVBJgCQAlgBAVADICzAIQC9AFA0gNQAvgLCXBaQBcA2AKAGQAvAZAKgHQANgIAkhQQAphaAlhyQBok8AAj8QAAkBhUkiQgghugjhTQgghLgRgNQgagThuBBIhpBGQhOgYh6gVQj0gqjZANQhxhRh+hUQj7iohBgNQg6g8hZg6QiyhzieANQhSAHh8gXQg5gKiaglQh3gdgwgDQhGgEgHAkQgFAagXBeQgXBigMBKg");
	this.shape_5.setTransform(88.9,65.8,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.7,182.9,140.6);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AAXENIAyigQgKgogZhPQgIgcgegoIgdgiIjShQIBagjQByglB2gGIgGAHQgOAFgOAKQgPAMgNAUQgJANgKAZIgLApIAAAEIADADQAbAbAYAmQAXAkAOAlQADAJAIAfQAHAiAAAHQAEAegGA1IgBAPIANgFQAcgJAigVQAdgUAYgWIAPgQQg9BRgzAtQg4AzgjAAQgIAAgGgCg");
	this.shape.setTransform(164.4,38.2,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AghCKQgBgPgGgdQgKghgDgJQgPgogZgkQgYgkgfgbIAIgkQAJgaAGgMQAMgVAMgMQALgKAMgGQgkA0gQA6IAdAnQAfAqAJATQAZA4ALBJQAFAkAAAZIArgVQA5giBFhMIgQAWIgWAYIgXAYIgZAWQgfAZgXANQgYAOgUAIQAFgogDghg");
	this.shape_1.setTransform(173,35.3,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(4.6).p("A0RjcIB4BFQCeBRC4A8QJMC/J6hbICbB9IBSgUQBngXBhgPQE5gyCWAr");
	this.shape_2.setTransform(86.4,43.9,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AGuD0QkggGmZiAQiAgnh8gwIhkgmQg6AFhEgBQiKgCg4ggIBajIIAGASQAJAVAUATQBBA8CWAMIBlArQCFAyCZAkQHmB4H6gyICgCCQgSAKhIAJQhqANivAAQhBAAhKgCg");
	this.shape_3.setTransform(60.2,50.1,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AApj/QBkgjBlAQQB5AUCABMQB8BKARA4QAOAtgiA+IgkA2QhhAQhoAUQjOAogcAXQgcAWiKAXIiGASQAqgfAWgyQAthjhihaQgtgpjNAVIjEAdQgVgLgMgdQgYg9AuhgQAkhNB2gPQAqgFArAEQAlAEAOAIQAmAUA5ARQBNAXAzgGQAYgDAmgPQBEgbADAAg");
	this.shape_4.setTransform(193.8,21.9,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(2).p("AFckRQBgBVgJBgQgsAmgvAuQhfBbgTAlQgkBIhgBHQh/Bfh7gXQhJgNhFgyQhIg1glhIQhdizCxixIBHgiQBdgmBqgSQBpgTBsgMQA1gGAhgDIAfARQAlAWAeAbg");
	this.shape_5.setTransform(165.4,37.2,0.558,0.558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#32FFEB").ss(2).p("AMzjAQCIAzBVANQCgAaBTA5QAEACAxAnQAbAUAYAIIAUAJQAXAOATAVQA7BDgNB2QgOB7hwAuQhKAfhbgJQiQgNhqAPQhEAKhkAhQhxAlhCANQh5AZifAAQmjAAkgg2QiTgbhpgqQgjgOitg1QiigxgmgJQhUAAhCgCQh/gCgmgmQghghgthtQg2iGgIh7QgKigBLhnQBch/DWgfQExgtF9BNQC/AnCCAvIBhAMQB2AQBuATQFiA/CKBPg");
	this.shape_6.setTransform(83.5,31.5,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-1,233.2,64.9);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,189.9).s().p("A0uUuQololAAsJQAAsIIlomQImolMIAAQMJAAIlIlQImImAAMIQAAMJomIlQolImsJAAQsIAAomomg");
	this.shape.setTransform(187.6,187.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375.1,375.1);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhoNAyeMAAAhk7MDQbAAAMAAABk7g");
	this.shape.setTransform(667,323);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AjKCyQA6gkAxgtQCbiNAQihICuAVQgZBFg3BSQhtChiSA9IikASg");
	this.shape.setTransform(46.6,72.7,0.517,0.517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AiICHQAugnAjgoQBxh+gfheICVABIgCAkQgFArgQApQg0CAiPAyIiFAeg");
	this.shape_1.setTransform(62.8,71.7,0.517,0.517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(2).p("AE4gUQAGgKAEgNQAKghgNgTQgNgUgTgGQgNgEgjAAIAUgMQAUgPAAgNQAAhQgUAAIiagEAE4gUQgBADgCACIADgFgAkOgtQgIAKgKARQgWAggLAjQglBvBJBSIAkgCQAugCArAGQBIAKAwgHQBQgNBjg8IBJgDQBLgIAMgTQANgSgFgXIgIgTIAXgZQAUgegNgZQgMgXgFgB");
	this.shape_2.setTransform(86.9,64.3,0.517,0.517);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(2).p("Aj1A5IBChgQBJhkAfgNIAygHQA2gKAZgNQAXgLAXAVQAkAhASAHQAXAJAsAKQAcAGgFAFQgFAZgSARQghAfhegNIgygUQgIANgMALQgYAXgZgHIAGAYQAFAegBAcQgFBahLAl");
	this.shape_3.setTransform(85.6,58.9,0.517,0.517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AmzsIQBPhDCBA1QCAA1BLB+QA7BmgbB8QgRBSg1BQQgOAVgLBBQgGAmgQBeQgnC/hkBgQgxAvgaAmIgQAcIEagUQCdgLBpAUQA7AMC7AJQDrALAIABQA9AFAFBLQABAUgNBiQgEAkgcAOIgaAGQgSAAkNA9QkbBBiOAIQicAKj2gBIjXgDQgQAAgUgEQgpgHgYgQQgYgRAHihQANi8AEg9QAGhLA4jpIA3jZQgIkOA8iaQAqhpBehPg");
	this.shape_4.setTransform(36,41.7,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(-4.2,-1.3,113.9,90.3), null);


(lib.元件13eryre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],-236.2,34.6,11.3,-2.5).ss(2).p("AlGrBQgzArgFCEQgHCcA/DlIgGA2QgFBFADBGQAKDkBYCoQBaCuBXBFQApAgA9APQA1AOARhUQACgKgNi8QgNivAYgvQAZgyBGh9QAjg+Aeg0IA7hEQA5hOgGgsQgGgrgdgiIgbgZIhEA+QgygegyglQhkhLAAgmQAAgVAphrQAkhdgRgdQgUgHgZgIQgygPgYAAQgZAAgoAPIgjAPQgogMgwgGQhfgNglAfg");
	this.shape.setTransform(18,34.5,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13eryre, new cjs.Rectangle(-1.2,-1,38.3,76.6), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AlGrBQgzArgFCEQgHCcA/DlIgGA2QgFBFADBGQAKDkBYCoQBaCuBXBFQApAgA9APQA1AOARhUQACgKgNi8QgNivAYgvQAZgyBGh9QAjg+Aeg0IA7hEQA5hOgGgsQgGgrgdgiIgbgZIhEA+QgygegyglQhkhLAAgmQAAgVAphrQAkhdgRgdQgUgHgZgIQgygPgYAAQgZAAgoAPIgjAPQgogMgwgGQhfgNglAfg");
	this.shape.setTransform(18,34.5,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(-1.2,-1,38.3,76.6), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("AmyvOIgLBAQgKBRAGBUQASEMCkDFQCRCvEhE/QDmEJA3CMIAAFo");
	this.shape.setTransform(44.8,58.8,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("Ah+kIIAgAuQAnA7AjA+QBvDEAgCc");
	this.shape_1.setTransform(67.2,112,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AD3JYQhmiNhNhUQiBiKhchnQisjAh+iwQifjfA7lGQAShmAmhjIAihQICgC+QhKDoA2DcQBHEmEnEGQDiDKCrEJQBWCEAoBcIAADwQjWk+hriTg");
	this.shape_2.setTransform(36.3,53.2,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(3.2).p("AuuvDQgkEZBcDmQBVDTC9CeIDRDMQDZDcAsBLQAjA8CqDcQDrEuCfDaIAEAcQAJAjAVAbQBCBWCggQQCOgPA3hHQA3hIgWiOQgTh3gCgHIABAQQgtjVhgkdQjBo5kAlqQAMhtAEhnQAJjNgkg/Qghg4g/hFQhahhhrhFQk2jKltBTQhBAPhFA5QiMBxgaDNg");
	this.shape_3.setTransform(44.7,64.6,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-1.5,-6.5,95.6,145.8), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ah8EBQAHhyAIhQQAEgvAGgvQAGgxAIgvQAPhiAZhVIClhCIALBdQgKgDgXAFQgtAHg9AfQgsBmgkDRQgYCNgSCog");
	this.shape.setTransform(20.7,29.7,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AiOBPQgZnDAyiEICLBuIB4geIAJBWIi1AzIgCAEQggBWgTBoIgPBfIgJBiQgHBiABBhQACBoAHBHIgDAjQgXjIgMjig");
	this.shape_1.setTransform(19.3,27.9,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AgiCNQgygTg2gcIgsgYIgNj0QDHCMBlAlQAyASALgJIAeCMQgfAXgyAAQg9AAhYgig");
	this.shape_2.setTransform(17.7,119,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AAzFAQiugwgghxIhAn3IAgBEQAsBSAxBFQCcDgCfAXIAADgQhSgChYgYg");
	this.shape_3.setTransform(15.2,91.2,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(4.6).p("ABBO1QgSkEgajIQhGosgKisQgXmPBJkz");
	this.shape_4.setTransform(10.7,47.4,0.469,0.469);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(3.2).p("AhE2eQCYhYCcCXIAqFXQAoGLgNEGQgGB/gVDlQgMCAgYEGQgoHTAhCIQA1DZgeB6QgeB5hxAeQhhAahLhGQgYgWgTgdIgOgZQgFihgMjMQgWmZgfjYQgFgog5lFQgsj+gPivQgvoXCelaIAggqQAqgwAwgbg");
	this.shape_5.setTransform(14.6,69,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-2.3,-1.5,38.2,148.7), null);


(lib.元件8rr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#58E8DA","rgba(50,255,235,0)"],[0,1],140.4,280.9,11.3,-15.3).ss(3.2).p("Aq7g6IgSAqQgSA2AGA/QALBvAhBqQAsCPA0AAQAmAADEhJQDQhNBOgKQD2ghCdhDQEziDBZkMQgPgjgSgjQgmhGgTAAQhhAjhaAfQiyA+g3gSQgsgPjchsQjShmgZgFQgfgGgWARIgRATIgGBfQgCBpASAyQgMAFgPAKQgeAUgNAZQgUA3gRAbQggAxgzgMQgygMhBgZg");
	this.shape.setTransform(34.3,21.6,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8rr, new cjs.Rectangle(-1.5,-1.5,77.2,53.5), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(3.2).p("Aq7g6IgSAqQgSA2AGA/QALBvAhBqQAsCPA0AAQAmAADEhJQDQhNBOgKQD2ghCdhDQEziDBZkMQgPgjgSgjQgmhGgTAAQhhAjhaAfQiyA+g3gSQgsgPjchsQjShmgZgFQgfgGgWARIgRATIgGBfQgCBpASAyQgMAFgPAKQgeAUgNAZQgUA3gRAbQggAxgzgMQgygMhBgZg");
	this.shape.setTransform(34.3,21.6,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-1.5,-1.5,77.2,53.5), null);


(lib.元件7yurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AlQDJIh/AOICvjHIiHAPIBCmIIM0haIhBGJIiBAOICgChIh6AOIgqD5IjJAXIAzk0IBagKIh2htIixATIh6CIIBZgJIg5E0IjMAWgAi6iQIgLA/IB3gNIALg/gABgivIgKA/IB2gNIALg/gAiikmIgLBAIB4gOIAKg/gAB5lFIgLA/IB4gNIALg/g");
	this.shape.setTransform(40.5,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,3.4,92.7,90.5);


(lib.元件7yurt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmnCsIC+gVIhQE+Ii+AVgAj+FqIB5gNIAykgIlaAlIAiguIA/mNIKOhIIC1hIIhJCdIpHA/IgqD2ICCgOIAgjDIDjgYIghDCIE7giIhZBqIj0AbIhEGFIksAggADpBkIC5gUIgxE7Ii8AUg");
	this.shape.setTransform(57.2,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-4.2,100.7,98);


(lib.元件7yurt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Amlk/IhYhPIQRhaIh6N/Ik/AcIgqhbICcgOIBgq7In3AsIhsMbIjdATgAi8hkIGdgkIg6GgIijAOIAqk+IhTAHIgeDeIBUgTIhoB0IieAOgAi8kFIHKgnIgOBhInKAng");
	this.shape.setTransform(53.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.4,97.9);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhvBGIjGi7IBBAXQBQAcBHASQDjA4A4g3IB4B3QguAahMANQgqAHgqAAQhrAAhsgwg");
	this.shape.setTransform(46,88.8,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("ADIByQisAAi1g5Ii2irIAtATQA6AWBAAPQDLAuC6gtIAjA8QAqBDAmAiQgwALhRAAIgHgBg");
	this.shape_1.setTransform(32.9,74.7,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(3.2).p("AlQgjIBKB+QBRCBAmAGIBKAlQBPAlAhgGQAhgFANgRQAHgIAAgIIAvAFQAygFANgyIhuhkIBuBGIASgBQAVgDAQgHQAygWgZg5IighQICqA8IANgDQAPgEALgJQAggbgfg4Qg8hGgKgeQgGgSgTgJIgZgNQgcgggagcQgzg2gZgGQgVgFh1APQh1APgOgFQgNgEghAQQgkARgeAdQhSBRApBjg");
	this.shape_2.setTransform(69.6,104.3,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(3.2).p("AMyqCQgeB/h3BOQhOA0hnAXQgbAGg7ArQhLA5gtAfQizB7iaAAQhMAAgxAKIgjAKQBrB3BiC4QAzBiA/CKQAfA+CICbQBJBTBuB4QAtAzg3BAQgOAQhWBFQgfAZghgKIgagPQhJhJidiUQjWjLiHh0QiDhxitjXIiSjAQgNgNgNgRQgcgmgGgfQgHggCDh7QBHhECHh1QA+g4DhiPQBxhHBkg8QDJjeCnhMQBzg0CIAKQByAIA+COQA+CNgmCfg");
	this.shape_3.setTransform(39,51.3,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-4.5,-7.9,100.5,127.6), null);


(lib.元件6yurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AnDFqIATgDIBNnhIgwAFIApheIAWgDIAcirIDCApIgSBsIAjgFIgPBcIgkAEIhKHiIAogFIgYBeIkAAdgAiNECICwgTIgiCmIixATgABuDNIkdAgIA0k3II8g/Ig0E3IiCAOIgQBmICEgOIg6BdIj3AbgAAtBbIgGAmICugUIAGglgAA+gNIgFAkICtgTIAGgkgAhajFIA9gGIANhJIgnAEIAPhZICegSIALg2IC8gUIgLA2IChgRIgPBZIgkADIgKBIIA1gFIgPBYIokA8gACQklIgLBIIBqgMIAIhIg");
	this.shape.setTransform(54.2,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,2.5,93.5,90.9);


(lib.元件6yurt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AlKoUIDDgVIiZN4IjrDugAg0gsIhyAMIAShhIB0gNIAhjCIg7AGIARhjIA7gGIAXiJIDDAkIgNBOID+gbIgzEmIBigLIhQBoIklAgIgdAyIBvgLIB0ElIi5AUIhZjcIiLD1Ii5AUgADFlmIgiDDIA6gHIAijCgAnKldIBIgIIg2EQIhFAHgAiEmgIBIgIIgzEGIhFAHg");
	this.shape.setTransform(68.4,57.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,0,104.9,114.6);


(lib.元件6yurt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AgFi6IlOJSIjDARIBbi4IFkp7ImfAkIguhiIPfhWIBqBdImvAmIhLCGIDHgRIhUKGIkFC/gAE2ifIDBgRIg0GSIjDARg");
	this.shape.setTransform(54.9,54.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.8,108.6);


(lib.元件5yurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AlsGLIA0kxIiyAUIAqhcICXgQIAJg5IiQAQIAPhZIArgFIAVh7ICVgRIgWB8IA8gHIAVh7ICVgQIgWB7IAjgEIgPBZIiHAPIgKA6ICAgOIgPBXIiAAPIhKG/gAm2CFIBlgKIg2EUIhpAKgAiMBlIBlgLIgtESIhpAMgABLmtIE4gjIBug4Ig9CLIjhAYIgbCeIECgcIgPBbIgnAEIhMHEIi3AUIBLnDIgjAEIhIHDIiXARgAluluIB3gNIAMg+ICpgTIgJA+IB8gOIgPBYImfAtg");
	this.shape.setTransform(52.3,53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,1.6,99.4,104.3);


(lib.元件5yurt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Am0hCIAAAAIglheIEOgcIh8IUIChgSIh7CBIkLAdgAD4ALIDWgVIiuCsIAogDIBRDbIi3AUIgwh+IiUCUIjZAXgAAMgdIipASIAThpIChiiIiWARIAQhgIC6gVIAhhTIDCgWIgdBUIEcgfIhiBpIjcAYIisCqIA1gFIBhhgIDPgWInJHEIjOAXgAm5lUIERgbIgbB7IkOAbg");
	this.shape.setTransform(54.1,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.4,111.4,96.7);


(lib.元件5yurt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmyF1IErgZIAUiVIjUASIhNhcIEvgaIASiGIkGAYIAIg/IhqAJIEFlvIH0gsICrFLIhqAJIgIA+IjeATIgTCFIEIgXIhABpIjVASIgVCVIE2gdIgvBmItTBNgAgolWIiUDaIGyglIhcjGg");
	this.shape.setTransform(48.9,47.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,95.3);


(lib.元件4yurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AgDAWIhXAGIBZiqICLgLIhUCiIiOCNIgxAEg");
	this.shape.setTransform(13.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,30.8);


(lib.元件4yurt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AgDAWIhXAGIBZiqICLgLIhUCiIiOCNIgxAEg");
	this.shape.setTransform(13.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,30.8);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhDBcQA0jZgyheICLhGIARAeQATAmAKArQAhCJhFCCIjVDJQAkhaAahsg");
	this.shape.setTransform(107.3,22.8,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AgLgrQAUhmAMhvIAHhZIAggPQAtgUA/gZQBLDngjCxQgSBZggAqQhaBTiYBmQhMA0g6AjQCLh8BElFg");
	this.shape_1.setTransform(76,43.8,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(3).p("AhijrQjiAhgvAJQloBBhhCFQhxCagBC5QAABOAVA7QAWA7AjAXQAWANBHAFQApADBhAFQCLAMDqhIQD5hMCVhxQBohQEXkGQEKj8BNg1QA3gnAShAQAQg8gZgyQgag2g7gMQhDgOhYAuQhbAxh3A8QjvB2iMAzQg0AUiRAVg");
	this.shape_2.setTransform(64.9,40.6,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-2.1,-1.5,140,84.3), null);


(lib.元件3yurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkrCcIEwggIlWH3Ik5AggAAuBFIpfBAIAPiHIHQgxIAajuIi0ATIhCC5IkIAbICxnkIEIgcIg4CaICNgNIAWjJIELgdIgWDJIGchUIgUC2ImXAqIgbDvIHSgxIgPCIIk+AhIgrGAIFcgkIhGCRIozA7g");
	this.shape.setTransform(65.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,3.6,130.2,131.9);


(lib.元件3yurt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AnfH+IC7gUIAShoIm5AwIAVh8IG5gxIAJg5IDvhPIpOBBIATh2IQDhwIgVB5ImECTIIRg5IhQCCInVA0IglDmImkAugAoNkrIRPh5Ig2FEIkjAeIAjjLIoKA5IgOBTIHvgwIoBCqIkkAegApWnOIH1g3IAYhQIETgfIgWBRIIXg7IhsCHIzwCMg");
	this.shape.setTransform(75.6,70.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,7.2,143.1,125.8);


(lib.元件3yurt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AoeCsIECgcIjGIcIkCAbgAjpA9IELgeIAdiqIk7AiIAYiKIE7giIAdilIkOAdIAXiIIKEhGIDkhcIh0DWIj4AbIgdClIE7gjIh+CWIjVAYIgeCoIE1gfIhqJeIkpAhIBPnTIjsAaIg4FGID2iSIkgEgIkcAfgApGi1IEGgdIA2EuIkBAdgAoJo8IEGgdIBBFDIkEAcg");
	this.shape.setTransform(78,63.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-7.5,148.3,142.3);


(lib.元件3yurt_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("ArYISIB6gkIA5mnIhkAIIATiJIBkgJIAvlcIh0AKIATiMIHQgoIgUCMIhCAGIgwFcIAxgEIgTCJIgxAEIgzFzIBJgXIgTCIInhCMgAiFgDIDfgUIhbJ0IjhAUgADJhlIl5AhIAUiOIOIhPIhtCWIiSAMIhUJYIEkgZIhBBoIoUAugAhMpZIMQhEIhjCTIrAA9g");
	this.shape.setTransform(74.8,67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.7,134);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AB6iDQgfgrgsgaQhVg0g7BbQgUAdgDBDQgEBBAOBCQAPBJAdAoQAhAvArgH");
	this.shape.setTransform(8.4,55.8,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(2).p("AFbshQB7BUBKCSQBNCWANC/Ig1D0Qg9D3goANQgnANgsAsIh4CSIgTBNQgZBNgaAAIhGAAQgMAZgUAVQgmAqgjgSIACAMQAAAPgEANQgOAog8AEQgHAEgJAJQgRARgJAaQgMAlgpAMQgwAQhEgeQhSgjheiUQhpimgii+IA/jLQgOAFgWgNQgrgagohcQgVibAki2QBIltEciDQCnhNCfAIQCYAIB8BVg");
	this.shape_1.setTransform(44,61.6,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-2.8,-1,91.5,127.8), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.yetet, null, new cjs.Matrix2D(1.309,0,0,1.309,-642.9,-500.5)).s().p("EgMWAhYQmIgtl2hyQlIhlkei9QgegIgZgOQgpgWgkgeIgsAAQkliwjvj2QmAmOBQpSQAij5gLj0QgdqZGhlOQG0ldHektQHjkwIsBhQFUA6FIArQJtBUI9D7QITDnGOGnIAOA7Iiwi/QAAAHAEAEIAHAHQAEAEAAAHQAAAHADAEQAEAEABADQAGALADAPIAJAtQADAOAAAPQAPAAADAGQAWApAnAaQBfA/BnAuQAxAVAlAkQA7A5BcAqQBEBQBWBAQAsAgA+AyQB6BjCFBWQEVD+AcFfQARDLgSDOQgSDXhaDGQhWC8h9CiQhXAzhWA5Qi3B6jdArQlrBJlSB8QpHB9pSBEQkgAekbAAQk+AAk7gmg");
	this.shape.setTransform(397.9,207.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.instance = new lib.元件22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(445,330.1,1,0.19,1.5,0,0,187.7,187.8);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.8,314.5,1,0.19,8.2,0,0,187.6,187.8);

	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.8,328.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.8,356.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_4 = new lib.元件22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(591.5,337.1,1,0.19,0,0,0,187.6,187.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(-98.8,-9.9,877.9,434.9), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(155.7,189.8,0.688,0.688,0,0,0,73.4,108.9);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.Path_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83,122.8,0.688,0.688,0,0,0,64.2,21.4);
	this.instance_1.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ai8CHQA3gFBBgxQB/hfAujWIBUCKIgGAvQgKA4gbAxQhVCbjUAMg");
	this.shape.setTransform(206.8,259.2,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AjQDhQDpgiArkgQAOhbgHhoIgKhXIB+FKQBBC7ipCLQhUBHhhAgg");
	this.shape_1.setTransform(192.5,230.2,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AhAB8Qhuj2hkggQBWgGCIgvQBCgYAzgXIBahuIAQAgIAlBRQgdALgbAQQghARgaASQg9AoguAqIgHAGIAZE6IALBmIgEmRQAzgeA2grQARgOAigfQAbgaAPgSIAQAiQBDCZgXgLQgTgKg5hhQgkASgpAoIgpApQgKAGgCALIgmGsQgih2g3h7g");
	this.shape_2.setTransform(145.1,138.4,0.688,0.688);

	this.instance_2 = new lib.Path_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.8,306.7,0.688,0.688,0,0,0,92.5,62.1);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.Path_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(179,195.8,0.688,0.688,0,0,0,107.6,163.2);
	this.instance_3.alpha = 0.699;

	this.instance_4 = new lib.Path_23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(82,105.2,0.688,0.688,0,0,0,120.9,66.1);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.Path_25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.4,47.1,0.688,0.688,0,0,0,88.9,71);
	this.instance_5.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(-1.2,-1.8,303.9,329.9), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件27();
	this.instance.parent = this;
	this.instance.setTransform(153.7,68.6,0.941,1,0,0,0,87.8,68.6);
	this.instance.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.instance_1 = new lib.元件28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.4,92.2,0.941,1,0,0,0,56.8,70.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-14.7,282.2,195.9);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.stdfgnrthdr, null, new cjs.Matrix2D(1.278,0,0,1.278,-686.6,-520.4)).s().p("EgjCAVfQiIiAhPi2Ig2kNIgcgoQgji3g2i3QkzwVI7sNQCXjJEKhEQAVgOAWgIQALgFAOAAQFXhaGOANQIFAXIGgHQH+gHHgBXIgXgTIBEAbIgtgIIA6AwQGDBaFTDcQFVEpE/E0IAAApQBnCtBjCwQAAAOAFALQFaLRkCLQIAAA2QiEB/ixBYQibCijiAaI++DdQjzAbjrAAQuiABsUm1g");
	this.shape.setTransform(500.9,231.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.instance = new lib.元件22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(543.8,336.6,1,0.19,1.5,0,0,187.7,187.8);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(347.6,321,1,0.19,8.2,0,0,187.6,187.8);

	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.6,334.9,1,0.19,0,0,0,187.6,187.6);

	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(429.6,360.1,1,0.19,0,0,0,187.6,187.6);

	this.instance_4 = new lib.元件22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(655.6,343.6,1,0.19,0,0,0,187.6,187.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,50.2,843.1,362.3);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.元件26();
	this.instance.parent = this;
	this.instance.setTransform(242.6,187.6,1,1,0,0,0,10,31.4);
	this.instance.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:10.1,regY:31.5,scaleX:0.96,x:242.7,y:187.7},7).wait(10).to({regX:10,regY:31.4,scaleX:1,x:242.6,y:187.6},19).wait(8).to({regX:10.1,regY:31.5,scaleX:0.96,x:242.7,y:187.7},7).wait(9).to({regX:10,regY:31.4,scaleX:1,x:242.6,y:187.6},14).wait(3));

	// 图层 2
	this.instance_1 = new lib.元件29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260.7,130.1,1,1,0,0,0,27.2,32.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({regX:27.3,regY:32.3,rotation:-32.2,x:260.8},7).wait(10).to({regX:27.2,regY:32.2,rotation:0,x:260.7},19).wait(8).to({regX:27.3,regY:32.3,rotation:-32.2,x:260.8},7).wait(9).to({regX:27.2,regY:32.2,rotation:0,x:260.7},14).wait(3));

	// 图层 5
	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.8,90.2,0.941,1,0,0,0,69.4,90.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({rotation:6.7,x:130.5,y:76},7).wait(10).to({rotation:0,x:121.8,y:90.2},19).wait(8).to({rotation:6.7,x:130.5,y:76},7).wait(9).to({rotation:0,x:121.8,y:90.2},14).wait(3));

	// 图层 3
	this.instance_3 = new lib.元件51("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(243.8,155.3,1,1,0,0,0,228.3,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({startPosition:0},0).to({rotation:6.7,x:244,y:154.8},7).wait(10).to({startPosition:0},0).to({rotation:0,x:243.8,y:155.3},19).wait(8).to({startPosition:0},0).to({rotation:6.7,x:244,y:154.8},7).wait(9).to({startPosition:0},0).to({rotation:0,x:243.8,y:155.3},14).wait(3));

	// 图层 7
	this.instance_4 = new lib.元件71("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(67.3,265.5,1,1,0,0,0,51.7,31.9);
	this.instance_4.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({startPosition:0},0).to({x:58.9,y:281.9,alpha:0.141},7).wait(10).to({startPosition:0},0).to({x:67.3,y:265.5,alpha:0.48},19).wait(8).to({startPosition:0},0).to({x:58.9,y:281.9,alpha:0.141},7).wait(9).to({startPosition:0},0).to({x:67.3,y:265.5,alpha:0.48},14).wait(3));

	// 图层 8
	this.instance_5 = new lib.元件72("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(323.7,248.5,1,1,0,0,0,90.7,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({startPosition:0},0).to({x:316.9},7).wait(10).to({startPosition:0},0).to({x:323.7},19).wait(8).to({startPosition:0},0).to({x:316.9},7).wait(9).to({startPosition:0},0).to({x:323.7},14).wait(3));

	// 图层 1
	this.instance_6 = new lib.元件52();
	this.instance_6.parent = this;
	this.instance_6.setTransform(262.7,221.8,1,1,0,0,0,333.6,20.3);
	this.instance_6.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-14,698,317.4);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件75("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(349.2,324.5,1,1,0,0,0,295.9,183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(474.2,429.9,0.649,0.123,1.5,0,0,187.7,188.2);

	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.9,419.8,0.649,0.123,8.2,0,0,187.7,188);

	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(243,428.9,0.649,0.123,0,0,0,187.6,187.8);

	this.instance_4 = new lib.元件22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(427.4,447.1,0.649,0.123,0,0,0,187.7,187.8);

	this.instance_5 = new lib.元件22("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(569.4,434.5,0.649,0.123,0,0,0,187.6,187.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.3,141,637.8,367);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(10.9,67.9,0.469,0.469,0,0,0,14.6,79.5);
	this.instance.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AlCyGIg8AyIgQAyQgRBAgIBIQgcDmBFDbIhgEjQhiFHgGC1QgGC1ARCyQAJBYAKA1IgFAzQgEA/AGA4QAUC0BxAyQBzAzBZgOQAegEAggOQARgHAbgMQAfgNAmhkIAfhhQBHifBMjDQCWmFAMi0QAGhTBTiuQB2j4AYhBQBGi9gQiLQgUiuibh8QkZjhkaBYQhYAbhOA3g");
	this.shape.setTransform(27.4,5.3,0.469,0.469,0,0,0,0,-115.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(-1,-2.7,57.8,122.5), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkGBDQBegrBHgcQAngQAsgQIBUgfQBageBNgQQBUBKArAjIhJARIhdhCQhmAHi7A8Qh/AqiSA6g");
	this.shape.setTransform(82.2,24.7,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AlSCcQB7hQBwhDQFojXCBgPIgeCiIBTByIhIARQg3g9g/hAIgDgDIgFABQhUAKhdAeQgmALgvASQgjANgxAVQhQAihTAtQhNAqg/AoIgeANg");
	this.shape_1.setTransform(82.1,21.1,0.469,0.469);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(69,21.1,0.469,0.469,0,0,0,76.9,42.1);
	this.instance.alpha = 0.699;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AjTAkQgogggggmIgYghICXhIQBCBXDNA2QBnAcBaAKIjmBkQiiAAh/hog");
	this.shape_2.setTransform(20.7,48.1,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AiBB8Qi0g1hkiCIC0haIAzAZQBBAeBJAZQDnBPDbAAIl8CMQhFAAhagag");
	this.shape_3.setTransform(39.9,40.5,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AOuqRQBMAPA2AjQCrBuh6EKQgkAdg1AdQhsA6hXAAQhRAAkLCDQlaCqhMAcQnHCrheAnQl7CdgzBTQhzgWhMg4QiZhxDCipIGLjAQGajRBLhYQBbhqBehGQBihIB+g0QBqgrEbhJQCNgkB4gcg");
	this.shape_4.setTransform(54.9,31.2,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-1,-1,111.8,66.4), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件60();
	this.instance.parent = this;
	this.instance.setTransform(64.7,33,1,1,0,0,0,24.2,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:64,y:34.8},7).to({x:64.7,y:33},8).wait(1));

	// 图层 2
	this.instance_1 = new lib.元件61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.6,60.3,1,1,0,0,0,15.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:50.9,y:62.1},7).to({x:51.6,y:60.3},8).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ABuqXICWCtIAKGhQhYCYhvCnQjdFPh3BL");
	this.shape.setTransform(23.2,152.2,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AAAgoIgghhIAWAAQAYAFANAZQAMAZgKB3QgEA0gHAxQAIhNgahlg");
	this.shape_1.setTransform(55,95.8,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("ABsB/IgljXQgfhXhsh4IhmhnIAWhuICEBtQCEBwAHARQAMAbgECbIAUCeQAUCoAAArQAAAsgdBgQgOAwgPAoQAbiLggjzg");
	this.shape_2.setTransform(65.6,92.1,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("Am1RJIDKkKQDIkTgHgsQgGgsgRixIgRipQhakXhalAIAjgGQApgIAmgNQB5gqAghOQAvhuAHiTQAIiqhBgzIGBiaIAzBtQgvAug/BYQh+CwhVDSQgfBNA0ErQAbCWAgCFIgHDFQgDDaAPBuQgyBwhSCQQikEgijCcg");
	this.shape_3.setTransform(20.5,121,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3.2).p("AFb0NQE1DKAsBXQAsBYACBpQABA0gHAjIAUCLQAUCZAABEQAABFhQDuQgoB1goBpIgSC0QgZDIglBkQgeBQhfDjQhTDMgMBPQgJA4gqA5QgxBEhKAiQjEBdkNiyQkAiohpicQghgxgOgpIgHggIBoiKQBpiQAGggQAGgfgChcIgEhXQg4iCg8ilQh3lIgVisQgVirB5lcQAmhtAwhyIAohcICThgQClhhBYgHQBXgGA+gUQAggKAOgIg");
	this.shape_4.setTransform(36.9,122.2,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3.2,92.8,201.4);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(156.3,97.3,0.972,0.972,0,0,0,62.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-37,x:153.9,y:115.3},4).to({regY:17.5,rotation:-59,x:153,y:101.7},5).to({regY:17.6,rotation:-74,x:153.1,y:98.9},4).to({rotation:-38.3,x:155,y:117.4},6).to({regX:62.3,regY:17.5,rotation:-14,x:155.1,y:93.9},6).to({regX:62.4,scaleX:0.97,scaleY:0.97,rotation:-7,x:155.9,y:95.6},2).wait(1));

	// 图层 3
	this.instance_1 = new lib.元件15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(188.9,98.5,0.972,0.972,-8,0,0,22.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:22.8,regY:13.4,rotation:7.5,x:180.6,y:119.8},4).to({regX:22.9,regY:13.3,rotation:30.6,x:184.1,y:104.2},5).to({rotation:38,x:181.2,y:94.5},4).to({rotation:45.6,y:122.7},6).to({regY:13.4,rotation:6.8,x:183.2,y:95.5},6).to({regX:23,regY:13.5,scaleX:0.97,scaleY:0.97,rotation:-3,x:186.1,y:97.1},2).wait(1));

	// 图层 4
	this.instance_2 = new lib.元件10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.5,196.6,0.972,0.972,0,0,0,27.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:27.4,regY:16.9,rotation:8.5,x:152.3,y:206.4},4).to({regY:16.7,rotation:54,x:155.8,y:199.8},5).to({regY:16.6,rotation:45.2,x:151.8,y:197},4).to({regX:27.5,regY:16.8,rotation:0.2,x:155.9,y:225.2},6).to({rotation:-4.3,x:159.9,y:203.4},6).to({regX:27.6,regY:16.7,scaleX:0.97,scaleY:0.97,rotation:-2,x:154.9,y:200},2).wait(1));

	// 图层 5
	this.instance_3 = new lib.元件14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.3,205.1,0.972,0.972,0,0,0,31.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-21.2,x:144.4,y:211.8},4).to({rotation:-51.2,x:151.6,y:205.1},5).to({regX:31.6,scaleX:1.1,scaleY:1.1,rotation:-36.2,x:153.7,y:197},4).to({regY:8.9,scaleX:1.02,scaleY:1.02,rotation:-31.7,x:156.7,y:228.5},6).to({rotation:13.3,x:156.6,y:204.3},6).to({regX:31.7,scaleX:1,scaleY:1,rotation:6.5,x:150.6,y:204.8},2).wait(1));

	// 图层 6
	this.instance_4 = new lib.元件12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(121.1,301.3,0.972,0.972,9.2,0,0,102.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:102.6,regY:9.8,rotation:17.9,x:176.3,y:317.6},4).to({regX:102.5,regY:9.9,rotation:-31.5,x:227.7,y:287.2},5).to({regX:102.4,regY:10,scaleX:1.1,scaleY:1.1,rotation:-88.1,x:205.3,y:304.6},4).to({regY:10.1,scaleX:1.02,scaleY:1.02,rotation:-35.7,x:198.3,y:328.7},6).to({regX:102.5,rotation:-15.7,x:116.9,y:304.8},6).to({regX:102.6,regY:10.2,scaleX:1,scaleY:1,rotation:-3.3,x:119.1,y:303.2},2).wait(1));

	// 图层 8
	this.instance_5 = new lib.元件9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(197.8,304.5,0.972,0.972,0,0,0,14.2,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:14.4,rotation:23.3,x:182.9,y:307},4).to({regX:14.3,rotation:34.5,x:102.6,y:299.3},5).to({regX:14.5,rotation:65.6,x:115.5,y:305.5},4).to({regY:6.7,rotation:90.1,x:209.8,y:333.8},6).to({regX:14.6,rotation:-16,x:216.7,y:301.4},6).to({scaleX:0.97,scaleY:0.97,rotation:-7.8,x:207.3,y:303},2).wait(1));

	// 图层 1
	this.instance_6 = new lib.元件11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(175.3,111.6,0.971,0.971,-2,0,0,43.6,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.97,scaleY:0.97,rotation:0,x:171.8,y:130.7},4).to({y:114.7},5).to({y:107.9},4).to({y:133.1},6).to({rotation:-3.2,y:108.9},6).to({scaleX:0.97,scaleY:0.97,rotation:-2,x:175.3,y:110.7},2).wait(1));

	// 图层 7
	this.instance_7 = new lib.元件13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(22.6,328.8,0.972,0.972,8.7,0,0,22.9,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:17.4,x:74.7,y:329.7},4).to({regY:14.4,rotation:-42.3,x:171,y:372.3},5).to({regX:22.8,scaleX:1.1,scaleY:1.1,rotation:-99.3,x:250.2,y:411.4},4).to({regY:14.7,scaleX:1.02,scaleY:1.02,rotation:-78.6,x:145.5,y:422.2},6).to({regX:22.7,rotation:-20.6,x:35.2,y:373.3},6).to({regX:22.8,scaleX:1,scaleY:1,rotation:-6,x:29,y:351},2).wait(1));

	// 图层 10
	this.instance_8 = new lib.元件8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(206.1,427.5,0.972,0.972,0,0,0,14.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:14.9,rotation:23.8,x:138.8,y:423.4},4).to({rotation:49.5,x:39.4,y:403},5).to({regX:15,regY:20.1,rotation:80.6,x:7.8,y:361.5},4).to({regX:15.1,regY:19.9,rotation:105.1,x:88.6,y:340.2},6).to({scaleX:0.97,scaleY:0.97,rotation:71.9,x:117.3,y:394.8},2).to({regX:15.2,scaleX:0.97,scaleY:0.97,rotation:38.6,x:183,y:425.1},2).to({regX:15.1,scaleX:0.97,scaleY:0.97,rotation:5.2,x:256.4,y:416.1},2).to({regX:15.2,regY:20.1,rotation:2.5,x:231.4,y:422},2).wait(1));

	// 图层 13
	this.instance_9 = new lib.元件13eryre();
	this.instance_9.parent = this;
	this.instance_9.setTransform(24.5,552.9,0.971,0.951,0,171.1,-8.5,22.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:14.3,scaleX:0.97,scaleY:0.95,skewX:162.2,skewY:-17.1,x:76.6,y:552},4).to({regX:23,regY:14.4,scaleX:0.96,scaleY:0.96,skewX:222.9,skewY:41.7,x:173,y:510.4},5).to({regX:22.8,scaleX:1.08,scaleY:1.1,skewX:279.1,skewY:99.5,x:252.1,y:466.3},4).to({regY:14.6,scaleX:1,scaleY:1.02,skewX:258.8,skewY:78.3,x:147.4,y:474.7},6).to({scaleX:1.02,scaleY:1,skewX:201,skewY:20.2,x:37.2,y:509.4},6).to({scaleX:1,scaleY:0.98,skewX:186.1,skewY:5.9,x:30.9,y:531.8,alpha:0},2).wait(1));

	// 图层 12
	this.instance_10 = new lib.元件8rr();
	this.instance_10.parent = this;
	this.instance_10.setTransform(208,471.5,0.972,0.95,0,180,0,14.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:14.9,scaleX:0.97,scaleY:0.95,skewX:155.7,skewY:-23.3,x:140.8,y:469.2},4).to({scaleX:0.96,scaleY:0.96,skewX:129.9,skewY:-48.8,x:41.3,y:480.3},5).to({regX:15,regY:20,scaleX:0.95,scaleY:0.97,skewX:99.2,skewY:-80.4,x:9.8,y:520.9,alpha:0},4).to({regX:14.9,regY:19.9,scaleX:0.95,scaleY:0.97,skewX:75.2,skewY:-105.4,x:90.6,y:541.8,alpha:1},6).to({regX:15,scaleX:0.95,scaleY:0.97,skewX:107.7,skewY:-71.6,x:119.2,y:488.4},2).to({regX:15.1,regY:19.8,scaleX:0.96,scaleY:0.96,skewX:140.8,skewY:-38,x:185,y:488.5},2).to({regY:19.9,scaleX:0.97,scaleY:0.95,skewX:174.7,skewY:-5.1,x:258.3,y:467.4},2).to({regX:15.2,regY:20,skewX:177.4,skewY:-2.5,x:233.3,y:461.8},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,12.3,291.2,558.5);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(38,36.5,0.688,0.688,0,0,0,55.3,49.6);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.3,29.3,0.688,0.688,0,0,0,47.4,40.1);
	this.instance_1.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmYEPQgbgjAIg1IANgvQgDAMABAKQAAAfAYAgQBCBYCagTQCZgTCVhyQCXhyA8iOQA7iOhChXQgVgcgbgIIAFAAQAzAJAdAaQBfBXg5CiQg5CjiwCFQiyCIigAPQgUACgTAAQiFAAhKhigAD2lwQAOgBAMACIAOADg");
	this.shape.setTransform(30.5,29,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(3.8).p("AhGAhQAVAaAhAEQAgADAagVQAZgUADgfQAEgfgSgZ");
	this.shape_1.setTransform(68.3,77.5,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AAWCdIgXgCIh2iiQgXgdADglQAEgmAdgYQAfgZAnAFQAnAFAXAgIBxCbQAIBahKAXQgVAHgaAAIgEAAg");
	this.shape_2.setTransform(18.8,10.8,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(4).p("AEPjnQAfBIgwBnQgxBohpBPQhnBQhuATQhsATg9gw");
	this.shape_3.setTransform(76.3,91.4,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3.5).p("ACKltQChgOBKBiQBKBig5CXQg5CXiaB1QibB0igAOQihAOhKhiQhKhhA5iYQA5iXCah0QCah1ChgOg");
	this.shape_4.setTransform(67.1,79.5,0.688,0.688);

	this.instance_2 = new lib.Path_30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.5,100.1,0.688,0.688,0,0,0,45.1,38.1);
	this.instance_2.alpha = 0.441;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32FFEB").s().p("AlnERQg0hEBFiAQBFh/CVhyQCUhxCPgfQCOggAzBEQA0BEhFCAQhFCAiVBwQiUBxiPAgQgtAKgkAAQhNAAgjgugACOkSQh4AiiBBiQiCBjhBBpQg/BqAnA0QAnA0B4ggQB4ghCBhiQCDhjBAhpQA/hqgng1QgYggg4AAQgiAAgtAMg");
	this.shape_5.setTransform(26.4,22.1,0.688,0.688);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32FFEB").s().p("AlZGLQg9gagjgyQgqg5gChMQgChNAmhWQAkhQBBhNQBBhMBWg+QBihHBqgnQBqgnBfAAQBNAAA+AbQA8AaAjAyQAqA5ABBNQADBNgmBWQgkBQhBBMQhCBNhWA+QhhBGhqAnQhpAnhgAAQhOAAg8gbgAAWlZQhlAlheBEQiqB6hFCdQhFCdBIBkQAeArA2AWQAzAVBDAAQBYAABigkQBlglBehEQCqh6BFicQBFiehIhkQgegqg2gWQgzgWhDAAQhYAAhiAkg");
	this.shape_6.setTransform(36.4,35.7,0.688,0.688);

	this.instance_3 = new lib.Path_34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.3,44.5,0.688,0.688,0,0,0,65.1,54.2);
	this.instance_3.alpha = 0.301;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#32FFEB").ss(3.8).p("AD8m8Qg/BfhtBgQjZC+joAAIg7EbIAUAtQAZA1AaAoQBTCBA6gyQAQgOBcg8QB2hNBFgxQCdhuBMhGQB+h0gJhKQgHgEgIgIQgQgPgEgWQgEgqgFgXQgJgpgfgNQgbgLgEgZQgGglgTgZQgagjgIgJg");
	this.shape_7.setTransform(47.3,68.9,0.688,0.688,0,0,0,0,0.3);

	this.instance_4 = new lib.Path_40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.7,88.8,0.688,0.688,0,0,0,55.8,51.6);
	this.instance_4.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_7},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,100.3,110.4), null);


(lib.元件1yurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 7
	this.instance = new lib.元件7yurt("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(428.4,53,1,1,0,0,0,53.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({startPosition:0},0).to({regX:53.5,regY:49.1,scaleX:1.16,scaleY:1.17,skewX:4.4,skewY:-7.7,x:429.8,y:53.2},5,cjs.Ease.get(1)).to({regX:53.4,regY:48.8,scaleX:1.13,scaleY:1.21,skewX:-5.9,skewY:7.9,x:428.5,y:53.1},4,cjs.Ease.get(1)).to({regX:53.2,regY:48.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:428.4,y:53},5,cjs.Ease.get(1)).wait(42));

	// 元件 6
	this.instance_1 = new lib.元件6yurt("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(324,68.3,1,1,0,0,0,54.9,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({startPosition:0},0).to({regX:55.1,regY:54.1,scaleX:1.35,scaleY:1.42,skewX:4.4,skewY:11.3,x:324.1,y:68.1},5,cjs.Ease.get(1)).to({regY:54.5,scaleX:1.12,scaleY:1.21,skewX:2.6,skewY:-6.8,y:68.4},4,cjs.Ease.get(1)).to({regX:54.9,regY:54.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:324,y:68.3},5,cjs.Ease.get(1)).wait(46));

	// 元件 5
	this.instance_2 = new lib.元件5yurt("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(231.5,70.7,1,1,0,0,0,48.9,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({startPosition:0},0).to({regX:49.1,regY:47.8,scaleX:1.12,scaleY:1.16,skewX:4.4,skewY:-6.7,y:70.9},5,cjs.Ease.get(1)).to({regX:48.9,regY:47.7,scaleY:1.2,skewX:0,skewY:10.3,y:70.7},4,cjs.Ease.get(1)).to({regY:47.6,scaleX:1,scaleY:1,skewY:0},5,cjs.Ease.get(1)).wait(51));

	// 元件 3
	this.instance_3 = new lib.元件3yurt_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.8,63,1,1,0,0,0,74.8,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({startPosition:0},0).to({regX:74.9,regY:66.9,scaleX:1.07,scaleY:1.17,skewY:-7.3,x:119.5,y:60},4,cjs.Ease.get(1)).to({regX:74.8,regY:67,scaleX:1.03,scaleY:1,skewY:12.8,x:122.8,y:63},4,cjs.Ease.get(1)).to({scaleX:1,skewY:0},5,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).wait(60));

	// 元件 3
	this.instance_4 = new lib.元件3yurt("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.6,78.3,1,1,0,0,0,74.8,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({startPosition:0},0).to({regY:66.9,scaleX:1.08,scaleY:1.17,skewY:-7.3,x:-15,y:75.2},4,cjs.Ease.get(1)).to({regY:67,scaleX:1.03,scaleY:1,skewY:12.8,x:-11.6,y:78.3},4,cjs.Ease.get(1)).to({scaleX:1,skewY:0},4,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,3.2,548,143.6);


(lib.元件1yurt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 7
	this.instance = new lib.元件7yurt_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(428.4,53,1,1,0,0,0,53.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({startPosition:0},0).to({regX:53.5,regY:49.1,scaleX:1.16,scaleY:1.17,skewX:4.4,skewY:-7.7,x:429.8,y:53.2},5,cjs.Ease.get(1)).to({regX:53.4,regY:48.8,scaleX:1.13,scaleY:1.21,skewX:-5.9,skewY:7.9,x:428.5,y:53.1},4,cjs.Ease.get(1)).to({regX:53.2,regY:48.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:428.4,y:53},5,cjs.Ease.get(1)).to({_off:true},51).wait(1));

	// 元件 6
	this.instance_1 = new lib.元件6yurt_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(324,68.3,1,1,0,0,0,54.9,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({startPosition:0},0).to({regX:55.1,regY:54.2,scaleX:1.11,scaleY:1.17,skewX:4.4,skewY:11.3,x:324.1},5,cjs.Ease.get(1)).to({regY:54.5,scaleX:1.26,scaleY:1.36,skewX:2.6,skewY:-6.8,y:68.5},4,cjs.Ease.get(1)).to({regX:54.9,regY:54.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:324,y:68.3},5,cjs.Ease.get(1)).to({_off:true},56).wait(1));

	// 元件 5
	this.instance_2 = new lib.元件5yurt_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(231.5,70.7,1,1,0,0,0,48.9,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({startPosition:0},0).to({regX:49.1,regY:47.8,scaleX:1.12,scaleY:1.16,skewX:4.4,skewY:-6.7,y:70.9},5,cjs.Ease.get(1)).to({regX:48.9,regY:47.7,scaleY:1.2,skewX:0,skewY:10.3,y:70.7},4,cjs.Ease.get(1)).to({regY:47.6,scaleX:1,scaleY:1,skewY:0},5,cjs.Ease.get(1)).to({_off:true},61).wait(1));

	// 元件 4
	this.instance_3 = new lib.元件4yurt("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(158.2,119,1,1,0,0,0,13.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({startPosition:0},0).to({regX:14,regY:15.6,scaleX:3.27,scaleY:3.22,skewX:4.4,skewY:-7.2,x:154.5,y:119.4},4,cjs.Ease.get(1)).to({regX:13.9,regY:15.4,scaleX:1.37,scaleY:1.62,skewX:0,skewY:16.1,x:158.2,y:119.1},5,cjs.Ease.get(1)).to({regX:14,scaleX:1.94,scaleY:2.32,skewY:-14,x:158.4,y:119.2},4).to({regX:13.8,scaleX:1,scaleY:1,skewY:0,x:158.2,y:119},4).to({_off:true},33).wait(1));

	// 元件 3
	this.instance_4 = new lib.元件3yurt_2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.8,67,1,1,0,0,0,74.8,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({startPosition:0},0).to({scaleX:1.15,scaleY:1.21,skewY:-16.3,x:71.4,y:64.1},4,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1,skewY:12.8,x:74.8,y:67},4,cjs.Ease.get(1)).to({scaleX:1,skewY:0},4,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({_off:true},68).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-7.5,478.8,142.3);


(lib.元件1yurt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 7
	this.instance = new lib.元件7yurt_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(428.4,53,1,1,0,0,0,53.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({startPosition:0},0).to({regX:53.5,regY:49.1,scaleX:1.16,scaleY:1.17,skewX:4.4,skewY:-7.7,x:429.8,y:53.2},4,cjs.Ease.get(1)).to({regX:53.4,regY:48.8,scaleX:1.13,scaleY:1.21,skewX:-5.9,skewY:7.9,x:428.5,y:53.1},5,cjs.Ease.get(1)).to({regX:53.2,regY:48.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:428.4,y:53},5,cjs.Ease.get(1)).wait(55));

	// 元件 6
	this.instance_1 = new lib.元件6yurt_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(324,68.3,1,1,0,0,0,54.9,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({startPosition:0},0).to({regX:55.1,regY:54.2,scaleX:1.11,scaleY:1.17,skewX:4.4,skewY:11.3,x:324.1},4,cjs.Ease.get(1)).to({regY:54.5,scaleX:1.1,scaleY:1.61,skewX:2.6,skewY:-6.8,x:324,y:68.6},4,cjs.Ease.get(1)).to({regX:54.9,regY:54.3,scaleX:1,scaleY:1,skewX:0,skewY:0,y:68.3},6,cjs.Ease.get(1)).wait(59));

	// 元件 5
	this.instance_2 = new lib.元件5yurt_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(231.5,70.7,1,1,0,0,0,48.9,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({startPosition:0},0).to({regX:49.1,regY:47.8,scaleX:1.12,scaleY:1.16,skewX:4.4,skewY:-6.7,y:70.9},4,cjs.Ease.get(1)).to({regX:48.9,regY:47.7,scaleY:1.2,skewX:0,skewY:10.3,y:70.7},5,cjs.Ease.get(1)).to({regY:47.6,scaleX:1,scaleY:1,skewY:0},5,cjs.Ease.get(1)).wait(64));

	// 元件 4
	this.instance_3 = new lib.元件4yurt_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(163,119,1,1,0,0,0,13.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({startPosition:0},0).to({regX:14.1,regY:15.5,scaleX:3.75,scaleY:3.69,skewX:4.4,skewY:-7.2,x:159.8},4,cjs.Ease.get(1)).to({regX:13.9,regY:15.4,scaleX:1.37,scaleY:1.62,skewX:0,skewY:16.1,x:163,y:119.1},5,cjs.Ease.get(1)).to({scaleX:2.11,scaleY:2.11,skewY:-14},4).to({regX:13.8,scaleX:1,scaleY:1,skewY:0,y:119},4).wait(34));

	// 元件 3
	this.instance_4 = new lib.元件3yurt_3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.8,67,1,1,0,0,0,74.8,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({startPosition:0},0).to({regY:66.9,scaleX:1.1,scaleY:1.27,skewY:-18.3,x:71.4,y:64},3,cjs.Ease.get(1)).to({regY:67,scaleX:1.03,scaleY:1,skewY:12.8,x:74.8,y:67},3,cjs.Ease.get(1)).to({scaleX:1,skewY:0},3,cjs.Ease.get(1)).wait(15).to({startPosition:0},0).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,481.6,134.3);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件40();
	this.instance.parent = this;
	this.instance.setTransform(133.5,29,0.304,0.304,0,0,0,36.6,62.1);

	this.instance_1 = new lib.元件40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.8,29,0.304,0.304,0,0,0,38.3,62.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhRCSQgkgXgTgmQgSgmAAgrQAAhQArgtQAsguBDAAQAtAAAkAWQAkAVATAmQATAnAAAwQAAAxgUAnQgUAngkAUQglAUgqAAQgtAAgkgWgAhNhiQghAeAABJQAAA6AgAjQAfAhAvAAQAwABAggjQAfgiAAg+QAAgngNgeQgOgegagQQgZgQghAAQgsAAghAgg");
	this.shape.setTransform(85,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AhGCTQgngUgUgmQgUgnAAgxQAAguAUgpQAUgpAlgUQAlgUAwAAQAjAAAcALQAdAMAQAUQAQAUAIAiIgmAKQgIgZgKgOQgLgOgVgJQgUgIgYAAQgdAAgVAJQgWAJgNAPQgNAOgHARQgNAfAAAjQAAAqAPAeQAPAdAdAOQAcAOAfAAQAcABAbgLQAagLAOgNIAAg8IhfAAIAAglICJAAIAAB4QgfAZgiAMQgiANgjAAQgvAAgngVg");
	this.shape_1.setTransform(49.4,26.9);

	this.instance_2 = new lib.元件39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.6,30.7,1.547,1.547,0,0,0,56.6,19.8);
	this.instance_2.alpha = 0.219;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(1.5).p("AtUkxQYUAAACAAQDBDBABABQAAGgAAABQAAAA3/AAQABAAjWjVQABABgFmPg");
	this.shape_2.setTransform(85.3,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-1,181.8,63.2);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件40_1();
	this.instance.parent = this;
	this.instance.setTransform(133.5,29,0.304,0.304,0,0,0,36.6,62.1);

	this.instance_1 = new lib.元件40_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.8,29,0.304,0.304,0,0,0,38.3,62.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhRCSQgkgXgTgmQgSgmAAgrQAAhQArgtQAsguBDAAQAtAAAkAWQAkAVATAmQATAnAAAwQAAAxgUAnQgUAngkAUQglAUgqAAQgtAAgkgWgAhNhiQghAeAABJQAAA6AgAjQAfAhAvAAQAwABAggjQAfgiAAg+QAAgngNgeQgOgegagQQgZgQghAAQgsAAghAgg");
	this.shape.setTransform(85,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AhGCTQgngUgUgmQgUgnAAgxQAAguAUgpQAUgpAlgUQAlgUAwAAQAjAAAcALQAdAMAQAUQAQAUAIAiIgmAKQgIgZgKgOQgLgOgVgJQgUgIgYAAQgdAAgVAJQgWAJgNAPQgNAOgHARQgNAfAAAjQAAAqAPAeQAPAdAdAOQAcAOAfAAQAcABAbgLQAagLAOgNIAAg8IhfAAIAAglICJAAIAAB4QgfAZgiAMQgiANgjAAQgvAAgngVg");
	this.shape_1.setTransform(49.4,26.9);

	this.instance_2 = new lib.元件39_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.6,30.7,1.547,1.547,0,0,0,56.6,19.8);
	this.instance_2.alpha = 0.219;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(1.5).p("AtUkxQYUAAACAAQDBDBABABQAAGgAAABQAAAA3/AAQABAAjWjVQABABgFmPg");
	this.shape_2.setTransform(85.3,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-1,181.8,63.2);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.3,23.8,1,1,0,0,0,85.3,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-7.8,181.8,63.2);


(lib.元件38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.3,23.8,1,1,0,0,0,85.3,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-7.8,181.8,63.2);


(lib.元件38_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.3,23.8,1,1,0,0,0,85.3,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-7.8,181.8,63.2);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件1yurt("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(257.4,71.7,1,1,0,0,0,240.8,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.4,7.7,548,143.6);


(lib.元件37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件1yurt_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(248.3,71.5,1,1,0,0,0,240.8,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.4,-3.3,478.8,142.3);


(lib.元件37_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1yurt_2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(240.8,71.3,1,1,0,0,0,240.8,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.1,481.6,134.3);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(122.5,90.7,1,1,0,0,0,26.6,90.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 图层 1
	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.8,118.8,1,1,0,0,0,67.8,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,198.3,160.9);


(lib.元件1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 隔离模式
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AGFLZQADjOAFjPIAJmbIALmFQhugWhqgoQh4gthohBQhzhIhRhTQgrgrgog0IgTgaIgdGPQgLCkgaFIIgpHrQgVD4gYD0QAGjEANkpIAYnsIAcntQASlEALipIAIhwIA9B+IAPAZQALASAXAeQAkAvAqAqQBSBRBnBCQBrBCBqAnQBpAoB9AbIAXAFIgTGzIgVGcQgKDQgMDMQgICOgSEOQABjlACi4g");
	this.shape.setTransform(94.1,543.8,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(56));

	// 图层 2
	this.instance = new lib.元件5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164,406.5,1,1,35.5,0,0,10.3,143.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.2,rotation:-6.5,x:163.9,startPosition:12},16).wait(6).to({startPosition:17},0).to({regX:10.3,rotation:35.5,x:164,startPosition:0},19).wait(15));

	// 图层 5
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.7,217.9,1,1,0,0,0,6.8,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6.9,rotation:6.1,x:210.6,y:225.9},16).wait(6).to({regX:6.8,rotation:0,x:192.7,y:217.9},19).wait(15));

	// 图层 4
	this.instance_2 = new lib.元件58();
	this.instance_2.parent = this;
	this.instance_2.setTransform(139,328.2,1,1,0,0,0,44,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:44.1,regY:86.6,rotation:6.1,x:145.3,y:329.8},16).wait(6).to({regX:44,regY:86.5,rotation:0,x:139,y:328.2},19).wait(15));

	// 图层 7
	this.instance_3 = new lib.元件54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(155.8,288.6,1,1,0,0,0,66,100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:6.1,x:166.1,y:292.1},16).wait(6).to({rotation:0,x:155.8,y:288.6},19).wait(15));

	// 图层 8
	this.instance_4 = new lib.元件55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(117.8,405,1,1,0,0,0,43.3,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:43.4,rotation:-7.2,x:118.7,y:404.9},16).wait(6).to({regX:43.3,rotation:0,x:117.8,y:405},19).wait(15));

	// 图层 9
	this.instance_5 = new lib.元件56();
	this.instance_5.parent = this;
	this.instance_5.setTransform(198.3,582.3,1,1,0,0,0,42.6,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:201.3,y:575.6},16).wait(6).to({x:198.3,y:582.3},19).wait(15));

	// 图层 10
	this.instance_6 = new lib.元件57();
	this.instance_6.parent = this;
	this.instance_6.setTransform(228.3,740.2,1,1,0,0,0,84.9,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:85,regY:78.5,rotation:11.2,x:215,y:740.4},16).wait(6).to({regX:84.9,regY:78.4,rotation:0,x:228.3,y:740.2},19).wait(15));

	// 图层 1
	this.instance_7 = new lib.元件59();
	this.instance_7.parent = this;
	this.instance_7.setTransform(174.9,418.6,1,1,0,0,0,19.9,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.95},16).wait(6).to({scaleX:1},19).wait(15));

	// 图层 12
	this.instance_8 = new lib.元件74("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(405.9,683.7,1.194,1.194,0,0,0,45,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.12,x:393.5},16).wait(6).to({startPosition:0},0).to({scaleX:1.19,x:405.9},19).wait(15));

	// 图层 11
	this.instance_9 = new lib.元件73("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(187.9,786.2,1.194,1.194,0,0,0,37.9,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:175.5,y:782.8},16).wait(6).to({startPosition:0},0).to({x:187.9,y:786.2},19).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.7,125.1,407.4,702.7);


(lib.元件70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1_2();
	this.instance.parent = this;
	this.instance.setTransform(126.4,275.1,0.849,0.849,0,0,0,279,450.2);
	this.instance.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-13.8,374,623);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(35.3,27,0.795,0.82,0,14.3,0,65.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-1.5,156.9,49.8);


(lib.元件41_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件38_1();
	this.instance.parent = this;
	this.instance.setTransform(52.7,12.7,0.795,0.814,0,12.7,0,65.7,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.4,-15.8,155.5,49.9);


(lib.元件41_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件38_2();
	this.instance.parent = this;
	this.instance.setTransform(43.7,16,0.795,0.801,0,6.9,0,65.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-12.5,150.3,49.8);


(lib.元件1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 37
	this.instance = new lib.元件37();
	this.instance.parent = this;
	this.instance.setTransform(337.8,57.2,1,1,0,0,0,240.8,68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:212.8,y:72.2},4,cjs.Ease.get(1)).to({x:240.8,y:68.2},10,cjs.Ease.get(1)).wait(132));

	// 元件 67
	this.instance_1 = new lib.元件67("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.8,159.6,0.902,0.902,0,0,0,175.8,46.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:134.1,y:176.3},4,cjs.Ease.get(1)).to({x:165.4,y:171.9},10,cjs.Ease.get(1)).wait(123));

	// 元件 68
	this.instance_2 = new lib.元件68("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(365.1,230.2,0.902,0.902,0,0,0,280.1,54.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({x:225.4,y:247},4,cjs.Ease.get(1)).to({x:256.7,y:242.5},10,cjs.Ease.get(1)).wait(121));

	// button_4
	this.button_4 = new lib.元件41();
	this.button_4.parent = this;
	this.button_4.setTransform(514.3,305.7,1.431,1.431,-4.7,0,0,54.4,18.4);
	this.button_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(30).to({_off:false},0).to({x:389.3,y:320.7},4,cjs.Ease.get(1)).to({regX:54.5,rotation:-4.6,x:403.7,y:318.7},3,cjs.Ease.get(1)).to({scaleX:1.43,scaleY:1.43,rotation:-4.5,x:415.4,y:317},6).to({regX:54.4,scaleX:1.43,scaleY:1.43,rotation:-4.7,x:417.3,y:316.7},1).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,-3.3,547.9,143.6);


(lib.元件1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 37
	this.instance = new lib.元件37_1();
	this.instance.parent = this;
	this.instance.setTransform(337.8,57.2,1,1,0,0,0,240.8,68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:212.8,y:72.2},4,cjs.Ease.get(1)).to({x:240.8,y:68.2},10,cjs.Ease.get(1)).wait(37).to({x:212.8,y:72.2},5).to({x:337.8,y:57.2,alpha:0},4).wait(51));

	// 元件 67
	this.instance_1 = new lib.元件67_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(245.2,161,0.807,0.807,0,0,0,175.8,46.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:120.2,y:176},4,cjs.Ease.get(1)).to({x:148.2,y:172},10,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({x:120.2,y:176},5).to({x:245.2,y:161,alpha:0},4).wait(50));

	// 元件 68
	this.instance_2 = new lib.元件68_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(326.9,224.2,0.807,0.807,0,0,0,280.1,54.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({x:201.9,y:239.2},4,cjs.Ease.get(1)).to({x:229.9,y:235.2},10,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({x:201.9,y:239.2},5).to({x:326.9,y:224.2,alpha:0},4).wait(48));

	// button_4
	this.button_4 = new lib.元件41_1();
	this.button_4.parent = this;
	this.button_4.setTransform(514.3,305.7,1.431,1.431,-4.7,0,0,54.4,18.4);
	this.button_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(32).to({_off:false},0).to({x:389.3,y:320.7},4,cjs.Ease.get(1)).to({regX:54.5,rotation:-4.6,x:403.7,y:318.7},3,cjs.Ease.get(1)).to({regX:54.4,rotation:-4.7,x:417.3,y:316.7},7).wait(7).to({x:389.3,y:320.7},5).to({x:514.3,y:305.7,alpha:0},4).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.4,-14.3,478.8,142.3);


// stage content:
(lib.PEUGEOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.play();
			this.button_4.removeEventListener('click');
		}
	}
	this.frame_132 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		//this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		//function fl_ClickToGoToAndPlayFromFrame_6()
		//{
			//this.play();
		//}
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		
			this.play();
			this.button_4.removeEventListener('click');
		}
	}
	this.frame_178 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.button_4.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			//alert("已单击鼠标");
			// 结束您的自定义代码
			$('#ending').show();
			$('#fadeOut').fadeOut(500);
			$('#animation_container').hide();
			
			
		}
	}
	this.frame_187 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(68).call(this.frame_132).wait(46).call(this.frame_178).wait(9).call(this.frame_187).wait(423));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(667,323);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(610));

	// 图层 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EjQKB7KMAAAj2TMGgVAAAMAAAD2TgEhupAkjMDQbAAAMAAAhk7MjQbAAAg");
	this.shape.setTransform(708.2,412.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},399).wait(211));

	// 图层 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EioKBa0MAAAi1nMFQUAAAMAAAC1ngEhl5A0VMDQbAAAMAABhk7MjQcAAAg");
	this.shape_1.setTransform(652.2,311.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},609).wait(1));

	// button_4
	this.button_4 = new lib.元件41_2();
	this.button_4.parent = this;
	this.button_4.setTransform(1231.4,419.5,1.431,1.431,-4.7,0,0,54.4,18.4);
	this.button_4._off = true;
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.元件41_2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(48).to({_off:false},0).to({x:1106.4,y:434.5},4,cjs.Ease.get(1)).to({x:1134.4,y:430.5},10,cjs.Ease.get(1)).wait(7).to({x:1106.4,y:434.5},3).to({x:1231.4,y:419.5,alpha:0},5).wait(1).to({x:1146.6,y:484.5},0).wait(100).to({x:1134.9,y:482.5},0).to({_off:true},431).wait(1));

	// 图层 34
	this.instance = new lib.元件1_3("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(986.2,325.9,1,1,0,0,0,245.7,179.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).to({_off:true},465).wait(1));

	// 图层 26
	this.instance_1 = new lib.元件6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(513.3,320.1,1.246,1.213,0,0,0,134.3,225.3);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141).to({_off:false},0).to({x:465.9,alpha:1},7,cjs.Ease.get(1)).to({_off:true},461).wait(1));

	// 图层 28
	this.instance_2 = new lib.元件62();
	this.instance_2.parent = this;
	this.instance_2.setTransform(129.6,326.3,1,1,0,0,0,438.9,196);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(146).to({_off:false},0).to({alpha:0.691},7).to({_off:true},456).wait(1));

	// 图层 33
	this.instance_3 = new lib.元件1_4("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(968.9,352.9,1,1,0,0,0,245.7,179.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).to({_off:true},524).wait(3));

	// 图层 5
	this.instance_4 = new lib.元件70("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(579.6,333,1,1,0,0,0,162,263.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({x:603.6,alpha:1},9,cjs.Ease.get(1)).wait(45).to({startPosition:0},0).to({x:621.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},468).wait(2));

	// 图层 2
	this.instance_5 = new lib.元件48("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(68.4,317.1,1.047,1.047,0,0,0,438.9,196);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(78).to({_off:false},0).to({alpha:0.609},7,cjs.Ease.get(1)).wait(50).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(466));

	// 元件 37
	this.instance_6 = new lib.元件37_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1054.9,171,1,1,0,0,0,240.8,68.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({x:929.9,y:186},4,cjs.Ease.get(1)).to({x:957.9,y:182},10,cjs.Ease.get(1)).wait(42).to({x:929.9,y:186},3).to({x:1050.9,y:165,alpha:0},5).to({_off:true},70).wait(460));

	// 元件 67
	this.instance_7 = new lib.元件67_2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(962.3,274.8,0.807,0.807,0,0,0,175.8,46.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({x:837.3,y:289.8},4,cjs.Ease.get(1)).to({x:865.3,y:285.8},10,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({x:837.3,y:289.8},3).to({x:958.3,y:268.8,alpha:0},5).to({_off:true},61).wait(471));

	// 元件 68
	this.instance_8 = new lib.元件68_2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1044,338,0.807,0.807,0,0,0,280.1,54.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({x:919,y:353},4,cjs.Ease.get(1)).to({x:947,y:349},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).to({x:919,y:353},3).to({x:1040,y:332,alpha:0},5).to({_off:true},59).wait(472));

	// 图层 15
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(471.5,411.1,1.1,1.1,0,0,0,269.9,118.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({x:507.5,alpha:1},10,cjs.Ease.get(1)).wait(48).to({x:525.5,alpha:0},6,cjs.Ease.get(1)).to({_off:true},3).wait(531));

	// 图层 10
	this.instance_10 = new lib.元件17("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(414.7,293.8,1.074,1.074,0,0,0,667,322.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0.48},8).wait(63).to({startPosition:0},0).to({alpha:0},6).to({_off:true},530).wait(3));

	// 图层 13
	this.instance_11 = new lib.che();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},607).wait(3));

	// 图层 14
	this.instance_12 = new lib.元件21("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(667,323,1,1,0,0,0,667,323);
	this.instance_12.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},607).wait(3));

	// 图层 20
	this.instance_13 = new lib.背景图();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},607).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.9,-53.1,2664.7,1576.4);
// library properties:
lib.properties = {
	width: 1334,
	height: 646,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/che.jpg", id:"che"},
		{src:"images/setsdgsdgs.png", id:"setsdgsdgs"},
		{src:"images/stdfgnrthdr.png", id:"stdfgnrthdr"},
		{src:"images/yetet.png", id:"yetet"},
		{src:"images/背景图_.jpg", id:"背景图"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;