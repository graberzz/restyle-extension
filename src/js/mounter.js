import React from 'react';
import ReactDOM from 'react-dom';
import { setStyle } from './utils';

const Mounter = {
	wrap: document.createElement('div'),
	component: null,

	mount(node, component) {
		this.unmount();
		this.wrap.className = 'editpage__wrap';
		const nodeRect = node.getBoundingClientRect();
		
		setStyle(this.wrap, {
			left: nodeRect.x + window.scrollX + 'px',
			top: nodeRect.y + window.scrollY + 'px'
		});

		document.body.appendChild(this.wrap);
		ReactDOM.render(component, this.wrap);
	},

	unmount() {
		if (document.body.contains(this.wrap)) {
			ReactDOM.unmountComponentAtNode(this.wrap);
			document.body.removeChild(this.wrap);
		}
	}
};

export default Mounter;