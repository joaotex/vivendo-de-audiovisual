# ⚡ Comandos Essenciais

## 1️⃣ Instalar dependências (primeira vez)

```bash
npm install
```

## 2️⃣ Rodar localmente (desenvolvimento)

```bash
npm run dev
```

Abra: http://localhost:3000

## 3️⃣ Ver no celular (mesmo WiFi)

```bash
npm run dev
```

Seu IP aparecerá no terminal. Acesse: http://SEU_IP:3000

## 4️⃣ Build de produção

```bash
npm run build
npm start
```

## 5️⃣ Deploy no Vercel (primeira vez)

```bash
# Via CLI
npm install -g vercel
vercel

# Ou: push para GitHub e conectar Vercel via site
git init
git add .
git commit -m "Initial"
git remote add origin https://github.com/seu-usuario/vivendo-audiovisual
git push -u origin main
# Depois vá em vercel.com e importe o repo
```

## 6️⃣ Após fazer deploy, toda vez que mudar código:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
# Vercel faz deploy automático!
```

---

## 🎨 Customizações rápidas

### Trocar cores

Edite `tailwind.config.ts`:
```typescript
colors: {
  accent: '#C8A97E', // dourado
}
```

### Trocar data do evento

Edite `src/components/Countdown.tsx`:
```typescript
const eventDate = new Date('2025-05-16T09:00:00-03:00')
```

### Atualizar links

Procure `href="#"` e troque por seu link Hotmart.

---

## 🆘 Quando algo der errado

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Reiniciar servidor
npm run dev
```

---

## ✅ Checklist simples

- [ ] `npm install` ✓
- [ ] `npm run dev` ✓ (verificar se abre em localhost:3000)
- [ ] Editar links Hotmart ✓
- [ ] `npm run build` ✓ (sem erros)
- [ ] Deploy no Vercel ✓
- [ ] Testar URL pública ✓

---

🎉 **Pronto! Seu site está no ar!**
