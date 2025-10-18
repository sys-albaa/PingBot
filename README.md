# PingBot

🤖 **PingBot** è un bot Discord multipurpose, creato per gestire comandi utili e divertenti come `/ping`, `/uptime`, `/coinflip`, `/addquote` e `/quote`.  
Il bot è progettato con **Discord.js v14** e supporta comandi slash.

---

## ⚡ Funzionalità

- **/ping** → Risponde con "Pong!"  
- **/uptime** → Mostra da quanto tempo il bot è online  
- **/coinflip** → Lancia una moneta (Testa o Croce)  
- **/help** → Mostra i comandi disponibili  
- **/addquote** → Aggiunge una citazione (`/addquote "testo"`)  
- **/quote** → Mostra una citazione casuale dalla chat  

---

## 🗂️ Struttura del progetto

ChatGPT ha detto:

Perfetto Ale 😎 Ti preparo un README.md completo e professionale, adatto da mettere su GitHub per il tuo bot. Include istruzioni di installazione, setup e avvio sia su Windows che su Linux/Debian.

# PingBot

🤖 **PingBot** è un bot Discord multipurpose, creato per gestire comandi utili e divertenti come `/ping`, `/uptime`, `/coinflip`, `/addquote` e `/quote`.  
Il bot è progettato con **Discord.js v14** e supporta comandi slash.

---

## ⚡ Funzionalità

- **/ping** → Risponde con "Pong!"  
- **/uptime** → Mostra da quanto tempo il bot è online  
- **/coinflip** → Lancia una moneta (Testa o Croce)  
- **/help** → Mostra i comandi disponibili  
- **/addquote** → Aggiunge una citazione (`/addquote "testo"`)  
- **/quote** → Mostra una citazione casuale dalla chat  

---

## 🗂️ Struttura del progetto


pingbot/
├── src/
│ ├── commands/
│ │ ├── ping.js
│ │ ├── uptime.js
│ │ ├── coinflip.js
│ │ ├── help.js
│ │ ├── addquote.js
│ │ └── quote.js
│ ├── index.js
│ └── utils.js
├── .env
├── .gitignore
├── package.json
└── README.md

---

## ⚙️ Prerequisiti

- [Node.js LTS](https://nodejs.org) (consigliata versione ≥ 22.x)  
- NPM (viene installato automaticamente con Node.js)  
- Un bot creato su [Discord Developer Portal](https://discord.com/developers/applications)

---

## 🔧 Installazione

1. Clona la repo:
```bash
git clone https://github.com/<tuo-utente>/<nome-repo>.git
cd <nome-repo>
