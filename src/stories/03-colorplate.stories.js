
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

import ColorPattern from '../components/atoms/colorPattern/ColorPattern';
export default {
    title: 'Colorpattern',
    component: ColorPattern,
    decorators: [jsxDecorator, withInfo]
};



export const ColorPatterns = () => (
    <>
        <ColorPattern style={{ background: 'linear-gradient(to right, #061d49, #fff)', height: '40px', color: '#fff' }}>Navy Blue 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #104cbf, #fff)', height: '40px', color: '#000' }}>blue 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #7ed321, #fff)', height: '40px', color: '#000' }}>green 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #ff0, #fff)', height: '40px', color: '#000' }}>Yellow 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #f00, #fff)', height: '40px', color: '#000' }}>Red 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #fff, #fff)', height: '40px', color: '#000' }}>White 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #000, #fff)', height: '40px', color: '#fff' }}>Black 100% to 0%</ColorPattern>
        <ColorPattern style={{ background: 'linear-gradient(to right, #969492, #fff)', height: '40px', color: '#000' }}>Gray 100% to 0%</ColorPattern>

    </>
);