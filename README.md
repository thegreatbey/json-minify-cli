\# json-minify-cli



A lightweight CLI tool to \*\*minify\*\* and \*\*prettify\*\* JSON files with optional key sorting.



---



\## ✨ Features

\- Minify JSON for compact storage or transmission.

\- Prettify JSON with `--pretty` for easy reading.

\- Sort keys alphabetically with `--sort-keys`.

\- Works on \*\*Node.js\*\* across Windows, macOS, and Linux.



---



\## 📦 Installation

```bash

npm install -g json-minify-cli





---



\## 🚀 Usage

```bash

json-minify-cli <input.json> \[options]





---



\## Options

Flag	         Description

--pretty	Output formatted JSON with 2-space indent

--sort-keys	Sort JSON keys alphabetically





---



\## Examples
# Minify JSON

json-minify-cli data.json > data.min.json



\# Prettify JSON

json-minify-cli data.json --pretty



\# Prettify and sort keys

json-minify-cli data.json --pretty --sort-keys



---



