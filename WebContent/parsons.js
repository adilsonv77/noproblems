var mainWorkspace;

function initBlockly() {
		
	var blocklyArea = document.getElementById('blocklyArea');
	var blocklyDiv = document.getElementById('blocklyDiv');
	
	var game = Blockly.inject(blocklyDiv,
	    {toolbox: document.getElementById('toolbox'),
		scrollbars: true});
	
	mainWorkspace = Blockly.getMainWorkspace();
	
	var onresize = function(e) {
		
		blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
	    blocklyDiv.style.height = (window.innerHeight - 170) + 'px';

	    Blockly.svgResize(game);
	};
	
	restartBlocksButton.addEventListener('click', restartBlocksButtonClick, true);
		
	window.addEventListener('resize', onresize);
	onresize();
	
	Blocklify.JavaScript.Generator.extrernalSources.push(Blockly.JavaScript);
};

var restartBlocksButtonClick = function() {
	var code = "var a = 10; var b = 20; var c = read(); print(a + b + c);";
	parse_code(code);
};

function delete_all_blocks() {
	mainWorkspace.getTopBlocks().forEach(function (el) {
		el.dispose();
	});
};

function parse_code (code) {
	delete_all_blocks();
	var javascript_code = code;
	var xmlDom = Blocklify.JavaScript.importer.codeToDom(javascript_code, 'mixed');
	Blockly.Xml.domToWorkspace(xmlDom, mainWorkspace);
};

