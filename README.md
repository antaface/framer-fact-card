# 🧠 Framer Fact Card

A code component for [Framer](https://framer.com) that displays a random science, nature, or space fact — pulled from a Notion database via a Vercel-hosted API.

Built entirely by a designer (not a dev) who wanted to make something fun, weird, and knowledgey for the footer of her site.

---

## 🌐 Demo

- 🧪 [Live Website (It's in the footer!)](https://antarabasu.com/)
- 📖 [Substack Post](https://open.substack.com/pub/anterface/p/i-taught-my-portfolio-to-speak?r=5d7yh1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true)

---

## 🚀 How It Works

- The API is hosted on Vercel and fetches a random fact from a Notion database.
- The Framer code component displays that fact and animates it on page load.
- A link lets users load another fact without reloading the page.

---

## 🛠 Usage

### 1. Add the Framer component

- Open the `framer/FactCard.tsx` file in this repo.
- Copy all the code.
- In your own Framer project, create a new **Code Component** and paste it in.
- Customize styles like font size, icon size, and layout via the right-hand properties panel.

### 2. Use the API

The component fetches data from a live API hosted on Vercel:

```
https://websitefacts.vercel.app/api/fact
```

If you’re just using the public version, you’re all set!

---

## 🔄 Want to use your own Notion database?

You can! Here's how:

1. **Set up your Notion database**
   - Create a database with a column titled `Fact`
   - Fill it with interesting facts

2. **Fork this repo or copy `/api/fact.js`**
   - Replace the `NOTION_TOKEN` and `DATABASE_ID` with your own
   - Add those as environment variables in Vercel

3. **Deploy to Vercel**
   - Connect your GitHub repo to [Vercel](https://vercel.com)
   - Add `NOTION_TOKEN` and `DATABASE_ID` under your project → Settings → Environment Variables
   - Vercel will auto-deploy and give you your new API URL

4. **Update the API URL in your Framer component**

---

## 📦 Repo Structure

```
framer-fact-card/
├── api/
│   └── fact.js         → Vercel API function
├── framer/
│   └── FactCard.tsx    → Framer code component
├── README.md           → You’re reading this!
```

---

## 📒 Credits

- Designed + built in [Framer](https://framer.com)
- Powered by [Notion](https://notion.so) and [Vercel](https://vercel.com)
- Animated with love by [@antaface](https://github.com/antaface)

---

## 🪪 License

MIT – free to reuse and remix. A link back is appreciated.
