
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

import SelecrForm from '../components/moleclues/SelecrForm';

export default {
    title: 'Select Form',
    component: SelecrForm,
    decorators: [jsxDecorator, withInfo]
};

export const SelectForm1 = () => <SelecrForm />;
