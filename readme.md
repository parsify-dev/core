<p align="center">
  <img src="logo.svg" height="128">
  <h2 align="center">Parsify</h2>
  <p align="center">Fast, Extensible parsing engine ⚡<p>
  <p align="center">
	<a href="https://travis-ci.com/parsify-dev/core"><img src="https://travis-ci.com/parsify-dev/core.svg?branch=master" alt="Build Status"></a>
  <a href="https://coveralls.io/github/parsify-dev/core?branch=master"><img src="https://coveralls.io/repos/github/parsify-dev/core/badge.svg?branch=master" alt="Coverage Status"></a>
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>
</p>
</p>

## About

**Parsify** is a parsing engine, that is fast and can be extended using plugins.
It was inspired by [Numi](https://numi.app), a calculator app for macOS.

## Architecture

Parsify is made out of a [lightweight core](https://github.com/parsify-dev/core) and various [plugins](#official-plugins), that can parse different expressions. 

## Demo

You can test Parsify [here](https://parsify.now.sh) :unicorn:

## Official Plugins

Name | Status
---|---
[@parsify/math](https://github.com/parsify-dev/math) | [![Build Status](https://travis-ci.com/parsify-dev/math.svg?branch=master)](https://travis-ci.com/parsify-dev/math) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/math/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/math?branch=master)
[@parsify/currencies](https://github.com/parsify-dev/currencies) | [![Build Status](https://travis-ci.com/parsify-dev/currencies.svg?branch=master)](https://travis-ci.com/parsify-dev/currencies) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/currencies/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/currencies?branch=master)
[@parsify/date](https://github.com/parsify-dev/date) | [![Build Status](https://travis-ci.com/parsify-dev/date.svg?branch=master)](https://travis-ci.com/parsify-dev/date) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/date/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/date?branch=master)
[@parsify/timezone](https://github.com/parsify-dev/timezone) | [![Build Status](https://travis-ci.com/parsify-dev/timezone.svg?branch=master)](https://travis-ci.com/parsify-dev/date) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/timezone/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/timezone?branch=master)

More official plugins coming soon!

## Community made plugins

> Use [create-parsify-plugin](https://github.com/parsify-dev/create-parsify-plugin) to easily create plugins for Parsify!

- [parsify-plugin-covid19](https://github.com/xxczaki/parsify-plugin-covid19)

## License

[MIT](https://opensource.org/licenses/MIT)
