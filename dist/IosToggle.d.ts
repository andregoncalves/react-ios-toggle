/// <reference types="react" />
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
export default class IosToggle extends React.Component<IosToggleProps, IosToggleState> {
    static defaultProps: {
        checked: boolean;
        theme: string;
        value: string;
    };
    constructor(props: IosToggleProps);
    _handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
