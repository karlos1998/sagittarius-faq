<template>
  <section class="py-16 bg-gradient-to-tr from-blue-50 via-white to-indigo-100">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl md:text-5xl font-extrabold text-indigo-800 mb-5 text-center">Kompendium wiedzy – egzamin
          strzelecki</h1>
        <p class="text-lg text-gray-700 text-center mb-8">Skrót najważniejszych zagadnień wymaganych na egzaminie – dla
          przyszłych strzelców. Bez powtórzeń pytań, czytelnie i onboardingowo!</p>
        <div class="space-y-8">
          <!-- Card: Pozwolenia i uprawnienia -->
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-blue-600">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-blue-700">
              <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 01-8 0M12 22V10m-7.447 4.105A8 8 0 1112 2a8 8 0 01-7.447 12.105z"/>
              </svg>
              1. Pozwolenia i uprawnienia
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Pozwolenie na broń sportową uprawnia do posiadania broni palnej sportowej, m.in. bocznego i
                centralnego zapłonu (do 12 mm), gładkolufowej.
              </li>
              <li>Pozwolenia nie wymaga broń pneumatyczna (energia >17J wymaga rejestracji).</li>
              <li>Pozwolenia nie wydaje się osobom skazanym prawomocnie za umyślne przestępstwa oraz wykazującym istotne
                zaburzenia psychiczne.
              </li>
              <li>Pozwolenie może być cofnięte m.in. za naruszenie obowiązku rejestracji broni, noszenie broni po
                alkoholu, naruszenie warunków pozwolenia.
              </li>
              <li>Zmianę miejsca stałego pobytu należy zgłosić Policji w terminie 14 dni.</li>
            </ul>
          </div>
          <!-- Card: Rejestracja, nabycie, przechowywanie -->
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-green-600">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-green-700">
              <svg class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 13V9a5 5 0 00-10 0v4M5 19h14"/>
              </svg>
              2. Rejestracja, nabycie, przechowywanie
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Broń należy zarejestrować w ciągu 5 dni od zakupu.</li>
              <li>Utrata broni musi być zgłoszona Policji w ciągu 24 godzin.</li>
              <li>Broń i amunicję przechowuje się w urządzeniach klasy co najmniej S1 (PN-EN 14450).</li>
              <li>Amunicję nabywa się na podstawie legitymacji posiadacza broni – wyłącznie do broni w niej wpisanej.
              </li>
            </ul>
          </div>
          <!-- Card: Odpowiedzialność karna -->
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-red-500">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-red-700">
              <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h14v4m0 0l4-4m-4 4l4 4"/>
              </svg>
              3. Odpowiedzialność karna
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Nielegalne posiadanie broni lub amunicji: 6 miesięcy – 8 lat pozbawienia wolności.</li>
              <li>Nielegalne wytwarzanie lub handel bronią: 1–10 lat pozbawienia wolności.</li>
              <li>Utrata broni z nieumyślności: grzywna, ograniczenie wolności lub do 1 roku pozbawienia wolności.</li>
              <li>Noszenie broni po alkoholu: areszt lub grzywna.</li>
              <li>Używanie broni poza strzelnicą w celach sportowych/szkoleniowych: areszt lub grzywna.</li>
            </ul>
          </div>
          <!-- Card: Zasady bezpieczeństwa na strzelnicy -->
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-yellow-400">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-yellow-700">
              <svg class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="#facc15" stroke-width="2"/>
                <path stroke="#facc15" stroke-width="2" stroke-linecap="round" d="M8 12l2 2 4-4"/>
              </svg>
              4. Zasady bezpieczeństwa na strzelnicy
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Alkohol i środki odurzające są bezwzględnie zabronione.</li>
              <li>Broń poza stanowiskiem: rozładowana, zabezpieczona, w kaburze/pokrowcu/kasecie.</li>
              <li>Odkładanie załadowanej broni w czasie przerwy – zabronione.</li>
              <li>Strzelanie „na sucho” tylko na stanowisku lub za zgodą prowadzącego.</li>
              <li>Zwierzęta: tylko na uwięzi i pod ścisłym nadzorem opiekuna.</li>
              <li>Do innych celów niż tarcze strzelać nie wolno.</li>
            </ul>
          </div>
          <!-- etc. -->
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-indigo-500">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-indigo-700">
              <svg class="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#6366f1" stroke-width="2"/>
              </svg>
              5. Komendy strzeleckie
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>„ŁADUJ” – załaduj magazynek, włóż do broni, wprowadź nabój do komory, czekaj.</li>
              <li>„STOP” – natychmiast przerwać strzelanie (może wydać każdy).</li>
              <li>„ROZŁADUJ” – rozładuj broń, zabezpiecz i umieść na stanowisku.</li>
              <li>Po zakończeniu strzelania: rozładuj, pokaż do kontroli, zabezpiecz.</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-purple-400">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-purple-700">
              <svg class="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12h.01M11 16h.01M7 12h.01M7 8h.01M11 8h.01M15 8h.01"/>
              </svg>
              6. Strzelectwo sportowe – podstawy
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Dyscypliny: pistolet, karabin, strzelba gładkolufowa.</li>
              <li>Odległości ISSF: 10 m, 25 m, 50 m, 300 m.</li>
              <li>Postawy karabinowe: leżąca, klęcząca, stojąca.</li>
              <li>TRAP – rzutki wyrzucane ze schronu.</li>
              <li>SKEET – rzutki z dwóch budek (wysokiej i niskiej).</li>
              <li>Pistolet szybkostrzelny: 25 m, 5 tarcz.</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-blue-400">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-blue-700">
              <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 19V6.131c0-.538-.214-1.056-.595-1.436A2.005 2.005 0 0016.868 4H7.131a2.005 2.005 0 00-1.537.695c-.38.38-.595.898-.595 1.436V19"/>
              </svg>
              7. Broń i amunicja ISSF
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Dozwolona amunicja: .22 LR z pociskami ołowianymi lub miękkimi.</li>
              <li>Zabronione: amunicja typu magnum, smugowa, przeciwpancerna, zapalająca.</li>
              <li>Kaliber bocznego zapłonu: masa zapłonowa w kryzie łuski.</li>
              <li>Kaliber centralnego zapłonu: masa zapłonowa w środku dna łuski.</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-green-300">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-green-700">
              <svg class="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="7" y="7" width="10" height="10" rx="3" stroke="#22c55e" stroke-width="2"/>
              </svg>
              8. Wymiary i parametry broni
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Pistolet sportowy: max masa: 1400 g, max długość lufy: 153 mm, min opór spustu: 1000 g, pudełko: 300 x
                150 x 50 mm
              </li>
              <li>Pistolet dowolny: 1 nabój, brak limitu długości lufy i masy</li>
              <li>Karabin pneumatyczny: max masa: 5,5 kg</li>
              <li>Pistolet pneumatyczny: min opór spustu: 500 g</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-pink-400">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-pink-700">
              <svg class="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="#f472b6" stroke-width="2"/>
                <path stroke="#6366f1" stroke-width="2" stroke-linecap="round" d="M9 12h6M12 9v6"/>
              </svg>
              9. Definicje
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Broń palna: przenośna broń lufowa miotająca pocisk przy użyciu materiału miotającego.</li>
              <li>Noszenie broni: przemieszczanie załadowanej broni przez osobę.</li>
              <li>Kaliber: najmniejsza średnica przewodu lufy (na polach gwintu).</li>
              <li>Kaliber wagomiarowy: liczba kul o średnicy lufy z 1 funta ołowiu.</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-l-8 border-indigo-400">
            <div class="flex items-center gap-3 text-xl font-bold mb-3 text-indigo-700">
              <svg class="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1 4v-4m4 6H7a2 2 0 01-2-2V7a2 2 0 012-2h5.618a2 2 0 011.447.553l4.382 4.09A2 2 0 0120 10.09V18a2 2 0 01-2 2z"/>
              </svg>
              10. Obrona konieczna i stan wyższej konieczności
            </div>
            <ul class="list-disc ml-6 text-gray-800 space-y-1">
              <li>Obrona konieczna: odparcie bezpośredniego, bezprawnego zamachu.</li>
              <li>Sąd może odstąpić od kary, jeśli przekroczenie było wynikiem strachu lub wzburzenia.</li>
              <li>Stan wyższej konieczności: ratowanie dobra kosztem dobra o mniejszej wartości, gdy nie da się inaczej
                uniknąć niebezpieczeństwa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
