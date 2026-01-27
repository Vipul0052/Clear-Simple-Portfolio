const { createClient } = require("redis");

let client;
async function getClient() {
  if (!client) {
    client = createClient({ url: process.env.REDIS_URL });
    client.on("error", (err) => console.error("Redis error", err));
    await client.connect();
  }
  return client;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  try {
    const body = req.body || {};
    const slug = typeof body.slug === "string" ? body.slug : "home";
    const key = `views:${slug}`;

    const redis = await getClient();
    const count = await redis.incr(key); // atomic increment

    return res.status(200).json({ count });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "internal" });
  }
};
