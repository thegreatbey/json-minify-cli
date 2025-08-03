#!/usr/bin/env node
import fs from "fs";
import path from "path";

// CLI args
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: json-minify-cli <input.json> [--pretty] [--sort-keys]");
  process.exit(1);
}

const inputFile = args[0];
const pretty = args.includes("--pretty");
const sortKeys = args.includes("--sort-keys");

try {
  const raw = fs.readFileSync(path.resolve(inputFile), "utf-8");
  let json = JSON.parse(raw);

  if (sortKeys && typeof json === "object" && !Array.isArray(json)) {
    json = Object.keys(json)
      .sort()
      .reduce((acc, key) => {
        acc[key] = json[key];
        return acc;
      }, {});
  }

  const output = pretty
    ? JSON.stringify(json, null, 2)
    : JSON.stringify(json);

  console.log(output);
} catch (err) {
  console.error("Error:", err.message);
  process.exit(1);
}
