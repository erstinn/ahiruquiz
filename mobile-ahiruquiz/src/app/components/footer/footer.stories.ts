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
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
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
