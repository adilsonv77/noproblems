function initBlockly() {
		
	var blocklyArea = document.getElementById('blocklyArea');
	var blocklyDiv = document.getElementById('blocklyDiv');
	
	var game = Blockly.inject(blocklyDiv,
	    {toolbox: document.getElementById('toolbox'),
		scrollbars: true});
	    
	var onresize = function(e) {
		
		blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
	    blocklyDiv.style.height = (window.innerHeight - 170) + 'px';
	    /*
		// Compute the absolute coordinates and dimensions of blocklyArea.
		    var element = blocklyArea;
		    var x = 0;
		    var y = 0;
		    do {
		      x += element.offsetLeft;
		      y += element.offsetTop;
		      element = element.offsetParent;
		    } while (element);
		    // Position blocklyDiv over blocklyArea.
		    blocklyDiv.style.left = x + 'px';
		    blocklyDiv.style.top = y + 'px';
		    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
		    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
		    */
	    Blockly.svgResize(game);
	};
	window.addEventListener('resize', onresize);
	onresize();
	
	
}
