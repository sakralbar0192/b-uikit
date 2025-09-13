import type { Meta, StoryObj } from '@storybook/vue3'
import BBtn from '../src/components/BBtn.vue'

const meta = {
  title: 'Components/BBtn',
  component: BBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'text',
    },
    elevation: {
      control: { type: 'number', min: 0, max: 10 },
    },
    ripple: {
      control: 'boolean',
    },
    squared: {
      control: 'boolean',
    },
    pulsate: {
      control: 'boolean',
    },
    fontWeightRegular: {
      control: 'boolean',
    },
    textInline: {
      control: 'boolean',
    },
    arrowRight: {
      control: 'boolean',
    },
    innerArrowLeft: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof BBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">Primary BBtn</BBtn>',
  }),
}

export const Squared: Story = {
  args: {
    squared: true,
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">Squared BBtn</BBtn>',
  }),
}

export const Pulsate: Story = {
  args: {
    pulsate: true,
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">Pulsating BBtn</BBtn>',
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">Loading...</BBtn>',
  }),
}

export const LoadingTextInline: Story = {
  args: {
    loading: true,
    textInline: true,
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">Loading with Text</BBtn>',
  }),
}

export const WithArrows: Story = {
  args: {
    arrowRight: true,
    innerArrowLeft: true,
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">BBtn with Arrows</BBtn>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { BBtn },
    setup() {
      return { args }
    },
    template: '<BBtn v-bind="args">Disabled BBtn</BBtn>',
  }),
}