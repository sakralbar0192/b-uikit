import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BAlert from '../src/components/BAlert.vue'

const meta = {
  title: 'Components/BAlert',
  component: BAlert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'success', 'error'],
    },
    dismissible: {
      control: 'boolean',
    },
    small: {
      control: 'boolean',
    },
    closeIcon: {
      control: 'text',
    },
  },
} satisfies Meta<typeof BAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    type: 'info',
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        This is an info alert message.
      </BAlert>
    `,
  }),
}

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        This is a warning alert message.
      </BAlert>
    `,
  }),
}

export const Success: Story = {
  args: {
    type: 'success',
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        This is a success alert message.
      </BAlert>
    `,
  }),
}

export const Error: Story = {
  args: {
    type: 'error',
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        This is an error alert message.
      </BAlert>
    `,
  }),
}

export const WithTitle: Story = {
  args: {
    type: 'info',
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        <template #title>Alert Title</template>
        This is an alert with a title and some additional content.
      </BAlert>
    `,
  }),
}

export const WithActions: Story = {
  args: {
    type: 'warning',
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        <template #title>Action Required</template>
        This alert requires user action.
        <template #actions>
          <button class="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
            Confirm
          </button>
          <button class="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300">
            Cancel
          </button>
        </template>
      </BAlert>
    `,
  }),
}

export const Dismissible: Story = {
  args: {
    type: 'info',
    dismissible: true,
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args" @input="onDismiss">
        This is a dismissible alert. Click the close button to dismiss it.
      </BAlert>
    `,
    methods: {
      onDismiss() {
        console.log('Alert dismissed')
      },
    },
  }),
}

export const Small: Story = {
  args: {
    type: 'success',
    small: true,
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args }
    },
    template: `
      <BAlert v-bind="args">
        This is a small alert message.
      </BAlert>
    `,
  }),
}