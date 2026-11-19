import fs from "node:fs";

const readmePath = process.env.README_PATH || "README.md";
const readme = fs.readFileSync(readmePath, "utf8");

const startMarker = "<!-- GUESTBOOK:START -->";
const endMarker = "<!-- GUESTBOOK:END -->";
const startIdx = readme.indexOf(startMarker);
const endIdx = readme.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error("Guestbook markers not found in README.md");
  process.exit(1);
}

const rawTitle = (process.env.ISSUE_TITLE || "")
  .replace(/^guestbook:\s*/i, "")
  .trim();

const rawBody = (process.env.ISSUE_BODY || "")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("<!--") && !line.startsWith("#"))
  .join(" ");

const rawMsg = rawBody || rawTitle || "Stopped by the profile!";
const cleanMsg = rawMsg
  .replace(/[<>|`*_\[\]]/g, "")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 120);

const user = (process.env.ISSUE_USER || "visitor").replace(/[^a-zA-Z0-9-]/g, "");
const date = new Date().toISOString().slice(0, 10);
const newRow = `| [@${user}](https://github.com/${user}) | ${cleanMsg} | \`${date}\` |`;

const currentBlock = readme.slice(startIdx + startMarker.length, endIdx);
const existingRows = currentBlock
  .split(/\r?\n/)
  .filter((line) => line.startsWith("| [@"));

const updatedRows = [newRow, ...existingRows].slice(0, 8);
const table = [
  "",
  "| Visitor | Note | Date |",
  "| :--- | :--- | ---: |",
  ...updatedRows,
  "",
].join("\n");

const nextReadme =
  readme.slice(0, startIdx + startMarker.length) +
  table +
  readme.slice(endIdx);

if (process.env.DRY_RUN === "1") {
  console.log(table);
} else {
  fs.writeFileSync(readmePath, nextReadme, "utf8");
  console.log(`Added guestbook entry for @${user}`);
}
