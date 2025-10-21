<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sagittarius FAQ
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Sprawdzamy czy style działają poprawnie 🚀
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <UCard>
            <template #header>
              <h3 class="text-lg font-semibold">Nuxt UI Components</h3>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Projekt używa @nuxt/ui z Tailwind CSS
            </p>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="text-lg font-semibold">Style Test</h3>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              Gradient backgrounds i responsive layout
            </p>
          </UCard>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 justify-center mb-12">
          <UButton color="primary" size="lg">Primary Button</UButton>
          <UButton color="secondary" size="lg" variant="outline">Secondary</UButton>
          <UButton color="error" size="lg" variant="soft">Error Button</UButton>
        </div>

        <!-- Badge Section -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Instalowane moduły:
          </h2>
          <div class="flex flex-wrap gap-2">
            <UBadge color="success">@nuxt/ui</UBadge>
            <UBadge color="info">@nuxt/content</UBadge>
            <UBadge color="primary">@nuxt/image</UBadge>
            <UBadge color="warning">@nuxt/scripts</UBadge>
            <UBadge color="error">TypeScript</UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
