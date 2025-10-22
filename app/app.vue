<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-12">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="~/assets/images/logo2.png" alt="KS Sagittarius Logo" class="h-8 w-auto">
            <h1 class="text-lg font-bold">Sagittarius FAQ</h1>
          </NuxtLink>

          <!-- Navigation Links -->
          <div class="flex items-center gap-8">
            <a href="https://kssagittarius.pl/" class="hover:text-gray-300 transition-colors text-sm">Powrót</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-12">
      <NuxtPage/>
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white py-8 mt-16">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <p class="text-gray-400">
            <a href="https://www.letscode.it/">
            2025 Karol Sójka from Let's Code It. All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'KSSagittarius | Klub strzelecki',
  meta: [
    {name: 'description', content: 'Informacje o składaniu wniosków na broń w różnych miastach Polski'}
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ]
})
</script>
