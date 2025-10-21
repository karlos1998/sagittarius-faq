<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <h1 class="text-xl font-bold">Sagittarius FAQ</h1>
          </div>

          <!-- Navigation Links -->
          <div class="flex items-center gap-8">
            <a href="#" class="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" class="hover:text-gray-300 transition-colors">About</a>
            <a href="#" class="hover:text-gray-300 transition-colors">FAQ</a>
            <a href="#" class="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <!-- Hero Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Sagittarius FAQ
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Znajdź odpowiedzi na wszystkie swoje pytania w jednym miejscu
            </p>
            <div class="flex gap-4 justify-center">
              <UButton color="neutral" size="lg" variant="solid">
                Get Started
              </UButton>
              <UButton color="neutral" size="lg" variant="outline">
                Learn More
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-3xl font-bold text-gray-900 text-center mb-12">
              Features
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <!-- Feature 1 -->
              <div class="text-center p-6">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">Fast</h4>
                <p class="text-gray-600">
                  Szybkie odpowiedzi na Twoje pytania
                </p>
              </div>

              <!-- Feature 2 -->
              <div class="text-center p-6">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">Reliable</h4>
                <p class="text-gray-600">
                  Zaufane i sprawdzone informacje
                </p>
              </div>

              <!-- Feature 3 -->
              <div class="text-center p-6">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                  </svg>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">Simple</h4>
                <p class="text-gray-600">
                  Prosta i intuicyjna nawigacja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Info Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                O projekcie
              </h3>
              <p class="text-gray-600 mb-6">
                Sagittarius FAQ to kompleksowa platforma odpowiedzi na najczęściej zadawane pytania.
                Nasza misja to dostarczanie jasnych, zwięzłych i pomocnych informacji.
              </p>
              <div class="flex flex-wrap gap-2">
                <UBadge color="neutral" variant="subtle">Nuxt 4</UBadge>
                <UBadge color="neutral" variant="subtle">Vue 3</UBadge>
                <UBadge color="neutral" variant="subtle">Nuxt UI</UBadge>
                <UBadge color="neutral" variant="subtle">TypeScript</UBadge>
                <UBadge color="neutral" variant="subtle">Tailwind CSS</UBadge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white py-8">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <p class="text-gray-400">
            2025 Sagittarius FAQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
