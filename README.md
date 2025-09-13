# Bnovo UI Kit Modern - PoC

This is a Proof of Concept for the modern UI Kit using Vue 3, TypeScript, and Tailwind CSS.

## Features

- Vue 3 with Composition API
- TypeScript support
- Tailwind CSS for styling
- Storybook for component documentation
- Vitest for unit testing
- Vite for fast builds

## Component: Button

Migrated from the legacy `b-btn.vue` component.

### Props

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `squared`: boolean
- `arrowRight`: boolean
- `innerArrowLeft`: boolean

### Usage

```vue
<template>
  <Button variant="primary" size="md" @click="handleClick">
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@bnovo/ui-kit-modern'
</script>
```

## Development

### Install dependencies
```bash
npm install
```

### Run Storybook
```bash
npm run storybook
```

### Run tests
```bash
npm run test
```

### Build
```bash
npm run build
```

## Migration Notes

- Legacy component used Vuetify 2 with options API
- Modern component uses Vue 3 Composition API + Tailwind
- Preserves similar API for easy migration
- Focus on accessibility and modern design

## Next Steps

1. Add more components (Alert, Input, etc.)
2. Integrate design tokens
3. Set up CI/CD
4. Publish to npm
5. Plan hybrid integration with main project
