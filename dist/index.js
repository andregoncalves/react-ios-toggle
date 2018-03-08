"use strict";var React=require("react"),extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};function __extends(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var IosToggle=function(e){function t(t){var n=e.call(this,t)||this;return n._handleChange=function(e){n.setState({checked:e.target.checked}),n.props.onChange(e)},n.state={checked:!!t.checked},n}return __extends(t,e),t.prototype.componentWillReceiveProps=function(e){"checked"in e&&this.setState({checked:!!e.checked})},t.prototype.render=function(){var e=this.state.checked;return React.createElement("div",{className:"ios-toggle-container"},React.createElement("input",{className:"sit sit-"+this.props.theme,name:this.props.name,id:this.props.name,type:"checkbox",value:this.props.value,checked:!!e,onChange:this._handleChange}),React.createElement("label",{className:"sit-btn",htmlFor:this.props.name}))},t.defaultProps={checked:!1,theme:"ios",value:"on"},t}(React.Component);module.exports=IosToggle;
//# sourceMappingURL=index.js.map
