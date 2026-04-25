# Vivendo de Audiovisual — Workshop Presencial

Site para o workshop "Vivendo de Audiovisual" com uma claquete animada na hero.

## Tecnologias

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Utility-first CSS
- **TypeScript** - Type safety
- **Vercel** - Hosting

## Começando

### Instalação local

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build

```bash
npm run build
npm start
```

## Deploy no Vercel

### Opção 1: Via GitHub (Recomendado)

1. Inicialize um repositório Git:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push para GitHub:
```bash
git remote add origin <seu-repo-github>
git push -u origin main
```

3. No [Vercel](https://vercel.com):
   - Clique em "New Project"
   - Selecione o repositório GitHub
   - Vercel detectará que é um projeto Next.js
   - Clique em "Deploy"

### Opção 2: Deploy direto com Vercel CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Clapper.tsx         # Claquete SVG animada
│   ├── Hero.tsx            # Seção hero com claquete
│   ├── Countdown.tsx       # Contador regressivo
│   ├── TopBar.tsx          # Barra superior
│   └── Strip.tsx           # Fita de marquee
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Features

- ✨ Claquete SVG animada na hero
- ⏰ Countdown regressivo em tempo real
- 📱 Design responsivo (mobile-first)
- 🎨 Tailwind CSS com tokens de cor customizados
- 🔤 Fonts otimizadas do Google (Playfair Display + DM Sans)
- ♿ Acessível e semântico
- ⚡ Otimizado para performance

## Customização

### Cores

Edite `tailwind.config.ts`:
```typescript
colors: {
  cream: '#F5F0E8',
  'warm-white': '#FDFAF5',
  charcoal: '#1A1A18',
  // ...
}
```

### Data do evento

Altere em `src/components/Countdown.tsx`:
```typescript
const eventDate = new Date('2025-05-16T09:00:00-03:00').getTime()
```

### Links de CTA

Procure por `href="#"` nos componentes e atualize com seus links.

## Licença

© 2025 Vivendo de Audiovisual
# vivendo-de-audiovisual
