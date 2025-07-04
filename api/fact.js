module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = process.env.NOTION_DB;

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!data.results) {
      return res.status(500).json({ error: "No data returned from Notion." });
    }

    const facts = data.results.map(page => {
  return page.properties.Name?.title?.map(t => t.plain_text).join("") || "Invalid structure";
    });

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    res.status(200).json({ fact: randomFact });
  } catch (err) {
    console.error("API Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};