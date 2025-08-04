\# json-minify-cli

![npm version](https://img.shields.io/npm/v/json-minify-cli)
![downloads](https://img.shields.io/npm/dw/json-minify-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI/CD](https://github.com/thegreatbey/json-minify-cli/actions/workflows/publish.yml/badge.svg)](https://github.com/thegreatbey/json-minify-cli/actions)
[![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)
[![npm install](https://img.shields.io/badge/npm%20install--g%20json--minify--cli-blue)](https://www.npmjs.com/package/json-minify-cli)

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


json-minify-cli input.json --pretty


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



