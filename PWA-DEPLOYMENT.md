# Instrukcja wdrożenia PWA

## Zmiany w konfiguracji

Aplikacja została zaktualizowana z pełnym wsparciem dla Progressive Web App (PWA) z możliwością pracy offline.

### Zmiany techniczne:

1. **Zamiana modułu PWA**: Zastąpiono przestarzały `@nuxtjs/pwa` nowoczesnym `@vite-pwa/nuxt`
2. **Service Worker**: Wygenerowano nowy Service Worker z 187 precache'owanymi zasobami (3.4 MB)
3. **Strategie cache'owania**:
    - **Strony HTML**: NetworkFirst (timeout 5s) → działa offline
    - **PDF-y**: CacheFirst → pełny dostęp offline
    - **Obrazy**: CacheFirst → pełny dostęp offline
    - **JS/CSS**: StaleWhileRevalidate → szybkie ładowanie + automatyczna aktualizacja
    - **API/JSON**: NetworkFirst (timeout 10s) → działa offline
    - **Czcionki Google**: CacheFirst → zawsze dostępne
4. **Caddyfile**: Dodano odpowiednie nagłówki cache dla Service Workera i manifestu

## Wdrożenie

### Automatyczne wdrożenie (zalecane):

```bash
# Build aplikacji
npm run generate

# Restart kontenera Docker (montuje .output/public)
docker-compose restart
```

### Krok po kroku:

1. **Build aplikacji**:
   ```bash
   npm run generate
   ```

   To wygeneruje całą aplikację do katalogu `.output/public/` (który jest ignorowany w Git)

2. **Restart serwera**:
   ```bash
   docker-compose restart
   ```

   Docker montuje bezpośrednio `.output/public/` - nie trzeba nic kopiować!

## Ważne informacje

### Struktura katalogów:

- **`public/`** - źródłowe statyczne pliki (ikony, PDF-y, obrazy) → **W repozytorium Git**
- **`.output/public/`** - wygenerowany build aplikacji → **Ignorowany w Git**
- Docker montuje `.output/public/` jako root aplikacji

### Przed pierwszym uruchomieniem:

Przed uruchomieniem kontenera Docker **musisz** zbudować aplikację:

```bash
npm install
npm run generate
```

Bez tego krok `.output/public/` nie będzie istnieć i kontener nie wystartuje.

## Weryfikacja działania

Po wdrożeniu sprawdź:

1. **Chrome DevTools** → Application → Service Workers
    - Powinien być zarejestrowany Service Worker dla domeny

2. **Chrome DevTools** → Application → Cache Storage
    - Powinny być widoczne cache'e: `pages-cache`, `images-cache`, `pdf-cache`, etc.

3. **Test offline**:
    - Otwórz stronę w przeglądarce
    - Przejdź do różnych podstron
    - W DevTools Network → włącz tryb Offline
    - Odśwież stronę i przejdź po różnych podstronach
    - Wszystko powinno działać bez internetu

4. **Installable PWA**:
    - W przeglądarce powinien pojawić się przycisk "Zainstaluj aplikację"
    - Po zainstalowaniu aplikacja działa jako standalone app

## Troubleshooting

### Service Worker się nie aktualizuje

```bash
# Wymuś przeładowanie cache w przeglądarce
Ctrl+Shift+R (Windows/Linux) lub Cmd+Shift+R (Mac)
```

### Stara wersja PWA jest cache'owana

```bash
# W DevTools → Application → Clear storage → Clear site data
# Następnie odśwież stronę
```

### Build z błędami

```bash
# Sprawdź czy wszystkie zależności są zainstalowane
npm install
# Usuń cache i build od nowa
rm -rf .nuxt .output node_modules/.cache
npm run generate
```

## Pliki konfiguracyjne

- `nuxt.config.ts` - Główna konfiguracja PWA
- `Caddyfile` - Nagłówki HTTP dla Service Workera
- `public/sw.js` - Wygenerowany Service Worker
- `public/manifest.webmanifest` - Manifest PWA
