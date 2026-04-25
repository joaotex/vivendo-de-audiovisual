# 🚀 Quick Start - Vivendo de Audiovisual

## Passo 1: Instalar dependências

```bash
npm install
```

## Passo 2: Rodar localmente

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) e veja a claquete animada na hero! 🎬

## Passo 3: Deploy no Vercel (Grátis)

### Opção A: Push para GitHub + Vercel Auto Deploy (Recomendado)

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "🎬 Vivendo de Audiovisual - Initial commit"

# 2. Criar repositório no GitHub e fazer push
git remote add origin https://github.com/seu-usuario/vivendo-de-audiovisual
git branch -M main
git push -u origin main

# 3. No site do Vercel (https://vercel.com)
# - Clique em "New Project"
# - Selecione o repositório
# - Clique em "Deploy"
# - Pronto! Seu site está online 🚀
```

### Opção B: Deploy direto com CLI

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Siga as instruções no terminal
```

## ⚙️ Customizações importantes

### 1. Atualizar link do Hotmart

Procure por `href="#"` nos arquivos e atualize:
- `src/app/page.tsx` - Múltiplas CTAs
- `src/components/Hero.tsx` - Botão principal

Troque `#` pelo seu link Hotmart:
```jsx
href="https://pay.hotmart.com/seu-link"
```

### 2. Customizar data do evento

Em `src/components/Countdown.tsx`, atualize:
```typescript
const eventDate = new Date('2025-05-16T09:00:00-03:00')
```

### 3. Adicionar sua foto

Atualize o placeholder do mentor em `src/app/page.tsx`:
```jsx
<img src="daniel.jpg" alt="Daniel Dutra" />
```

## 📱 Testar responsividade

```bash
npm run dev
```

Abra as DevTools do navegador (F12) e teste em diferentes tamanhos de tela.

## 🎨 Modificar cores

Edite `tailwind.config.ts`:
```typescript
colors: {
  accent: '#C8A97E', // Dourado
  charcoal: '#1A1A18', // Preto
  // ...
}
```

## 📊 Verificar performance

```bash
npm run build
npm start
```

## ✅ Checklist antes de ir ao ar

- [ ] Link Hotmart atualizado em todas as CTAs
- [ ] Data do evento correta no countdown
- [ ] Foto do mentor adicionada
- [ ] Cores customizadas (se necessário)
- [ ] Testado no mobile
- [ ] Email de contato atualizado
- [ ] Deploy realizado no Vercel

## 🆘 Troubleshooting

### Porta 3000 já está em uso
```bash
npm run dev -- -p 3001
```

### Erro ao instalar dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vercel não detecta como Next.js
- Certifique-se que `package.json` tem `"next"` como dependência
- Verifique se `next.config.js` existe na raiz

## 📞 Suporte

Para dúvidas sobre:
- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **Vercel**: https://vercel.com/docs

---

**Pronto para lançar seu site?** Siga os passos acima e sua página estará online em minutos! 🎉
