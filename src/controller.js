import { marked } from "marked";
export const converHtml = (req, res) => {
  const { markdown } = req.body;

  if (!markdown) {
    return res.status(400).send("Markdown input is required");
  }
  const html = marked(markdown);
  res.setHeader("Content-Type", "text/html");
  res.send(html);
};
