# Plano: Redesign Ilha do Caranguejo

## Contexto

O site atual (ilhadocaranguejo.com.br) e feito em WordPress/Elementor com design datado de 2021 e contem ate spam injetado (Maximabet). O objetivo e criar uma versao moderna e animada para apresentar ao dono do restaurante como proposta de upgrade, hospedada na Vercel.

---

## Tech Stack

| Tecnologia | Motivo |
|---|---|
| **Next.js 15** (App Router) | Otimizacao de imagens, SSR, deploy zero-config na Vercel |
| **Tailwind CSS v4** | Compativel com as skills de design instaladas |
| **Framer Motion** | Animacoes scroll-triggered, parallax, transicoes premium |
| **Plus Jakarta Sans + Clash Display** | Fontes premium (Inter/Roboto sao banidas pelas skills) |
| **Phosphor Icons** | Biblioteca de icones recomendada pelas skills |
| **embla-carousel-react** | Carousel leve (<5kb) para depoimentos |

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install framer-motion @phosphor-icons/react embla-carousel-react
```

---

## Paleta de Cores

| Cor | Hex | Uso |
|---|---|---|
| Creme quente | `#FDFAF6` | Background claro (como toalha de linho) |
| Espresso | `#1A1714` | Background escuro, texto principal |
| Terracota | `#C44B2B` | Accent primario (cor da casca do caranguejo) |
| Areia dourada | `#D4956A` | Accent secundario (praia, calor) |
| Verde tropical | `#2D6A5A` | Accent terciario (costa capixaba) |
| Cinza quente | `#6B6560` | Texto secundario |

Paleta intencionalmente quente e tropical. Sem azul/roxo generico de AI.

---

## Funcionalidades Escolhidas

- **Cardapio:** Link externo (botao abre ilhadocaranguejo.com)
- **Estilo:** Quente e Premium (terracota + creme + dourado)
- **Extras:** Animacao splash de abertura + Galeria Instagram embed

---

## Estrutura do Site (Single Page)

### 0. Splash Screen (animacao de abertura)
- Logo do restaurante anima ao centro da tela
- Background escuro (#1A1714) com grain
- Logo faz fade-in + scale suave, depois split/reveal para o hero
- Duracao: ~2s, roda apenas na primeira visita (sessionStorage flag)

### 1. Hero (viewport inteiro)
- Foto full-bleed com overlay escuro
- Logo + tagline "O ponto turistico da culinaria CAPIXABA"
- CTAs: "Fazer Reserva" + "Ver Cardapio" (link externo para ilhadocaranguejo.com)
- 4 pills de especialidades: Caranguejo, Petiscos, Moquecas, Area Kids
- Parallax sutil no background

### 2. Sobre Nos
- Missao / Visao / Valores em 3 cards animados (staggered fade-up)
- Layout assimetrico: texto 60% + fotos 40%

### 3. Especialidades
- 4 cards com scroll horizontal (desktop) / stack vertical (mobile)
- Cada card: foto de fundo + icone + descricao
- Hover com scale + shadow

### 4. Galeria
- Grid Bento assimetrico com fotos do restaurante
- Reveal animado no scroll

### 5. Depoimentos
- Carousel com 4 reviews reais (Carlo, Gilberto, William, Camila)
- Cards com glassmorphism + estrelas

### 6. Onde Estamos
- 2 colunas: Vitoria (Jardim Camburi) + Vila Velha (Boulevard Shopping)
- Google Maps embed + endereco + CTA de reserva/ligacao

### 7. Instagram Feed
- Embed dos posts recentes do Instagram (@ilhadocaranguejo)
- Grid 2x3 ou 3x2 com fotos do perfil
- Link "Siga-nos no Instagram" como CTA
- Implementacao via Instagram Basic Display API ou embed oEmbed

### 8. Reservas (CTA Banner)
- Banner full-width: "Faca sua reserva"
- Botoes por unidade

### 9. Footer
- Logo + navegacao + redes sociais + links externos
- Links: Instagram, Facebook, Trabalhe Conosco, Promocoes

### Navegacao Flutuante (Pill Nav)
- Aparece ao rolar apos o hero
- Links com smooth scroll + CTA "Reservar"
- Mobile: hamburger -> overlay fullscreen com blur

---

## Animacoes

| Elemento | Animacao |
|---|---|
| Entrada de secoes | `translateY(64px)` + `blur(12px)` -> normal, 800ms |
| Stagger entre filhos | 100ms delay |
| Hero background | Parallax lento |
| Cards hover | `scale(1.02)` + shadow |
| Botoes | `active:scale-[0.98]` (press fisico) |
| Nav | Fade-in de cima ao rolar |
| Mobile menu | Overlay com `backdrop-blur-3xl` + links staggered |
| Grain overlay | Textura sutil fixa `opacity-[0.03]` |
| Splash screen | Logo fade-in + scale -> reveal do hero, ~2s |

Curva de easing global: `cubic-bezier(0.32, 0.72, 0, 1)`

---

## Arquitetura de Componentes

```
src/
  app/
    layout.tsx          -- Fonts, metadata, noise overlay
    page.tsx            -- Monta todas as secoes
    globals.css         -- Tailwind + custom properties
  components/
    layout/
      Navbar.tsx        -- Pill nav flutuante + mobile menu
      Footer.tsx
    sections/
      SplashScreen.tsx  -- Animacao de abertura com logo
      Hero.tsx
      About.tsx
      Specialties.tsx
      Gallery.tsx
      Testimonials.tsx
      Locations.tsx
      Reservation.tsx
      InstagramFeed.tsx -- Grid de posts do Instagram
    ui/
      Button.tsx        -- Button-in-Button pill CTA
      Card.tsx          -- Double-Bezel card wrapper
      SectionWrapper.tsx -- Scroll animation wrapper
      NoiseOverlay.tsx
  lib/
    constants.ts        -- Todo conteudo do site (textos, reviews, links)
    animations.ts       -- Variants do Framer Motion
    fonts.ts            -- Config de fontes
  public/
    images/             -- Logo, fotos, icones (baixados do site atual)
```

---

## Estrategia de Imagens

1. **Baixar do site atual:** logo, icones de especialidades, fotos de comida/ambiente, avatares dos reviewers
2. **Hero:** foto stock de alta qualidade (Unsplash/Pexels) de seafood ou ambiente tropical
3. **Otimizacao:** `next/image` com WebP automatico, `priority` no hero, `placeholder="blur"`
4. **Icones de especialidades:** redesenhar como SVG inline para nitidez

---

## Ordem de Implementacao

### Sprint 1: Fundacao
- Init Next.js + Tailwind + dependencias
- Configurar fontes, cores, constantes, animacoes
- Baixar imagens do site atual
- Layout base (layout.tsx + globals.css + NoiseOverlay)

### Sprint 2: Componentes UI
- Button, Card, SectionWrapper, Badge
- Icones SVG das especialidades

### Sprint 3: Hero + Navegacao
- Hero com parallax e animacoes de entrada
- Navbar flutuante (desktop + mobile)

### Sprint 4: Secoes de Conteudo
- About, Specialties, Gallery, Testimonials, Locations, InstagramFeed, Reservation

### Sprint 5: Footer + Montagem
- Footer, montar page.tsx, smooth scroll, responsividade

### Sprint 6: Polish + Deploy
- SEO (metadata, OpenGraph, structured data)
- Acessibilidade
- Push para GitHub -> Deploy na Vercel (regiao gru1 - Sao Paulo)

---

## Deploy na Vercel

1. `git init` + commit
2. Push para GitHub
3. Importar no Vercel (auto-detecta Next.js)
4. Regiao: `gru1` (SP) para menor latencia
5. Compartilhar URL com o dono do restaurante

---

## Verificacao

- [ ] Lighthouse Performance >90
- [ ] Todas as secoes renderizam corretamente no mobile
- [ ] Animacoes fluidas no scroll
- [ ] Links de reserva (GetInApp) e telefone funcionando
- [ ] Google Maps embeds carregando
- [ ] Deploy na Vercel acessivel via URL publica

---

## Conteudo de Referencia

- Site scrapeado: `.firecrawl/ilhadocaranguejo-home.md`
- Skills de design: `.agents/skills/high-end-visual-design/SKILL.md`, `.agents/skills/design-taste-frontend/SKILL.md`
- Reserva Vitoria: https://widget.getinapp.com.br/g1gEqzkw
- Reserva Vila Velha: tel:(27) 2233-8484
- Instagram: https://www.instagram.com/ilhadocaranguejo/
- Facebook: https://pt-br.facebook.com/ilhadocaranguejovv/
- Vagas: https://grupoilha.vagas.solides.com.br/
