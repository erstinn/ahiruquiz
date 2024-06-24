import type { Meta, StoryObj } from '@storybook/angular';
import {CardComponent} from "./card.component";
import { fn } from '@storybook/test';
import {signal} from "@angular/core";

const meta: Meta<CardComponent> = {
  title: 'Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const LoggedIn: Story = {
  args: {
  },
}

export const LoggedOut: Story = {};
