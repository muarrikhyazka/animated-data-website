(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BPS Datastory _ Monas mini_atlas_1", frames: [[574,0,206,99],[334,0,238,114],[0,967,915,147],[0,0,332,965]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["BPS Datastory _ Monas mini_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["BPS Datastory _ Monas mini_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8441,2682);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1440);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["BPS Datastory _ Monas mini_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["BPS Datastory _ Monas mini_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,103,49.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,119,57), null);


(lib.Bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(2880,623.925);

	// Layer_3
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.4999,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg2, new cjs.Rectangle(1920,84,1920,1079.9), null);


(lib.Sharkright = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-529.55,28.5,1,1,0,0,0,59.5,28.5);

	
	var _tweenStr_0 = cjs.Tween.get(this.instance).wait(1).to({x:-520.6},0).wait(1).to({x:-511.7},0).wait(1).to({x:-502.8},0).wait(1).to({x:-493.9},0).wait(1).to({x:-485},0).wait(1).to({x:-476.1},0).wait(1).to({x:-467.2},0).wait(1).to({x:-458.3},0).wait(1).to({x:-449.4},0).wait(1).to({x:-440.45},0).wait(1).to({x:-431.55},0).wait(1).to({x:-422.65},0).wait(1).to({x:-413.75},0).wait(1).to({x:-404.85},0).wait(1).to({x:-395.95},0).wait(1).to({x:-387.05},0).wait(1).to({x:-378.15},0).wait(1).to({x:-369.25},0).wait(1).to({x:-360.35},0).wait(1).to({x:-351.4},0).wait(1).to({x:-342.5},0).wait(1).to({x:-333.6},0).wait(1).to({x:-324.7},0).wait(1).to({x:-315.8},0).wait(1).to({x:-306.9},0).wait(1).to({x:-298},0).wait(1).to({x:-289.1},0).wait(1).to({x:-280.2},0).wait(1).to({x:-271.3},0).wait(1).to({x:-262.35},0).wait(1).to({x:-253.45},0).wait(1).to({x:-244.55},0).wait(1).to({x:-235.65},0).wait(1).to({x:-226.75},0).wait(1).to({x:-217.85},0).wait(1).to({x:-208.95},0).wait(1).to({x:-200.05},0).wait(1).to({x:-191.15},0).wait(1).to({x:-182.25},0).wait(1).to({x:-173.3},0).wait(1).to({x:-164.4},0).wait(1).to({x:-155.5},0).wait(1).to({x:-146.6},0).wait(1).to({x:-137.7},0).wait(1).to({x:-128.8},0).wait(1).to({x:-119.9},0).wait(1).to({x:-111},0).wait(1).to({x:-102.1},0).wait(1).to({x:-93.2},0).wait(1).to({x:-84.25},0).wait(1).to({x:-75.35},0).wait(1).to({x:-66.45},0).wait(1).to({x:-57.55},0).wait(1).to({x:-48.65},0).wait(1).to({x:-39.75},0).wait(1).to({x:-30.85},0).wait(1).to({x:-21.95},0).wait(1).to({x:-13.05},0).wait(1).to({x:-4.15},0).wait(1).to({x:4.8},0).wait(1).to({x:13.7},0).wait(1).to({x:22.6},0).wait(1).to({x:31.5},0).wait(1).to({x:40.4},0).wait(1).to({x:49.3},0).wait(1).to({x:58.2},0).wait(1).to({x:67.05},0).wait(1).to({x:75.95},0).wait(1).to({x:84.85},0).wait(1).to({x:93.8},0).wait(1).to({x:102.7},0).wait(1).to({x:111.6},0).wait(1).to({x:120.5},0).wait(1).to({x:129.4},0).wait(1).to({x:138.3},0).wait(1).to({x:147.2},0).wait(1).to({x:156.1},0).wait(1).to({x:165},0).wait(1).to({x:173.9},0).wait(1).to({x:182.85},0).wait(1).to({x:191.75},0).wait(1).to({x:200.65},0).wait(1).to({x:209.55},0).wait(1).to({x:218.45},0).wait(1).to({x:227.35},0).wait(1).to({x:236.25},0).wait(1).to({x:245.15},0).wait(1).to({x:254.05},0).wait(1).to({x:262.95},0).wait(1).to({x:271.9},0).wait(1).to({x:280.8},0).wait(1).to({x:289.7},0).wait(1).to({x:298.6},0).wait(1).to({x:307.5},0).wait(1).to({x:316.4},0).wait(1).to({x:325.3},0).wait(1).to({x:334.2},0).wait(1).to({x:343.1},0).wait(1).to({x:352},0).wait(1).to({x:360.95},0).wait(1).to({x:369.85},0).wait(1).to({x:378.75},0).wait(1).to({x:387.65},0).wait(1).to({x:396.55},0).wait(1).to({x:405.45},0).wait(1).to({x:414.35},0).wait(1).to({x:423.25},0).wait(1).to({x:432.15},0).wait(1).to({x:441.05},0).wait(1).to({x:450},0).wait(1).to({x:458.9},0).wait(1).to({x:467.8},0).wait(1).to({x:476.7},0).wait(1).to({x:485.6},0).wait(1).to({x:494.5},0).wait(1).to({x:503.4},0).wait(1).to({x:512.3},0).wait(1).to({x:521.2},0).wait(1).to({x:530.1},0).wait(1).to({x:539.05},0).wait(1).to({x:547.95},0).wait(1).to({x:556.85},0).wait(1).to({x:565.75},0).wait(1).to({x:574.65},0).wait(1).to({x:583.55},0).wait(1).to({x:592.45},0).wait(1).to({x:601.35},0).wait(1).to({x:610.25},0).wait(1).to({x:619.15},0).wait(1).to({x:628.1},0).wait(1).to({x:637},0).wait(1).to({x:645.9},0).wait(1).to({x:654.8},0).wait(1).to({x:663.7},0).wait(1).to({x:672.6},0).wait(1).to({x:681.5},0).wait(1).to({x:690.4},0).wait(1).to({x:699.3},0).wait(1).to({x:708.2},0).wait(1).to({x:717.15},0).wait(1).to({x:726.05},0).wait(1).to({x:734.95},0).wait(1).to({x:743.85},0).wait(1).to({x:752.75},0).wait(1).to({x:761.65},0).wait(1).to({x:770.55},0).wait(1).to({x:779.45},0).wait(1).to({x:788.35},0).wait(1).to({x:797.25},0).wait(1).to({x:806.2},0).wait(1).to({x:815.1},0).wait(1).to({x:824},0).wait(1).to({x:832.9},0).wait(1).to({x:841.8},0).wait(1).to({x:850.7},0).wait(1).to({x:859.6},0).wait(1).to({x:868.5},0).wait(1).to({x:877.4},0).wait(1).to({x:886.3},0).wait(1).to({x:895.25},0).wait(1).to({x:904.15},0).wait(1).to({x:913.05},0).wait(1).to({x:921.95},0).wait(1).to({x:930.85},0).wait(1).to({x:939.75},0).wait(1).to({x:948.65},0).wait(1).to({x:957.55},0).wait(1).to({x:966.45},0).wait(1).to({x:975.35},0).wait(1).to({x:984.3},0).wait(1).to({x:993.2},0).wait(1).to({x:1002.1},0).wait(1).to({x:1011},0).wait(1).to({x:1019.9},0).wait(1).to({x:1028.8},0).wait(1).to({x:1037.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1055.5},0).wait(1).to({x:1064.4},0).wait(1).to({x:1073.35},0).wait(1).to({x:1082.25},0).wait(1).to({x:1091.15},0).wait(1).to({x:1100.05},0).wait(1).to({x:1108.95},0).wait(1).to({x:1117.85},0).wait(1).to({x:1126.75},0).wait(1).to({x:1135.65},0).wait(1).to({x:1144.55},0).wait(1).to({x:1153.45},0).wait(1).to({x:1162.4},0).wait(1).to({x:1171.3},0).wait(1).to({x:1180.2},0).wait(1).to({x:1189.1},0).wait(1).to({x:1198},0).wait(1).to({x:1206.9},0).wait(1).to({x:1215.8},0).wait(1).to({x:1224.7},0).wait(1).to({x:1233.6},0).wait(1).to({x:1242.5},0).wait(1).to({x:1251.45},0).wait(1).to({x:1260.35},0).wait(1).to({x:1269.25},0).wait(1).to({x:1278.15},0).wait(1).to({x:1287.05},0).wait(1).to({x:1295.95},0).wait(1).to({x:1304.85},0).wait(1).to({x:1313.75},0).wait(1).to({x:1322.65},0).wait(1).to({x:1331.55},0).wait(1).to({x:1340.5},0).wait(1).to({x:1349.4},0).wait(1).to({x:1358.3},0).wait(1).to({x:1367.2},0).wait(1).to({x:1376.1},0).wait(1).to({x:1385},0).wait(1).to({x:1393.9},0).wait(1).to({x:1402.8},0).wait(1).to({x:1411.7},0).wait(1).to({x:1420.6},0).wait(1).to({x:1429.55},0).wait(1).to({x:1438.45},0).wait(1).to({x:1447.35},0).wait(1).to({x:1456.25},0).wait(1).to({x:1465.15},0).wait(1).to({x:1474.05},0).wait(1).to({x:1482.95},0).wait(1).to({x:1491.85},0).wait(1).to({x:1500.75},0).wait(1).to({x:1509.65},0).wait(1).to({x:1518.6},0).wait(1).to({x:1527.5},0).wait(1).to({x:1536.4},0).wait(1).to({x:1545.3},0).wait(1).to({x:1554.2},0).wait(1).to({x:1563.1},0).wait(1).to({x:1572},0).wait(1).to({x:1580.9},0).wait(1).to({x:1589.8},0).wait(1).to({x:1598.7},0).wait(1).to({x:1607.65},0).wait(1).to({x:1616.55},0).wait(1).to({x:1625.45},0).wait(1).to({x:1634.35},0).wait(1).to({x:1643.25},0).wait(1).to({x:1652.15},0).wait(1).to({x:1661.05},0).wait(1).to({x:1669.95},0).wait(1).to({x:1678.85},0).wait(1).to({x:1687.75},0).wait(1).to({x:1696.7},0).wait(1).to({x:1705.6},0).wait(1).to({x:1714.5},0).wait(1).to({x:1723.4},0).wait(1).to({x:1732.3},0).wait(1).to({x:1741.2},0).wait(1).to({x:1750.1},0).wait(1).to({x:1759},0).wait(1).to({x:1767.9},0).wait(1).to({x:1776.8},0).wait(1).to({x:1785.75},0).wait(1).to({x:1794.65},0).wait(1).to({x:1803.55},0).wait(1).to({x:1812.45},0).wait(1).to({x:1821.35},0).wait(1).to({x:1830.25},0).wait(1).to({x:1839.15},0).wait(1).to({x:1848.05},0).wait(1).to({x:1856.95},0).wait(1).to({x:1865.85},0).wait(1).to({x:1874.8},0).wait(1).to({x:1883.7},0).wait(1).to({x:1892.6},0).wait(1).to({x:1901.5},0).wait(1).to({x:1910.4},0).wait(1).to({x:1919.3},0).wait(1).to({x:1928.2},0).wait(1).to({x:1937.1},0).wait(1).to({x:1946},0).wait(1).to({x:1954.9},0).wait(1).to({x:1963.85},0).wait(1).to({x:1972.75},0).wait(1).to({x:1981.65},0).wait(1).to({x:1990.55},0).wait(1).to({x:1999.45},0).wait(1).to({x:2008.35},0).wait(1).to({x:2017.25},0).wait(1).to({x:2026.15},0).wait(1).to({x:2035.05},0).wait(1).to({x:2043.95},0).wait(1).to({x:2052.9},0).wait(1).to({x:2061.8},0).wait(1).to({x:2070.7},0).wait(1).to({x:2079.6},0).wait(1).to({x:2088.5},0).wait(1).to({x:2097.4},0).wait(1).to({x:2106.3},0).wait(1).to({x:2115.2},0).wait(1).to({x:2124.1},0).wait(1).to({x:2133},0).wait(1).to({x:2141.95},0).wait(1).to({x:2150.85},0).wait(1).to({x:2159.75},0).wait(1).to({x:2168.65},0).wait(1).to({x:2177.55},0).wait(1).to({x:2186.45},0).wait(1).to({x:2195.35},0).wait(1).to({x:2204.25},0).wait(1).to({x:2213.15},0).wait(1).to({x:2222.05},0).wait(1).to({x:2231},0).wait(1).to({x:2239.9},0).wait(1).to({x:2248.8},0).wait(1).to({x:2257.7},0).wait(1).to({x:2266.6},0).wait(1).to({x:2275.5},0).wait(1).to({x:2284.4},0).wait(1).to({x:2293.3},0).wait(1).to({x:2302.2},0).wait(1).to({x:2311.1},0).wait(1).to({x:2320.05},0).wait(1).to({x:2328.95},0).wait(1).to({x:2337.85},0).wait(1).to({x:2346.75},0).wait(1).to({x:2355.65},0).wait(1).to({x:2364.55},0).wait(1).to({x:2373.45},0).wait(1).to({x:2382.35},0).wait(1).to({x:2391.25},0).wait(1).to({x:2400.15},0).wait(1).to({x:2409.1},0).wait(1).to({x:2418},0).wait(1).to({x:2426.9},0).wait(1).to({x:2435.8},0).wait(1).to({x:2444.7},0).wait(1).to({x:2453.6},0).wait(1).to({x:2462.5},0).wait(1).to({x:2471.4},0).wait(1).to({x:2480.3},0).wait(1).to({x:2489.2},0).wait(1).to({x:2498.15},0).wait(1).to({x:2507.05},0).wait(1).to({x:2515.95},0).wait(1).to({x:2524.85},0).wait(1).to({x:2533.75},0).wait(1).to({x:2542.65},0).wait(1).to({x:2551.55},0).wait(1).to({x:2560.45},0).wait(1).to({x:2569.35},0).wait(1).to({x:2578.25},0).wait(1).to({x:2587.2},0).wait(1).to({x:2596.1},0).wait(1).to({x:2605},0).wait(1).to({x:2613.9},0).wait(1).to({x:2622.8},0).wait(1).to({x:2631.7},0).wait(1).to({x:2640.6},0).wait(1).to({x:2649.5},0).wait(1).to({x:2658.4},0).wait(1).to({x:2667.3},0).wait(1).to({x:2676.25},0).wait(1).to({x:2685.15},0).wait(1).to({x:2694.05},0).wait(1).to({x:2702.95},0).wait(1).to({x:2711.85},0).wait(1).to({x:2720.75},0).wait(1).to({x:2729.65},0).wait(1).to({x:2738.55},0).wait(1).to({x:2747.45},0).wait(1).to({x:2756.35},0).wait(1).to({x:2765.3},0).wait(1).to({x:2774.2},0).wait(1).to({x:2783.1},0).wait(1).to({x:2792},0).wait(1).to({x:2800.9},0).wait(1).to({x:2809.8},0).wait(1).to({x:2818.7},0).wait(1).to({x:2827.6},0).wait(1).to({x:2836.5},0).wait(1).to({x:2845.4},0).wait(1).to({x:2854.35},0).wait(1).to({x:2863.25},0).wait(1).to({x:2872.15},0).wait(1).to({x:2881.05},0).wait(1).to({x:2889.95},0).wait(1).to({x:2898.85},0).wait(1).to({x:2907.75},0).wait(1).to({x:2916.65},0).wait(1).to({x:2925.55},0).wait(1).to({x:2934.45},0).wait(1).to({x:2943.4},0).wait(1).to({x:2952.3},0).wait(1).to({x:2961.2},0).wait(1).to({x:2970.1},0).wait(1).to({x:2979},0).wait(1).to({x:2987.9},0).wait(1).to({x:2996.8},0).wait(1).to({x:3005.7},0).wait(1).to({x:3014.6},0).wait(1);
	this.timeline.addTween(_tweenStr_0.to({x:3023.5},0).wait(1).to({x:3032.45},0).wait(1).to({x:3041.35},0).wait(1).to({x:3050.25},0).wait(1).to({x:3059.15},0).wait(1).to({x:3068.05},0).wait(1).to({x:3076.95},0).wait(1).to({x:3085.85},0).wait(1).to({x:3094.75},0).wait(1).to({x:3103.65},0).wait(1).to({x:3112.55},0).wait(1).to({x:3121.5},0).wait(1).to({x:3130.4},0).wait(1).to({x:3139.3},0).wait(1).to({x:3148.2},0).wait(1).to({x:3157.1},0).wait(1).to({x:3166},0).wait(1).to({x:3174.9},0).wait(1).to({x:3183.8},0).wait(1).to({x:3192.7},0).wait(1).to({x:3201.6},0).wait(1).to({x:3210.55},0).wait(1).to({x:3219.45},0).wait(1).to({x:3228.35},0).wait(1).to({x:3237.25},0).wait(1).to({x:3246.15},0).wait(1).to({x:3255.05},0).wait(1).to({x:3263.95},0).wait(1).to({x:3272.85},0).wait(1).to({x:3281.75},0).wait(1).to({x:3290.65},0).wait(1).to({x:3299.6},0).wait(1).to({x:3308.5},0).wait(1).to({x:3317.4},0).wait(1).to({x:3326.3},0).wait(1).to({x:3335.2},0).wait(1).to({x:3344.1},0).wait(1).to({x:3353},0).wait(1).to({x:3361.9},0).wait(1).to({x:3370.8},0).wait(1).to({x:3379.7},0).wait(1).to({x:3388.65},0).wait(1).to({x:3397.55},0).wait(1).to({x:3406.45},0).wait(1).to({x:3415.35},0).wait(1).to({x:3424.25},0).wait(1).to({x:3433.15},0).wait(1).to({x:3442.05},0).wait(1).to({x:3450.95},0).wait(1).to({x:3459.85},0).wait(1).to({x:3468.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,0,4117.3,57);


(lib.Sharkleft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(3797.3,-17.8,1,1,0,0,0,51.5,24.7);

	
	var _tweenStr_1 = cjs.Tween.get(this.instance).wait(1).to({regY:24.8,x:3796.7,y:-17.75},0).wait(1).to({x:3796,y:-17.8},0).wait(1).to({x:3795.15,y:-17.85},0).wait(1).to({x:3794.25,y:-17.9},0).wait(1).to({x:3793.2,y:-17.95},0).wait(1).to({x:3792.05,y:-18},0).wait(1).to({x:3790.8,y:-18.05},0).wait(1).to({x:3789.45,y:-18.1},0).wait(1).to({x:3787.95,y:-18.15},0).wait(1).to({x:3786.4,y:-18.2},0).wait(1).to({x:3784.7,y:-18.25},0).wait(1).to({x:3782.9,y:-18.3},0).wait(1).to({x:3781.05,y:-18.35},0).wait(1).to({x:3779,y:-18.4},0).wait(1).to({x:3776.9,y:-18.45},0).wait(1).to({x:3774.7,y:-18.5},0).wait(1).to({x:3772.4,y:-18.55},0).wait(1).to({x:3770,y:-18.6},0).wait(1).to({x:3767.45},0).wait(1).to({x:3764.85,y:-18.65},0).wait(1).to({x:3762.1,y:-18.7},0).wait(1).to({x:3759.3,y:-18.75},0).wait(1).to({x:3756.35,y:-18.8},0).wait(1).to({x:3753.35,y:-18.85},0).wait(1).to({x:3750.2,y:-18.9},0).wait(1).to({x:3747,y:-18.95},0).wait(1).to({x:3743.65,y:-19},0).wait(1).to({x:3740.25,y:-19.05},0).wait(1).to({x:3736.7},0).wait(1).to({x:3733.1,y:-19.1},0).wait(1).to({x:3729.4,y:-19.15},0).wait(1).to({x:3725.6,y:-19.2},0).wait(1).to({x:3721.65,y:-19.25},0).wait(1).to({x:3717.65,y:-19.3},0).wait(1).to({x:3713.6,y:-19.35},0).wait(1).to({x:3709.4},0).wait(1).to({x:3705.1,y:-19.4},0).wait(1).to({x:3700.75,y:-19.45},0).wait(1).to({x:3696.25,y:-19.5},0).wait(1).to({x:3691.7,y:-19.55},0).wait(1).to({x:3687.05},0).wait(1).to({x:3682.3,y:-19.6},0).wait(1).to({x:3677.45,y:-19.65},0).wait(1).to({x:3672.55,y:-19.7},0).wait(1).to({x:3667.5},0).wait(1).to({x:3662.4,y:-19.75},0).wait(1).to({x:3657.2,y:-19.8},0).wait(1).to({x:3651.95,y:-19.85},0).wait(1).to({x:3646.55},0).wait(1).to({x:3641.1,y:-19.9},0).wait(1).to({x:3635.55,y:-19.95},0).wait(1).to({x:3629.95,y:-20},0).wait(1).to({x:3624.25},0).wait(1).to({x:3618.45,y:-20.05},0).wait(1).to({x:3612.55,y:-20.1},0).wait(1).to({x:3606.55},0).wait(1).to({x:3600.5,y:-20.15},0).wait(1).to({x:3594.4,y:-20.2},0).wait(1).to({x:3588.15},0).wait(1).to({x:3581.85,y:-20.25},0).wait(1).to({x:3575.5,y:-20.3},0).wait(1).to({x:3569},0).wait(1).to({x:3562.45,y:-20.35},0).wait(1).to({x:3555.85,y:-20.4},0).wait(1).to({x:3549.15},0).wait(1).to({x:3542.35,y:-20.45},0).wait(1).to({x:3535.5,y:-20.5},0).wait(1).to({x:3528.55},0).wait(1).to({x:3521.55,y:-20.55},0).wait(1).to({x:3514.45},0).wait(1).to({x:3507.25,y:-20.6},0).wait(1).to({x:3500,y:-20.65},0).wait(1).to({x:3492.7},0).wait(1).to({x:3485.3,y:-20.7},0).wait(1).to({x:3477.8},0).wait(1).to({x:3470.25,y:-20.75},0).wait(1).to({x:3462.65},0).wait(1).to({x:3454.95,y:-20.8},0).wait(1).to({x:3447.15,y:-20.85},0).wait(1).to({x:3439.35},0).wait(1).to({x:3431.4,y:-20.9},0).wait(1).to({x:3423.45},0).wait(1).to({x:3415.35,y:-20.95},0).wait(1).to({x:3407.25},0).wait(1).to({x:3399.05,y:-21},0).wait(1).to({x:3390.8},0).wait(1).to({x:3382.45,y:-21.05},0).wait(1).to({x:3374.05},0).wait(1).to({x:3365.6,y:-21.1},0).wait(1).to({x:3357.05},0).wait(1).to({x:3348.45,y:-21.15},0).wait(1).to({x:3339.75},0).wait(1).to({x:3331.05,y:-21.2},0).wait(1).to({x:3322.25},0).wait(1).to({x:3313.35},0).wait(1).to({x:3304.45,y:-21.25},0).wait(1).to({x:3295.45},0).wait(1).to({x:3286.4,y:-21.3},0).wait(1).to({x:3277.25},0).wait(1).to({x:3268.1,y:-21.35},0).wait(1).to({x:3258.85},0).wait(1).to({x:3249.55},0).wait(1).to({x:3240.15,y:-21.4},0).wait(1).to({x:3230.75},0).wait(1).to({x:3221.25,y:-21.45},0).wait(1).to({x:3211.7},0).wait(1).to({x:3202.1},0).wait(1).to({x:3192.45,y:-21.5},0).wait(1).to({x:3182.7},0).wait(1).to({x:3172.95},0).wait(1).to({x:3163.1,y:-21.55},0).wait(1).to({x:3153.2},0).wait(1).to({x:3143.25},0).wait(1).to({x:3133.25,y:-21.6},0).wait(1).to({x:3123.2},0).wait(1).to({x:3113.1},0).wait(1).to({x:3102.9,y:-21.65},0).wait(1).to({x:3092.7},0).wait(1).to({x:3082.45},0).wait(1).to({x:3072.1,y:-21.7},0).wait(1).to({x:3061.75},0).wait(1).to({x:3051.3},0).wait(1).to({x:3040.85,y:-21.75},0).wait(1).to({x:3030.3},0).wait(1).to({x:3019.7},0).wait(1).to({x:3009.1},0).wait(1).to({x:2998.4,y:-21.8},0).wait(1).to({x:2987.7},0).wait(1).to({x:2976.9},0).wait(1).to({x:2966.1},0).wait(1).to({x:2955.2,y:-21.85},0).wait(1).to({x:2944.3},0).wait(1).to({x:2933.35},0).wait(1).to({x:2922.35},0).wait(1).to({x:2911.3,y:-21.9},0).wait(1).to({x:2900.2},0).wait(1).to({x:2889.05},0).wait(1).to({x:2877.9},0).wait(1).to({x:2866.65},0).wait(1).to({x:2855.4,y:-21.95},0).wait(1).to({x:2844.05},0).wait(1).to({x:2832.7},0).wait(1).to({x:2821.35},0).wait(1).to({x:2809.9},0).wait(1).to({x:2798.45},0).wait(1).to({x:2786.9,y:-22},0).wait(1).to({x:2775.35},0).wait(1).to({x:2763.75},0).wait(1).to({x:2752.15},0).wait(1).to({x:2740.5},0).wait(1).to({x:2728.8},0).wait(1).to({x:2717.05},0).wait(1).to({x:2705.25},0).wait(1).to({x:2693.45,y:-22.05},0).wait(1).to({x:2681.6},0).wait(1).to({x:2669.75},0).wait(1).to({x:2657.8},0).wait(1).to({x:2645.85},0).wait(1).to({x:2633.9},0).wait(1).to({x:2621.9},0).wait(1).to({x:2609.85},0).wait(1).to({x:2597.75},0).wait(1).to({x:2585.65},0).wait(1).to({x:2573.5},0).wait(1).to({x:2561.35},0).wait(1).to({x:2549.15},0).wait(1).to({x:2536.9,y:-22.1},0).wait(1).to({x:2524.65},0).wait(1).to({x:2512.4},0).wait(1).to({x:2500.05},0).wait(1).to({x:2487.75},0).wait(1).to({x:2475.35},0).wait(1).to({x:2463},0).wait(1).to({x:2450.55},0).wait(1).to({x:2438.1},0).wait(1).to({x:2425.65},0).wait(1).to({x:2413.15},0).wait(1).to({x:2400.65},0).wait(1).to({x:2388.1},0).wait(1).to({x:2375.55},0).wait(1).to({x:2363},0).wait(1).to({x:2350.4,y:-22.05},0).wait(1).to({x:2337.75},0).wait(1).to({x:2325.1},0).wait(1).to({x:2312.45},0).wait(1).to({x:2299.75},0).wait(1).to({x:2287.05},0).wait(1).to({x:2274.35},0).wait(1).to({x:2261.6},0).wait(1).to({x:2248.85},0).wait(1).to({x:2236.05},0).wait(1).to({x:2223.25},0).wait(1).to({x:2210.45},0).wait(1).to({x:2197.65},0).wait(1).to({x:2184.8},0).wait(1).to({x:2171.95,y:-22},0).wait(1).to({x:2159.1},0).wait(1).to({x:2146.2},0).wait(1).to({x:2133.3},0).wait(1).to({x:2120.4},0).wait(1).to({x:2107.45},0).wait(1).to({x:2094.55},0).wait(1).to({x:2081.6},0).wait(1).to({x:2068.65,y:-21.95},0).wait(1).to({x:2055.7},0).wait(1).to({x:2042.7},0).wait(1).to({x:2029.75},0).wait(1).to({x:2016.75},0).wait(1).to({x:2003.75},0).wait(1).to({x:1990.75,y:-21.9},0).wait(1).to({x:1977.7},0).wait(1).to({x:1964.7},0).wait(1).to({x:1951.65},0).wait(1).to({x:1938.65},0).wait(1).to({x:1925.6,y:-21.85},0).wait(1).to({x:1912.55},0).wait(1).to({x:1899.5},0).wait(1).to({x:1886.45},0).wait(1).to({x:1873.4},0).wait(1).to({x:1860.35,y:-21.8},0).wait(1).to({x:1847.3},0).wait(1).to({x:1834.2},0).wait(1).to({x:1821.15},0).wait(1).to({x:1808.1,y:-21.75},0).wait(1).to({x:1795},0).wait(1).to({x:1781.95},0).wait(1).to({x:1768.9},0).wait(1).to({x:1755.85,y:-21.7},0).wait(1).to({x:1742.75},0).wait(1).to({x:1729.7},0).wait(1).to({x:1716.65},0).wait(1).to({x:1703.6,y:-21.65},0).wait(1).to({x:1690.55},0).wait(1).to({x:1677.5},0).wait(1).to({x:1664.45,y:-21.6},0).wait(1).to({x:1651.45},0).wait(1).to({x:1638.4},0).wait(1).to({x:1625.4,y:-21.55},0).wait(1).to({x:1612.35},0).wait(1).to({x:1599.35},0).wait(1).to({x:1586.35,y:-21.5},0).wait(1).to({x:1573.35},0).wait(1).to({x:1560.35},0).wait(1).to({x:1547.4,y:-21.45},0).wait(1).to({x:1534.45},0).wait(1).to({x:1521.45},0).wait(1).to({x:1508.5,y:-21.4},0).wait(1).to({x:1495.6},0).wait(1).to({x:1482.65},0).wait(1).to({x:1469.75,y:-21.35},0).wait(1).to({x:1456.85},0).wait(1).to({x:1443.95},0).wait(1).to({x:1431.1,y:-21.3},0).wait(1).to({x:1418.25},0).wait(1).to({x:1405.4,y:-21.25},0).wait(1).to({x:1392.55},0).wait(1).to({x:1379.75},0).wait(1).to({x:1366.95,y:-21.2},0).wait(1).to({x:1354.15},0).wait(1).to({x:1341.4,y:-21.15},0).wait(1).to({x:1328.65},0).wait(1).to({x:1315.95},0).wait(1).to({x:1303.2,y:-21.1},0).wait(1).to({x:1290.55},0).wait(1).to({x:1277.85,y:-21.05},0).wait(1).to({x:1265.2},0).wait(1).to({x:1252.55,y:-21},0).wait(1).to({x:1239.95},0).wait(1).to({x:1227.35},0).wait(1).to({x:1214.8,y:-20.95},0).wait(1).to({x:1202.25},0).wait(1).to({x:1189.75,y:-20.9},0).wait(1).to({x:1177.25},0).wait(1).to({x:1164.75,y:-20.85},0).wait(1).to({x:1152.3},0).wait(1).to({x:1139.9,y:-20.8},0).wait(1).to({x:1127.5},0).wait(1).to({x:1115.1,y:-20.75},0).wait(1).to({x:1102.75},0).wait(1).to({x:1090.45,y:-20.7},0).wait(1).to({x:1078.15},0).wait(1).to({x:1065.9,y:-20.65},0).wait(1).to({x:1053.65},0).wait(1).to({x:1041.45,y:-20.6},0).wait(1).to({x:1029.25},0).wait(1).to({x:1017.1,y:-20.55},0).wait(1).to({x:1005},0).wait(1).to({x:992.9,y:-20.5},0).wait(1).to({x:980.85},0).wait(1).to({x:968.85,y:-20.45},0).wait(1).to({x:956.85},0).wait(1).to({x:944.9,y:-20.4},0).wait(1).to({x:932.95},0).wait(1).to({x:921.05,y:-20.35},0).wait(1).to({x:909.2,y:-20.3},0).wait(1).to({x:897.4},0).wait(1).to({x:885.6,y:-20.25},0).wait(1).to({x:873.85},0).wait(1).to({x:862.15,y:-20.2},0).wait(1).to({x:850.45},0).wait(1).to({x:838.8,y:-20.15},0).wait(1).to({x:827.2,y:-20.1},0).wait(1).to({x:815.65},0).wait(1).to({x:804.1,y:-20.05},0).wait(1).to({x:792.65},0).wait(1).to({x:781.2,y:-20},0).wait(1).to({x:769.8,y:-19.95},0).wait(1).to({x:758.4},0).wait(1).to({x:747.1,y:-19.9},0).wait(1).to({x:735.8},0).wait(1).to({x:724.55,y:-19.85},0).wait(1).to({x:713.35,y:-19.8},0).wait(1).to({x:702.2},0).wait(1).to({x:691.1,y:-19.75},0).wait(1).to({x:680.05,y:-19.7},0).wait(1).to({x:669},0).wait(1).to({x:658.05,y:-19.65},0).wait(1).to({x:647.1},0).wait(1).to({x:636.2,y:-19.6},0).wait(1).to({x:625.4,y:-19.55},0).wait(1).to({x:614.6},0).wait(1).to({x:603.85,y:-19.5},0).wait(1).to({x:593.15,y:-19.45},0).wait(1).to({x:582.5},0).wait(1).to({x:571.9,y:-19.4},0).wait(1).to({x:561.35,y:-19.35},0).wait(1).to({x:550.85},0).wait(1).to({x:540.4,y:-19.3},0).wait(1).to({x:530,y:-19.25},0).wait(1).to({x:519.7,y:-19.2},0).wait(1).to({x:509.4},0).wait(1).to({x:499.15,y:-19.15},0).wait(1).to({x:488.95,y:-19.1},0).wait(1).to({x:478.85},0).wait(1).to({x:468.75,y:-19.05},0).wait(1).to({x:458.75,y:-19},0).wait(1).to({x:448.75},0).wait(1).to({x:438.85,y:-18.95},0).wait(1).to({x:429,y:-18.9},0).wait(1).to({x:419.2,y:-18.85},0).wait(1).to({x:409.45},0).wait(1).to({x:399.75,y:-18.8},0).wait(1).to({x:390.15,y:-18.75},0).wait(1).to({x:380.6,y:-18.7},0).wait(1).to({x:371.05},0).wait(1).to({x:361.6,y:-18.65},0).wait(1).to({x:352.25,y:-18.6},0).wait(1).to({x:342.9,y:-18.55},0).wait(1).to({x:333.65},0).wait(1).to({x:324.45,y:-18.5},0).wait(1).to({x:315.3,y:-18.45},0).wait(1).to({x:306.2,y:-18.4},0).wait(1).to({x:297.2},0).wait(1).to({x:288.25,y:-18.35},0).wait(1).to({x:279.35,y:-18.3},0).wait(1).to({x:270.55,y:-18.25},0).wait(1).to({x:261.75,y:-18.2},0).wait(1).to({x:253.05},0).wait(1).to({x:244.45,y:-18.15},0).wait(1).to({x:235.9,y:-18.1},0).wait(1).to({x:227.4,y:-18.05},0).wait(1).to({x:218.95,y:-18},0).wait(1).to({x:210.6},0).wait(1).to({x:202.3,y:-17.95},0).wait(1).to({x:194.1,y:-17.9},0).wait(1).to({x:185.95,y:-17.85},0).wait(1).to({x:177.85,y:-17.8},0).wait(1).to({x:169.85},0).wait(1).to({x:161.9,y:-17.75},0).wait(1).to({x:154.05,y:-17.7},0).wait(1).to({x:146.25,y:-17.65},0).wait(1).to({x:138.55,y:-17.6},0).wait(1).to({x:130.9,y:-17.55},0).wait(1).to({x:123.3,y:-17.5},0).wait(1).to({x:115.8},0).wait(1).to({x:108.35,y:-17.45},0).wait(1).to({x:101,y:-17.4},0).wait(1).to({x:93.75,y:-17.35},0).wait(1).to({x:86.55,y:-17.3},0).wait(1).to({x:79.4,y:-17.25},0).wait(1).to({x:72.35,y:-17.2},0).wait(1).to({x:65.4},0).wait(1).to({x:58.5,y:-17.15},0).wait(1).to({x:51.7,y:-17.1},0).wait(1).to({x:45,y:-17.05},0).wait(1).to({x:38.35,y:-17},0).wait(1).to({x:31.8,y:-16.95},0).wait(1).to({x:25.3,y:-16.9},0).wait(1).to({x:18.9,y:-16.85},0).wait(1).to({x:12.55},0).wait(1).to({x:6.3,y:-16.8},0).wait(1).to({x:0.15,y:-16.75},0).wait(1).to({x:-5.95,y:-16.7},0).wait(1).to({x:-11.95,y:-16.65},0).wait(1).to({x:-17.85,y:-16.6},0).wait(1).to({x:-23.7,y:-16.55},0).wait(1).to({x:-29.45,y:-16.5},0).wait(1).to({x:-35.1,y:-16.45},0).wait(1);
	this.timeline.addTween(_tweenStr_1.to({x:-40.7,y:-16.4},0).wait(1).to({x:-46.15,y:-16.35},0).wait(1).to({x:-51.55,y:-16.3},0).wait(1).to({x:-56.9},0).wait(1).to({x:-62.1,y:-16.25},0).wait(1).to({x:-67.25,y:-16.2},0).wait(1).to({x:-72.3,y:-16.15},0).wait(1).to({x:-77.25,y:-16.1},0).wait(1).to({x:-82.1,y:-16.05},0).wait(1).to({x:-86.9,y:-16},0).wait(1).to({x:-91.6,y:-15.95},0).wait(1).to({x:-96.2,y:-15.9},0).wait(1).to({x:-100.7,y:-15.85},0).wait(1).to({x:-105.1,y:-15.8},0).wait(1).to({x:-109.4,y:-15.75},0).wait(1).to({x:-113.65,y:-15.7},0).wait(1).to({x:-117.75,y:-15.65},0).wait(1).to({x:-121.8,y:-15.6},0).wait(1).to({x:-125.75,y:-15.55},0).wait(1).to({x:-129.6,y:-15.5},0).wait(1).to({x:-133.35,y:-15.45},0).wait(1).to({x:-137,y:-15.4},0).wait(1).to({x:-140.55,y:-15.35},0).wait(1).to({x:-144,y:-15.3},0).wait(1).to({x:-147.35,y:-15.25},0).wait(1).to({x:-150.6,y:-15.2},0).wait(1).to({x:-153.75,y:-15.15},0).wait(1).to({x:-156.85,y:-15.1},0).wait(1).to({x:-159.8,y:-15.05},0).wait(1).to({x:-162.65,y:-15},0).wait(1).to({x:-165.4,y:-14.95},0).wait(1).to({x:-168.1,y:-14.9},0).wait(1).to({x:-170.65,y:-14.85},0).wait(1).to({x:-173.1,y:-14.8},0).wait(1).to({x:-175.45,y:-14.75},0).wait(1).to({x:-177.7,y:-14.7},0).wait(1).to({x:-179.85,y:-14.65},0).wait(1).to({x:-181.85,y:-14.6},0).wait(1).to({x:-183.8,y:-14.55},0).wait(1).to({x:-185.65,y:-14.5},0).wait(1).to({x:-187.35,y:-14.45},0).wait(1).to({x:-188.95,y:-14.4},0).wait(1).to({x:-190.45,y:-14.35},0).wait(1).to({x:-191.85,y:-14.3},0).wait(1).to({x:-193.15,y:-14.25},0).wait(1).to({x:-194.35,y:-14.2},0).wait(1).to({x:-195.45,y:-14.15},0).wait(1).to({x:-196.4,y:-14.1},0).wait(1).to({x:-197.25,y:-14.05},0).wait(1).to({x:-198,y:-14},0).wait(1).to({x:-198.65,y:-13.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.1,-46.9,4098.900000000001,57.7);


// stage content:
(lib.BPSDatastory = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Monas
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(641.25,162.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(157.35,32.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Shark_left
	this.instance_2 = new lib.Sharkleft();
	this.instance_2.setTransform(124.35,386.25,0.6667,0.6667,0,0,0,51.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Shark_right
	this.instance_3 = new lib.Sharkright();
	this.instance_3.setTransform(335.7,413.5,0.6667,0.6667,0,0,0,59.6,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Bg_2
	this.instance_4 = new lib.Bg2();
	this.instance_4.setTransform(1405.75,391.05,0.6667,0.6667,0,0,0,2109.9,670.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Bg_1
	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1183.3,304.1,1629.2,534);
// library properties:
lib.properties = {
	id: '7F27B1A18CC1404BAC30FC09E896CE43',
	width: 2560,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png", id:"CachedBmp_3"},
		{src:"images/BPS Datastory _ Monas mini_atlas_1.png", id:"BPS Datastory _ Monas mini_atlas_1"}
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
an.compositions['7F27B1A18CC1404BAC30FC09E896CE43'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;