/* ==========================================================================
 * IosToggle React Component
 *
 * @author: Andre Goncalves (andre@andregoncalves)
 * @copyright: 2018 Andre Goncalves
 * ==========================================================================
 */
import * as React from 'react';
import './IosToggle.css';

export interface IosToggleProps {
  name: string | undefined;
  value: string | undefined;
  theme: string | undefined;
  checked: boolean | undefined;
  onChange: any | undefined;
}
export interface IosToggleState {
  checked: boolean;
}

export default class IosToggle extends React.Component <IosToggleProps, IosToggleState> {

  public static defaultProps = { checked: false, theme: 'ios', value: 'on' };

  constructor (props: IosToggleProps) {
    super(props);
	console.log(props);
    this.state = { checked: !!props.checked };
  }

  componentWillReceiveProps(nextProps: IosToggleProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  }

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checked: e.target.checked });
    this.props.onChange(e);
  }

  render () {
    const { checked } = this.state;

    return (
      <div className="ios-toggle-container">
        <input className={`sit sit-${this.props.theme}`} name={this.props.name} id={this.props.name} type="checkbox" value={this.props.value} checked={!!checked} onChange={this._handleChange} />
        <label className="sit-btn" htmlFor={this.props.name}></label>
      </div>
    );
  }
}
