
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

import ImageContainer from '../components/atoms/ImageContainer';
import imageLogo from '../assets/images/logo_image.png';

export default {
    title: 'Atoms/Image Container',
    component: ImageContainer,
    decorators: [jsxDecorator, withInfo]
};

export const ImageContaineres = () => <ImageContainer imageURL={imageLogo} href="#" />;
export const ImageContaineresWithoutLink = () => <ImageContainer imageURL={imageLogo} />;
