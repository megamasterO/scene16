(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kitchenscene_atlas_", frames: [[856,0,854,480],[0,482,854,480],[856,482,854,480],[0,0,854,480],[0,964,854,480],[856,964,854,480]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["kitchenscene_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.foster = function() {
	this.spriteSheet = ss["kitchenscene_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fosterfilter = function() {
	this.spriteSheet = ss["kitchenscene_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.textbox = function() {
	this.spriteSheet = ss["kitchenscene_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.torin = function() {
	this.spriteSheet = ss["kitchenscene_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.torinfilter = function() {
	this.spriteSheet = ss["kitchenscene_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.TORINNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.torinfilter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TORINNEW, new cjs.Rectangle(0,0,854,480), null);


(lib.torinexit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.torin();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.torinexit, new cjs.Rectangle(0,0,854,480), null);


(lib.RPGText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("CLICK", "16px 'Arial'", "#333333");
	this.txt.name = "txt";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 375;
	this.txt.parent = this;
	this.txt.setTransform(251,21.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// box
	this.instance = new lib.textbox();
	this.instance.parent = this;
	this.instance.setTransform(0,-323);

	this.instance_1 = new lib.textbox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-169,0,1.22,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RPGText, new cjs.Rectangle(-169,-323,1042.2,803), null);


(lib.FILTERNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fosterfilter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FILTERNEW, new cjs.Rectangle(0,0,854,480), null);


(lib.TORIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fadeIn:1,fadeOut:18,exit:33});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(15).call(this.frame_32).wait(16).call(this.frame_48).wait(1));

	// filter
	this.filter = new lib.TORINNEW();
	this.filter.name = "filter";
	this.filter.parent = this;
	this.filter.setTransform(411,207,1,1,0,0,0,427,240);
	this.filter.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.filter).wait(1).to({alpha:0},16).wait(1).to({alpha:0.602},14).to({_off:true},1).wait(16));

	// base
	this.instance = new lib.torin();
	this.instance.parent = this;
	this.instance.setTransform(-16,-33);

	this.TorinExit = new lib.torinexit();
	this.TorinExit.name = "TorinExit";
	this.TorinExit.parent = this;
	this.TorinExit.setTransform(411,207,1,1,0,0,0,427,240);
	this.TorinExit._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.TorinExit}]},33).to({state:[{t:this.TorinExit}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.TorinExit).wait(33).to({_off:false},0).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-33,854,480);


(lib.FOSTER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fadeIn":1,"fadeOut":17});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(16).call(this.frame_32).wait(1));

	// filter
	this.filter = new lib.FILTERNEW();
	this.filter.name = "filter";
	this.filter.parent = this;
	this.filter.setTransform(-198,218,1,1,0,0,0,427,240);
	this.filter.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.filter).wait(1).to({alpha:0},15).wait(1).to({alpha:0.602},15).wait(1));

	// base
	this.instance = new lib.foster();
	this.instance.parent = this;
	this.instance.setTransform(-625,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-625,-22,854,480);


// stage content:
(lib.kitchenscene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		var bgmusic = createjs.Sound.play("bgsound", {loop:10});
		bgmusic.volume = 0.7;
		
		
		//bgmusic.on("loop", handleLoop);
		//function handleLoop(event) {
		//	bgmusic.volume = bgmusic.volume * 0.5;
		//}
		
		
		//this.rpgText.txt.text = "Yay, this works!!";
				
		//nested/multidimensional array (an array within an array)
		var textBlocks = [
				["Foster Dad In", 	"I'm sorry Torin, but we can't afford a booster board right now"],
				["Torin In", 	    "What do you mean!?"],
				["Torin",           "All the other kids are getting one"],
				["Torin",           "You're always telling me that I need to get involved in something...to do something constructive"],
				["Foster Dad In", 	"What about joining the baseball team? I did that when I was your age"],
				["Foster",          "Also, how's school going? You making friends?"],
				["Torin In", 	    "School's dumb! I hate it"],
				["Foster Dad In", 	"Now Torin, don't say that"],
				["Foster",          "Don't you want to grow up well educated and having friends?"],
				["Torin In", 	    "NO! I don't want to grow up to be a boring adult!"],
				["Torin",           "Why can't I fly like the other kids? . . . . . . I never get anything I want"],
				["Foster Dad In", 	". . . I'm sorry Torin, but the answer is no"],
				["Foster",          "We just don't have the money"],
				["Torin In", 	    "Fine! I'll just get it myself then"],
				["Torin Exit",      "Torin wait..."],
				["Foster",          "*Sigh* he's already gone"],
									];
		
		//using constants because Speaker will always be in the first index. Text will be 2nd
		const SPEAKER = 0;
		const TEXT = 1;
		//defining variables that will be used within my text functions
		var currentTextBlockIndex = 0; //starting the index off at 0
		var currentTextBlockString;
		var currentTextBlock;
		
		//this.addEventListener(MouseEvent.CLICK, startText)??
		addEventListener("click", nextTextBlock);
		
		/*
		function startText() {
			removeEventListener("click", startText);
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT];
			console.log("clicky?")
			//characterIcon.gotoAndStop(textBlocks[currentTextBlockIndex][SPEAKER]);
			addEventListener("click", nextTextBlock);
			return currentTextBlock
			//this code is only run through at the beginning
		}
		*/		
		//this.rpgText.txt.text = startText();
		
		//function updateText() {
		//	this.rpgText.txt.text = startText();
		//		//removeEventListener(MouseEvent.CLICK, updateText);
		//	}
		//this.rpgText.txt.text = startText();
		//need to put this in a function that only goes from a button press
		//does not just happen automatically
		var root = this;
				
		function nextTextBlock() {	
			console.log("nextTextBlock() was called");
			
			
		 if(textBlocks[currentTextBlockIndex][SPEAKER] == "Foster Dad In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.foster.gotoAndPlay("fadeIn");
		root.torin.gotoAndPlay("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Torin In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.torin.gotoAndPlay("fadeIn");
		root.foster.gotoAndPlay("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Torin Exit"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.torin.gotoAndPlay("exit");
		root.foster.gotoAndPlay("fadeIn");
		
		}
		}
			
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT]; // set the text
			//create timer to print text letter by letter
			var idx = 0;
			var string = "";
			var timerFunctionReference = setInterval(letterByLetter ,50);
		
			
			function letterByLetter() {
				string += currentTextBlock[idx++];
				var typewriter = createjs.Sound.play("typewritersound");
				typewriter.on("complete", this.handleComplete, this);
				typewriter.volume = 1;
				if(string.length > 0) removeEventListener("click", nextTextBlock);
				if(idx >= currentTextBlock.length){ clearInterval(timerFunctionReference);
				addEventListener("click", nextTextBlock);}
				console.log(string);
				updateText(string);
			}
			console.log(currentTextBlock)
			currentTextBlockIndex++; //increases the index by 1
			if(currentTextBlockIndex >= textBlocks.length){ 
				currentTextBlockIndex = 0; 
					}	
			//addEventListener("click", nextTextBlock);
			if(string.length == currentTextBlock.length) addEventListener("click", nextTextBlock);
			return currentTextBlock;
				}
		console.log(currentTextBlockIndex);
		
				
		rt = this.rpgText;
		function updateText(msg){
			rt.txt.text = msg;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// torinlayer
	this.torin = new lib.TORIN();
	this.torin.name = "torin";
	this.torin.parent = this;
	this.torin.setTransform(123.5,236,1,1,0,0,0,110,202.5);

	this.timeline.addTween(cjs.Tween.get(this.torin).wait(1));

	// fosterlayer
	this.foster = new lib.FOSTER();
	this.foster.name = "foster";
	this.foster.parent = this;
	this.foster.setTransform(730,233.5,1,1,0,0,0,105,211.5);

	this.timeline.addTween(cjs.Tween.get(this.foster).wait(1));

	// boxlayer
	this.rpgText = new lib.RPGText();
	this.rpgText.name = "rpgText";
	this.rpgText.parent = this;
	this.rpgText.setTransform(350.1,398.1,1,1,0,0,0,350,75);

	this.timeline.addTween(cjs.Tween.get(this.rpgText).wait(1));

	// bg
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.1,240,1042.2,803.1);
// library properties:
lib.properties = {
	id: '4152B7DF1D449A45940510BAD34B3D7B',
	width: 854,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/kitchenscene_atlas_.png", id:"kitchenscene_atlas_"},
		{src:"sounds/bgsound.mp3", id:"bgsound"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/typewritersound.mp3", id:"typewritersound"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4152B7DF1D449A45940510BAD34B3D7B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
