function handler(req, res) {
  console.log("hello world");
  if (req.method === "POST") {
    const data = req.body;
    res.status(200).json({ message: "hello world inside" });
  }
  res.status(200).json({ message: "hello world" });
}

export default handler;
