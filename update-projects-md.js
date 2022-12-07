#!/usr/bin/env node

const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const DATA_DIR = path.resolve(__dirname, "_data");
let output = "# Overview of DigitalService Projects\n\n";

const filesInData = fs
  .readdirSync(DATA_DIR)
  .filter((file) => file.search("navigation") < 0 && file.endsWith(".yml"));
for (const file of filesInData) {
  try {
    output += `## ${file.replace(".yml", "").toUpperCase()}\n`;
    const doc = yaml.load(fs.readFileSync(path.join(DATA_DIR, file), "utf8"));
    doc.forEach((element) => {
      output += `- [${element.title}](${element.url}) - ${element.description}\n`;
    });
    output += "\n";
  } catch (e) {
    console.log(e);
  }
}
fs.writeFileSync(__dirname + "/projects.md", output);
