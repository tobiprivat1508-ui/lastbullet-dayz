# LAST BULLET DayZ - Deployment Guide

> Schritt-für-Schritt Anleitung um die Website auf **Vercel** zu deployen.

---

## Voraussetzungen

| Was | Link |
|-----|------|
| GitHub Account | [github.com](https://github.com) |
| Vercel Account | [vercel.com](https://vercel.com) (kostenlos mit GitHub Login) |

---

## Deployment in 3 Schritten

### 1. Repository forken

1. Gehe zu **[github.com/0xGUCCIFER/lastbullet-dayz](https://github.com/0xGUCCIFER/lastbullet-dayz)**
2. Klicke oben rechts auf **`Fork`**
3. Bestaetige mit **`Create fork`**

> Du hast jetzt eine eigene Kopie des Projekts auf deinem GitHub.

---

### 2. Mit Vercel verbinden

1. Gehe zu **[vercel.com](https://vercel.com)** und logge dich mit GitHub ein
2. Klicke auf **`Add New...`** > **`Project`**
3. Finde dein geforktes Repo **`lastbullet-dayz`** und klicke **`Import`**
4. Einstellungen so lassen wie sie sind (Vercel erkennt Astro automatisch)
5. Klicke auf **`Deploy`**

> Fertig! Nach ca. 30 Sekunden ist die Seite live.

---

### 3. Eigene Domain verbinden (optional)

1. Gehe in dein Vercel Projekt > **`Settings`** > **`Domains`**
2. Gib deine Domain ein (z.B. `lastbullet-dayz.eu`)
3. Vercel zeigt dir DNS-Eintraege - trage diese bei deinem Domain-Anbieter ein:

```
Typ:   A
Name:  @
Wert:  76.76.21.21
```

```
Typ:   CNAME
Name:  www
Wert:  cname.vercel-dns.com
```

> DNS-Aenderungen koennen bis zu 24h dauern (meistens aber nur wenige Minuten).

---

## Inhalte aendern

### Lokal bearbeiten

```bash
# Repo klonen
git clone https://github.com/DEIN-USERNAME/lastbullet-dayz.git
cd lastbullet-dayz

# Dependencies installieren
npm install

# Dev-Server starten
npm run dev
```

Die Seite laeuft dann auf **http://localhost:4321**

### Aenderungen live stellen

```bash
git add .
git commit -m "Beschreibung der Aenderung"
git push
```

> Vercel deployed automatisch bei jedem Push - du musst nichts weiter tun.

---

## Projektstruktur (Kurzversion)

```
src/
  components/     <- Alle Seitenabschnitte (Hero, About, Features, ...)
  i18n/           <- Uebersetzungen (Deutsch + Englisch)
  layouts/        <- Seitenlayout (Header, Footer, Meta-Tags)
  pages/
    de/           <- Deutsche Seiten
    en/           <- Englische Seiten
  styles/         <- CSS / Design
public/
  images/         <- Bilder (Logo, etc.)
```

### Haeufige Aenderungen

| Was | Wo |
|-----|----|
| Texte aendern | `src/i18n/ui.ts` |
| Logo tauschen | `public/images/logo.png` ersetzen |
| Discord Link | In `src/components/Contact.astro` und `src/components/Footer.astro` |
| Regeln bearbeiten | `src/components/Rules.astro` |
| Farben anpassen | `src/styles/global.css` (nach `--color-accent` suchen) |

---

## Hilfe

Probleme? Erstelle ein [Issue auf GitHub](https://github.com/0xGUCCIFER/lastbullet-dayz/issues) oder frag auf Discord.
