
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import Label from '../components/atoms/label/Label';


export default {
    title: 'Label Text',
    component: Label,
    decorators: [jsxDecorator, withInfo]
};

export const LabelText = () => <Label for="selectOne"><strong>Label text</strong></Label>;
export const ErrorText = () => <div className="text-error">Error the name field</div>;
