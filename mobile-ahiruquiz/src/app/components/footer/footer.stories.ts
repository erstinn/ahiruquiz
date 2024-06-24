import {applicationConfig, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {FooterComponent} from "./footer.component";
import { fn } from '@storybook/test';
import {importProvidersFrom, signal} from "@angular/core";
import {IonicModule} from "@ionic/angular";

const meta: Meta<FooterComponent> = {
  title: 'Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot()])],
    }),

    componentWrapperDecorator((story) => `<ion-app>${story}</ion-app>`),
  ],
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const LoggedIn: Story = {
  args: {
    user: signal('innoInADate'),
    },
}

export const LoggedOut: Story = {};

export const Primary: Story = {
  args: {
    memberInfo: {
      name: 'Aaron Saunders',
      title: 'CEO',
      bio: 'Amazing Experience',
      companyName: 'Clearly Innovative Inc',
      linkedIn: 'Clearly Innovative Inc',
      twitter: 'https://twitter.com/aaronksaunders',
      website: 'www.clearlyinnovative.com',
    },
  },
};


export const MissingSocial: Story = {
  args: {
    memberInfo: {
      name: 'Aaron Saunders',
      title: 'CEO',
      companyName: 'Clearly Innovative Inc',
      bio: 'No news',
      website: 'www.clearlyinnovative.com',
    },
  },
};

