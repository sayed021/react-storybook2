import React from 'react';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

import Button from 'react-bootstrap/Button'
export default {
  title: 'Button',
  component: Button,
  decorators: [jsxDecorator, withInfo]
};

export const NormalButton = () => <Button variant="primary" onClick={action('clicked')}>Normal Button</Button>;
export const NormalArrowButton = () => <Button variant="primary" data-arrow="right" onClick={action('clicked')}>Normal Button</Button>;
export const NormalLeftArrowButton = () => <Button variant="primary" data-arrow="left" onClick={action('clicked')}>Normal Button</Button>;
export const RoundedButton = () => <Button variant="primary rounded" onClick={action('clicked')}>Normal Button</Button>;
export const LeftArrowRoundedButton = () => <Button variant="primary rounded" data-arrow="left" onClick={action('clicked')}>Normal Button</Button>;
export const RightArrowRoundedButton = () => <Button variant="primary rounded" data-arrow="right" onClick={action('clicked')}>Normal Button</Button>;

export const OthersButtons = () => (
  <>
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>{' '}
    <Button variant="link">Link</Button>
  </>
);
