<template>
  <div class="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
    <SeoHead
        title="Skrócona ustawa o broni i amunicji - kompendium wiedzy"
        description="Kompendium wiedzy na temat ustawy o broni i amunicji - skrócona wersja na potrzeby egzaminu strzeleckiego. Wszystkie kluczowe artykuły i przepisy."
        keywords="ustawa o broni, amunicja, kompendium, egzamin strzelecki, prawo, przepisy"
        canonical="/skrocona-ustawa-o-broni-i-amunicji"
        image="/seo_main.jpg"
    />

    <BackToInstrukcjaBar />

    <section class="pb-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-center mb-12 drop-shadow-lg">
            KOMPENDIUM – USTAWA O BRONI I AMUNICJI</h1>

          <p class="text-center text-gray-800 italic mb-12">Ten dokument ma odpowiedzieć wprost: co wolno, czego nie
            wolno i na jakich zasadach.</p>

          <!-- Section 1 -->
          <Card color="blue">
            <CardTitle>1. ZASADA PODSTAWOWA</CardTitle>
            <CardList>
              <CardItem>W Polsce broń i amunicja są co do zasady zakazane.</CardItem>
              <CardItem>Można je posiadać tylko wtedy, gdy ustawa wyraźnie na to pozwala.</CardItem>
            </CardList>
          </Card>

          <!-- Section 2 -->
          <Card color="green">
            <CardTitle>2. CO USTAWA UZNAJE ZA BROŃ</CardTitle>
            <p class="text-gray-800 mb-4">Za broń uważa się m.in.:</p>
            <CardList>
              <CardItem>broń palną (bojową, sportową, myśliwską, gazową, alarmową, sygnałową),</CardItem>
              <CardItem>broń pneumatyczną (jeśli energia pocisku przekracza 17 J),</CardItem>
              <CardItem>gaz pieprzowy,</CardItem>
              <CardItem>paralizatory,</CardItem>
              <CardItem>kusze,</CardItem>
              <CardItem>broń białą: kastety, nunczaki, pałki teleskopowe itp.</CardItem>
            </CardList>
            <p class="text-gray-800 mt-4 font-semibold">UWAGA:</p>
            <p class="text-gray-800">Istotne części broni (lufa, zamek, komora, bęben, szkielet) są traktowane tak samo
              jak cała broń.</p>
          </Card>

          <!-- Section 3 -->
          <Card color="yellow">
            <CardTitle>3. BROŃ PALNA – CO TO ZNACZY</CardTitle>
            <CardList>
              <CardItem>Broń palna to każda broń, która strzela lub może strzelać pociskiem dzięki spalaniu prochu lub
                innego materiału miotającego.
              </CardItem>
            </CardList>
          </Card>

          <!-- Section 4 -->
          <Card color="red">
            <CardTitle>4. KIEDY POTRZEBA POZWOLENIA</CardTitle>
            <p class="text-gray-800 mb-4">Pozwolenie jest wymagane na:</p>
            <CardList>
              <CardItem>broń palną,</CardItem>
              <CardItem>amunicję do tej broni.</CardItem>
            </CardList>
          </Card>

          <!-- Section 5 -->
          <Card color="indigo">
            <CardTitle>5. KIEDY POZWOLENIE NIE JEST POTRZEBNE</CardTitle>
            <p class="text-gray-800 mb-4">Pozwolenia NIE trzeba mieć m.in. na:</p>
            <CardList>
              <CardItem>używanie broni na strzelnicy,</CardItem>
              <CardItem>gaz pieprzowy,</CardItem>
              <CardItem>paralizator do 10 mA,</CardItem>
              <CardItem>broń pneumatyczną,</CardItem>
              <CardItem>broń czarnoprochową sprzed 1885 r. i jej repliki,</CardItem>
              <CardItem>broń alarmową do 6 mm.</CardItem>
            </CardList>
          </Card>

          <!-- Section 6 -->
          <Card color="purple">
            <CardTitle>6. WARUNKI UZYSKANIA POZWOLENIA</CardTitle>
            <p class="text-gray-800 mb-4">Pozwolenie dostaniesz, jeśli:</p>
            <CardList>
              <CardItem>nie stanowisz zagrożenia,</CardItem>
              <CardItem>masz sensowny powód posiadania broni.</CardItem>
            </CardList>
          </Card>

          <!-- Section 7 -->
          <Card color="pink">
            <CardTitle>7. NAJWAŻNIEJSZE POWODY POSIADANIA BRONI</CardTitle>
            <p class="text-gray-800 mb-4"><strong>Sport:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>klub strzelecki,</CardItem>
              <CardItem>patent,</CardItem>
              <CardItem>licencja PZSS.</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Myślistwo:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>uprawnienia myśliwskie.</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Kolekcjonerstwo:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>członkostwo w stowarzyszeniu kolekcjonerskim.</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Ochrona osobista:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>realne, stałe i ponadprzeciętne zagrożenie.</CardItem>
            </CardList>
          </Card>

          <!-- Section 8 -->
          <Card color="teal">
            <CardTitle>8. JAKA BROŃ DO JAKIEGO CELU</CardTitle>
            <p class="text-gray-800 mb-4"><strong>Sport:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>.22 LR,</CardItem>
              <CardItem>centralny zapłon do 12 mm,</CardItem>
              <CardItem>strzelby gładkolufowe.</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Myślistwo:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>broń dopuszczona do polowań.</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Kolekcja:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>bardzo szeroki zakres,</CardItem>
              <CardItem>brak prawa noszenia.</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Ochrona osobista:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>pistolety i rewolwery 6–12 mm.</CardItem>
            </CardList>
          </Card>

          <!-- Section 9 -->
          <Card color="orange">
            <CardTitle>9. BROŃ ZAKAZANA</CardTitle>
            <p class="text-gray-800 mb-4">Zabronione są:</p>
            <CardList>
              <CardItem>broń samoczynna,</CardItem>
              <CardItem>broń ukryta w przedmiotach,</CardItem>
              <CardItem>broń niewykrywalna przez bramki i skanery,</CardItem>
              <CardItem>broń z tłumikiem huku.</CardItem>
            </CardList>
            <p class="text-gray-800 mt-4 font-semibold">WYJĄTEK:</p>
            <p class="text-gray-800">Myśliwy może posiadać broń z tłumikiem, ale wolno jej używać wyłącznie do odstrzału
              sanitarnego.</p>
          </Card>

          <!-- Section 10 -->
          <Card color="cyan">
            <CardTitle>10. AMUNICJA ZAKAZANA</CardTitle>
            <p class="text-gray-800 mb-4">Zabroniona jest amunicja:</p>
            <CardList>
              <CardItem>wybuchowa,</CardItem>
              <CardItem>zapalająca,</CardItem>
              <CardItem>przeciwpancerna (twardy rdzeń),</CardItem>
              <CardItem>podkalibrowa,</CardItem>
              <CardItem>elaborowana fabrycznie (poza elaboracją na własny użytek).</CardItem>
            </CardList>
          </Card>

          <!-- Section 11 -->
          <Card color="lime">
            <CardTitle>11. WIEK I BADANIA</CardTitle>
            <p class="text-gray-800 mb-4"><strong>Minimalny wiek:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>21 lat,</CardItem>
              <CardItem>18 lat: sport i myślistwo (wyjątek).</CardItem>
            </CardList>
            <p class="text-gray-800 mb-4 mt-4"><strong>Badania:</strong></p>
            <CardList customClass="ml-4">
              <CardItem>lekarskie i psychologiczne przy wniosku,</CardItem>
              <CardItem>ochrona osobista: badania co 5 lat.</CardItem>
            </CardList>
          </Card>

          <!-- Section 12 -->
          <Card color="rose">
            <CardTitle>12. REJESTRACJA BRONI</CardTitle>
            <CardList>
              <CardItem>broń trzeba zarejestrować w ciągu 5 dni od zakupu,</CardItem>
              <CardItem>zgubienie broni: zgłoszenie w 24 godziny.</CardItem>
            </CardList>
          </Card>

          <!-- Section 13 -->
          <Card color="violet">
            <CardTitle>13. NOSZENIE BRONI</CardTitle>
            <CardList>
              <CardItem>Noszenie = przemieszczanie ZAŁADOWANEJ broni.</CardItem>
            </CardList>
            <CardList>
              <CardItem>Policja może zakazać noszenia,</CardItem>
              <CardItem>broń kolekcjonerska nie może być noszona.</CardItem>
            </CardList>
          </Card>

          <!-- Section 14 -->
          <Card color="amber">
            <CardTitle>14. PRZECHOWYWANIE</CardTitle>
            <CardList>
              <CardItem>broń i amunicja muszą być zabezpieczone,</CardItem>
              <CardItem>wymagany sejf klasy S1,</CardItem>
              <CardItem>brak dostępu osób trzecich.</CardItem>
            </CardList>
          </Card>

          <!-- Section 15 -->
          <Card color="gray">
            <CardTitle>15. COFNIĘCIE POZWOLENIA</CardTitle>
            <p class="text-gray-800 mb-4">Pozwolenie zostanie cofnięte m.in. gdy:</p>
            <CardList>
              <CardItem>popełnisz przestępstwo,</CardItem>
              <CardItem>będziesz pod wpływem alkoholu lub narkotyków,</CardItem>
              <CardItem>złamiesz warunki pozwolenia,</CardItem>
              <CardItem>nie zarejestrujesz broni.</CardItem>
            </CardList>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import SeoHead from '~/components/SeoHead.vue'
import Card from '~/components/Card.vue'
import CardTitle from '~/components/CardTitle.vue'
import CardItem from '~/components/CardItem.vue'
import CardList from '~/components/CardList.vue'
</script>
