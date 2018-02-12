# Pokéchopo.io

Website Replica of Tiger Electronics' 1998 Pokédex | ⚡️ 🐭

---

[![web](https://img.shields.io/website-up-down-green-red/https/relztic.github.io/pokechopo.svg?label=web&style=flat-square)](https://relztic.github.io/pokechopo/)
[![build](https://img.shields.io/travis/relztic/pokechopo/master.svg?style=flat-square)](https://travis-ci.org/relztic/pokechopo/)
[![maintainability](https://img.shields.io/codeclimate/maintainability/relztic/pokechopo.svg?style=flat-square)](https://codeclimate.com/github/relztic/pokechopo/maintainability/)
[![coverage](https://img.shields.io/codeclimate/c/relztic/pokechopo.svg?style=flat-square)](https://codeclimate.com/github/relztic/pokechopo/test_coverage/)
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier/)

Pokéchopo allows you to dynamically search the first-generation Pokémon of the original series.

By specifying a set of actions to use the Pokédex.

## Installation

```sh
git clone https://github.com/relztic/pokechopo.git && cd ./pokechopo/ && yarn install
```

## Configuration

Configure `.env.development` based on [`.env.example`](https://github.com/relztic/pokechopo/blob/master/.env.example).

Following is a table of the variables you can use:

| Variable | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| **Core** | | | | |
| `POKECHOPO_ENVIRONMENT` | `string` | `'development'` | `N` | The environment of the application. |
| `POKECHOPO_NAME` | `string` | `'Pokéchopo'` | `N` | The name of the application. |
| `POKECHOPO_VERSION` | `string` | `'0.0.0'` | `N` | The version of the application. |
| **API** | | | | |
| `POKECHOPO_API_URL` | `string` | `undefined` | `Y` | The URL of the API. |
| `POKECHOPO_API_VERSION` | `number` | `undefined` | `Y` | The version of the API. |

## Usage

```sh
yarn run start
```

## Roadmap

  - Support for responsive layout
  - Support for animations
  - Ability to search Pokémon
  - Support for add-ons
  - Support for sound effects

Take 🍰, Folks! 🌮 🐴 💨
