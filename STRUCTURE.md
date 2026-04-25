# 📁 Estrutura do Projeto

```
vivendo-de-audiovisual/
│
├── 📄 package.json                 # Dependências e scripts
├── 📄 next.config.js               # Configuração Next.js
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 tailwind.config.ts           # Configuração Tailwind CSS
├── 📄 postcss.config.js            # Processamento CSS
├── 📄 vercel.json                  # Configuração Vercel
├── 📄 README.md                    # Documentação principal
├── 📄 QUICK_START.md               # Guia rápido
├── 📄 STRUCTURE.md                 # Este arquivo
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
├── 📄 .env.example                 # Exemplo de variáveis de ambiente
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 layout.tsx           # Layout raiz com fonts
│   │   ├── 📄 page.tsx             # Página inicial (HOME)
│   │   ├── 📄 globals.css          # Estilos globais
│   │   └── 📄 favicon.ico          # Favicon (opcional)
│   │
│   └── 📁 components/
│       ├── 📄 Clapper.tsx          # 🎬 SVG da claquete animada
│       ├── 📄 Hero.tsx             # 🦸 Seção hero com claquete
│       ├── 📄 Countdown.tsx        # ⏰ Contador regressivo
│       ├── 📄 TopBar.tsx           # 📢 Barra superior
│       └── 📄 Strip.tsx            # 🎞️ Fita com marquee
│
└── 📁 public/                      # Arquivos estáticos (imagens, etc)
    └── 📄 daniel.jpg               # Foto do mentor (opcional)
```

## 🎯 Descrição dos arquivos principais

### Core

| Arquivo | Descrição |
|---------|-----------|
| `src/app/page.tsx` | Página principal com todas as seções |
| `src/app/layout.tsx` | Layout raiz, importa fonts do Google |
| `src/app/globals.css` | Estilos globais e animações customizadas |

### Componentes

| Componente | Descrição | Status |
|-----------|-----------|--------|
| `Clapper.tsx` | Claquete SVG com animação | ✅ Pronto |
| `Hero.tsx` | Seção hero com grid + claquete | ✅ Pronto |
| `Countdown.tsx` | Contador regressivo em tempo real | ✅ Pronto |
| `TopBar.tsx` | Aviso de vagas limitadas | ✅ Pronto |
| `Strip.tsx` | Fita com marquee de tópicos | ✅ Pronto |

### Configuração

| Arquivo | Função |
|---------|--------|
| `package.json` | Define dependências e scripts |
| `next.config.js` | Configuração Next.js |
| `tailwind.config.ts` | Tokens de design (cores, fonts, etc) |
| `tsconfig.json` | Configuração TypeScript e path aliases |
| `vercel.json` | Configuração para deploy no Vercel |

## 🔄 Fluxo de dados

```
User visita o site
         ↓
   layout.tsx (carrega fonts do Google)
         ↓
   page.tsx (renderiza as seções)
         ↓
   Componentes são montados:
   ├─ TopBar (barra superior)
   ├─ Countdown (começa a contar)
   ├─ Hero (com Clapper animada)
   ├─ Strip (marquee)
   └─ Seções estáticas
         ↓
   CSS aplicado via Tailwind + globals.css
         ↓
   Animações começam (Clapper, Countdown, etc)
         ↓
   Site completo renderizado ✅
```

## 🎨 System Design

### Cores (em `tailwind.config.ts`)
- **Cream**: `#F5F0E8` - Fundo principal
- **Warm White**: `#FDFAF5` - Fundo secundário
- **Charcoal**: `#1A1A18` - Texto escuro/fundo escuro
- **Accent**: `#C8A97E` - Destaque (dourado)
- **Accent Dark**: `#9E7D52` - Hover/variação

### Fonts
- **Display**: Playfair Display (títulos e headers)
- **Body**: DM Sans (corpo do texto)

### Breakpoints (Tailwind padrão)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🚀 Scripts disponíveis

```bash
npm run dev      # Rodar localmente em localhost:3000
npm run build    # Fazer build otimizado
npm start        # Iniciar servidor de produção
npm run lint     # Verificar código
```

## 📦 Dependências principais

```json
{
  "next": "^15.0.0",        // React framework
  "react": "^19.0.0",       // Library UI
  "react-dom": "^19.0.0",   // DOM rendering
  "tailwindcss": "^4",      // CSS utility
  "typescript": "^5"        // Type safety
}
```

## 🔧 Como adicionar uma nova seção

1. Crie um novo componente em `src/components/MinhaSecao.tsx`
2. Importe em `src/app/page.tsx`
3. Adicione `<MinhaSecao />` onde deseja que apareça
4. Use classes Tailwind para estilo

Exemplo:
```tsx
// src/components/MinhaSecao.tsx
export function MinhaSecao() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold">Título</h2>
        <p className="text-mid">Conteúdo aqui...</p>
      </div>
    </section>
  )
}

// Em src/app/page.tsx
import { MinhaSecao } from '@/components/MinhaSecao'

export default function Home() {
  return (
    <>
      {/* ...outras seções */}
      <MinhaSecao />
    </>
  )
}
```

## 📱 Responsividade

O projeto usa **mobile-first** com Tailwind:
- Base: mobile
- `md:` (768px+): tablets
- `lg:` (1024px+): desktops

Exemplo:
```html
<div className="text-lg md:text-2xl lg:text-4xl">
  Texto que cresce em telas maiores
</div>
```

## ✨ Features implementadas

- ✅ Claquete SVG animada
- ✅ Countdown em tempo real
- ✅ Design responsivo
- ✅ Dark mode ready
- ✅ Performance otimizada
- ✅ SEO friendly
- ✅ Acessível (A11y)
- ✅ TypeScript

## 🎬 Próximos passos

1. Customizar cores (se necessário)
2. Adicionar foto do mentor
3. Atualizar links Hotmart
4. Testar em dispositivos reais
5. Deploy no Vercel
6. Monitorar analytics

---

**Dúvidas?** Veja [QUICK_START.md](./QUICK_START.md) ou [README.md](./README.md)
