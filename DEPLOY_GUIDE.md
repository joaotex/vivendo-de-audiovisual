# 🚀 Guia de Deploy - Vivendo de Audiovisual

Este guia mostra o passo-a-passo para colocar seu site no ar no Vercel de forma gratuita.

## 📋 Pré-requisitos

- ✅ Node.js 18+ instalado ([download](https://nodejs.org))
- ✅ Conta GitHub ([criar](https://github.com/signup)) - **Recomendado**
- ✅ Conta Vercel ([criar](https://vercel.com/signup))

---

## 🎯 Opção 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar repositório GitHub

1. Acesse https://github.com/new
2. Nome: `vivendo-de-audiovisual`
3. Descrição: `Workshop presencial de audiovisual`
4. Clique em **Create repository**

### Passo 2: Fazer push do código

Na pasta do projeto, execute:

```bash
git init
git add .
git commit -m "🎬 Vivendo de Audiovisual - Initial commit"
git remote add origin https://github.com/seu-usuario/vivendo-de-audiovisual
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Vercel

1. Acesse https://vercel.com
2. Clique em **Add New... → Project**
3. Selecione seu repositório `vivendo-de-audiovisual`
4. Vercel detectará automatically como Next.js
5. Clique em **Deploy**

✅ **Seu site está online!** Vercel gera uma URL automática tipo:
```
https://vivendo-de-audiovisual.vercel.app
```

### Bônus: Deploy automático

Agora, toda vez que você fizer `git push`:
1. Vercel detecta mudanças
2. Faz build automático
3. Deploy automático para produção

---

## 🎯 Opção 2: Deploy direto com Vercel CLI

Se não quiser usar GitHub, pode fazer deploy direto:

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Deploy

Na pasta do projeto:

```bash
vercel
```

Siga as instruções:
1. Escolha uma equipe (ou crie uma)
2. Escolha se linkará com o projeto existente
3. Clique para visitar o site!

---

## 🎯 Opção 3: Deploy via Git (GitHub, GitLab, Bitbucket)

1. Faça push para qualquer plataforma Git
2. Em https://vercel.com clique **Import Project**
3. Cole a URL do repositório
4. Clique **Import**
5. Vercel detectará Next.js automaticamente
6. Clique **Deploy**

---

## ⚙️ Configurações importantes

### Variáveis de Ambiente

Se quiser adicionar seu link Hotmart como variável:

**No Vercel Dashboard:**

1. Vá para seu projeto
2. **Settings → Environment Variables**
3. Adicione:
   - **Name**: `NEXT_PUBLIC_HOTMART_LINK`
   - **Value**: `https://pay.hotmart.com/seu-link`
4. **Save**

**Em seu código:**
```typescript
const hotmartLink = process.env.NEXT_PUBLIC_HOTMART_LINK || '#'
```

### Domain customizado

Para usar seu próprio domínio (ex: `vivendo-audiovisual.com.br`):

1. No Vercel Dashboard → **Settings → Domains**
2. Clique **Add**
3. Digite seu domínio
4. Siga as instruções para atualizar DNS no seu registrador

---

## ✅ Checklist antes de fazer deploy

- [ ] Instalar dependências: `npm install`
- [ ] Rodar localmente: `npm run dev` (verificar se funciona)
- [ ] Atualizar links Hotmart
- [ ] Verificar data do countdown
- [ ] Testar no mobile: `npm run dev` com DevTools abertos
- [ ] Build sem erros: `npm run build`
- [ ] Push para GitHub (se usando Opção 1)
- [ ] Criar projeto no Vercel
- [ ] Deploy realizado!

---

## 🔧 Troubleshooting

### Erro: "Cannot find module 'next'"

```bash
npm install
```

### Erro: "Port 3000 already in use"

```bash
npm run dev -- -p 3001
```

### Build falha no Vercel

1. Vá para **Deployments**
2. Clique no deploy falhado
3. Veja os logs em **Build Logs**
4. Se houver erro TypeScript, fixe localmente com:
   ```bash
   npm run build
   ```
5. Faça push novamente

### Imagens não carregam após deploy

Certifique-se que imagens estão em `public/`:
```
public/
└── daniel.jpg
```

No código:
```jsx
<img src="/daniel.jpg" alt="Daniel" />
```

---

## 📊 Monitorar performance

Após fazer deploy:

1. **Vercel Dashboard** → Seu projeto
2. Aba **Analytics**
3. Monitore:
   - Response time
   - Database operations
   - Cache hits

---

## 🔐 Segurança

✅ **O que o Vercel cuida:**
- HTTPS automático (SSL/TLS)
- DDoS protection
- WAF (Web Application Firewall)
- Certificados renovados automaticamente

---

## 💰 Custos

✅ **Plano Free do Vercel:**
- ✓ Deploy gratuito
- ✓ HTTPS gratuito
- ✓ Domínio vercel.app gratuito
- ✓ Builds ilimitados
- ✓ Até 12 membros da equipe
- ✗ Limites: 100GB/mês de bandwidth

Para 99% dos casos, Free é o suficiente!

---

## 📈 Analytics e SEO

### Google Analytics

1. Crie conta em https://analytics.google.com
2. Pegue seu `MEASUREMENT_ID`
3. Adicione em `src/app/layout.tsx`:

```tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
<script dangerouslySetInnerHTML={{__html: `...`}} />
```

### Search Console

1. Acesse https://search.google.com/search-console
2. Adicione seu domínio
3. Siga as instruções para verificar

---

## 🎉 Após fazer deploy

✅ **Seu site está online!** Agora:

1. **Teste a URL pública** (de diferentes dispositivos)
2. **Compartilhe com amigos** (mobile, desktop, tablet)
3. **Monitore performance** (Analytics)
4. **Atualize SEO** (meta tags, Open Graph)
5. **Configure email** (para receber inscrições)

---

## 🚨 Próximos passos importantes

- [ ] Integrar Hotmart para receber pagamentos
- [ ] Configurar email de confirmação de inscrição
- [ ] Adicionar analytics (Google Analytics)
- [ ] Setup do Google Search Console
- [ ] Registrar domínio customizado
- [ ] Configurar email de suporte
- [ ] Criar FAQ com dúvidas dos inscritos

---

## 📞 Suporte

**Problemas com Vercel?** https://vercel.com/support
**Problemas com Next.js?** https://nextjs.org/docs

---

**Parabéns! 🎉 Seu site está no ar!**

Compartilhe a URL e comece a receber inscrições para seu workshop.
