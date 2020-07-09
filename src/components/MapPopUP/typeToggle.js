import React from 'react';

class TypeToggle extends React.Component {
	state ={
		toggle: false,
		cssClass: ""
	};

	toggleType = () => {
		const { hideType, showType } = this.props;
		const { toggle } = this.state;
		if (toggle) {
			this.setState({ cssClass: "", toggle: false });
			showType()
		} else {
			this.setState({ cssClass: "opacity", toggle: true });
			hideType()
		}
	}

	render(){
		const { src, type } = this.props;
		const { cssClass } = this.state;
		const currentClass = `${type} ${cssClass}`;
		return(
			<img class={currentClass} onClick={this.toggleType} src={src} alt={type} />
		)
	}
}

export default TypeToggle;