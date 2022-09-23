import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { props } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',

};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'md',
  rounded: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'sm',
  rounded: false,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'md',
  rounded: false,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'lg',
  rounded: false,
};
