<script setup lang="ts">
import { computed } from 'vue'

export interface BBtnProps {
  elevation?: number
  ripple?: boolean
  squared?: boolean
  pulsate?: boolean
  fontWeightRegular?: boolean
  textInline?: boolean
  color?: string
  arrowRight?: boolean | string | number
  innerArrowLeft?: boolean | string | number
  loading?: boolean
  disabled?: boolean
  type?: 'default' | 'outlined' | 'text' | 'text-inline'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BBtnProps>(), {
  elevation: 0,
  ripple: false,
  squared: false,
  pulsate: false,
  fontWeightRegular: false,
  textInline: false,
  color: 'primary',
  arrowRight: false,
  innerArrowLeft: false,
  loading: false,
  disabled: false,
  type: 'default',
  variant: 'primary',
  size: 'md',
})

const classes = computed(() => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50'
  ]

  // Variant styles based on color
  switch (props.color) {
    case 'primary':
      baseClasses.push(
        'bg-primary-600',
        'text-white',
        'hover:bg-primary-700',
        'focus-visible:ring-primary-600'
      )
      break
    case 'secondary':
      baseClasses.push(
        'bg-secondary-600',
        'text-white',
        'hover:bg-secondary-700',
        'focus-visible:ring-secondary-600'
      )
      break
    default:
      baseClasses.push(
        'bg-gray-600',
        'text-white',
        'hover:bg-gray-700',
        'focus-visible:ring-gray-600'
      )
      break
  }

  // Size styles
  switch (props.size) {
    case 'sm':
      baseClasses.push('h-8', 'px-3', 'text-sm')
      break
    case 'md':
      baseClasses.push('h-10', 'px-4', 'text-base')
      break
    case 'lg':
      baseClasses.push('h-12', 'px-6', 'text-lg')
      break
  }

  // Additional styles
  if (props.squared) {
    // Remove rounded corners for squared buttons
  } else {
    baseClasses.push('rounded-md')
  }

  if (props.pulsate) {
    baseClasses.push('animate-pulse')
  }

  if (props.fontWeightRegular) {
    baseClasses.push('font-normal')
  }

  if (props.loading) {
    baseClasses.push('cursor-not-allowed', 'opacity-50')
  }

  // Elevation (shadow)
  if (props.elevation > 0) {
    baseClasses.push(`shadow-${props.elevation}`)
  }

  return baseClasses.join(' ')
})
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
  >
    <slot v-if="!loading" name="default">Button</slot>
    <span v-else-if="textInline" class="flex items-center gap-2">
      <slot name="loader">
        <span class="animate-spin">⟳</span>
      </slot>
      <slot name="default">Button</slot>
    </span>
    <span v-else>
      <slot name="loader">
        <span class="animate-spin">⟳</span>
      </slot>
    </span>
  </button>
</template>