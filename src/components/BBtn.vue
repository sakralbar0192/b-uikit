<script setup lang="ts">
import { computed } from 'vue'
import style from '../styles/BBtn.module.scss'

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
  variant: 'primary',
  size: 'md',
})

const classes = computed(() => {
  const baseClasses = [
    style['b-btn'], 
  ]

  // Variant styles based on color
  switch (props.color) {
    case 'primary':
      baseClasses.push('bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600', 'primary')
      break
    case 'secondary':
      baseClasses.push('bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-600', 'secondary')
      break
    default:
      baseClasses.push('bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-600')
      break
  }

  // Size styles
  switch (props.size) {
    case 'sm':
      baseClasses.push('h-8 px-3 text-sm')
      break
    case 'md':
      baseClasses.push('h-10 px-4 text-base')
      break
    case 'lg':
      baseClasses.push('h-12 px-6 text-lg')
      break
  }

  // Additional styles
  if (props.squared) {
    baseClasses.push('b-btn--squared')
  } else {
    baseClasses.push('rounded-md')
  }

  if (props.pulsate) {
    baseClasses.push('b-btn--pulsating')
  }

  if (props.fontWeightRegular) {
    baseClasses.push('font-weight-regular')
  }

  if (props.arrowRight) {
    baseClasses.push('b-btn--arrow-right')
  }

  if (props.innerArrowLeft) {
    baseClasses.push('b-btn--inner-arrow-left')
  }

  if (props.textInline) {
    baseClasses.push('b-btn--text-inline')
  }

  if (props.loading) {
    baseClasses.push('cursor-not-allowed')
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
    <span v-else-if="textInline" class="flex items-center">
      <slot name="loader">
        <span class="animate-spin mr-2">⟳</span>
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