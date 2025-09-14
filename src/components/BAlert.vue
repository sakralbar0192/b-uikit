<script setup lang="ts">
import { computed, useSlots } from 'vue'

export interface BAlertProps {
  type?: 'info' | 'warning' | 'success' | 'error'
  dismissible?: boolean
  small?: boolean
  closeIcon?: string
}

const props = withDefaults(defineProps<BAlertProps>(), {
  type: 'info',
  dismissible: false,
  small: false,
  closeIcon: 'close',
})

const emit = defineEmits<{
  input: []
}>()

const slots = useSlots()

const icon = computed(() => {
  switch (props.type) {
    case 'info':
      return 'icon-help-circle'
    case 'warning':
      return 'icon-warning-triangle'
    case 'success':
      return 'icon-checked-outlined'
    case 'error':
      return 'icon-cross-circle'
    default:
      return 'icon-help-circle'
  }
})

const alertClasses = computed(() => {
  const baseClasses = [
    'relative',
    'flex',
    'items-start',
    'gap-3',
    'rounded-lg',
    'border',
    'p-4',
    'text-sm',
    'font-medium'
  ]

  // Type-based styling
  switch (props.type) {
    case 'info':
      baseClasses.push(
        'bg-blue-50',
        'border-blue-200',
        'text-blue-800'
      )
      break
    case 'warning':
      baseClasses.push(
        'bg-yellow-50',
        'border-yellow-200',
        'text-yellow-800'
      )
      break
    case 'success':
      baseClasses.push(
        'bg-green-50',
        'border-green-200',
        'text-green-800'
      )
      break
    case 'error':
      baseClasses.push(
        'bg-red-50',
        'border-red-200',
        'text-red-800'
      )
      break
  }

  // Size styling
  if (props.small) {
    baseClasses.push('p-3', 'text-xs')
  }

  return baseClasses.join(' ')
})

const iconClasses = computed(() => {
  const baseClasses = ['flex-shrink-0', 'text-lg']

  switch (props.type) {
    case 'info':
      baseClasses.push('text-blue-600')
      break
    case 'warning':
      baseClasses.push('text-yellow-600')
      break
    case 'success':
      baseClasses.push('text-green-600')
      break
    case 'error':
      baseClasses.push('text-red-600')
      break
  }

  return baseClasses.join(' ')
})

const hasTitle = computed(() => {
  return !!slots.title
})

const hasActions = computed(() => {
  return !!slots.actions
})
</script>

<template>
  <div class="b-alert">
    <div :class="alertClasses">
      <div :class="iconClasses">
        <i :class="icon"></i>
      </div>
      <div class="flex-1 min-w-0">
        <h4 v-if="hasTitle" class="text-base font-semibold mb-1">
          <slot name="title" />
        </h4>
        <p class="text-sm leading-relaxed">
          <slot />
        </p>
        <div v-if="hasActions" class="flex gap-2 mt-3">
          <slot name="actions" />
        </div>
      </div>
      <button
        v-if="dismissible"
        @click="$emit('input')"
        class="flex-shrink-0 ml-2 p-1 rounded hover:bg-black/10 transition-colors"
        :aria-label="closeIcon"
      >
        <i :class="closeIcon" class="text-sm"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.b-alert p:last-child {
  margin-bottom: 0;
}
</style>