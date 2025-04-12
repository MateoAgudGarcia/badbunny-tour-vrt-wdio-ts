# Visual Regression Testing - Bad Bunny Ticket Sales[![WebdriverIO Visual Regression Tests](https://github.com/MateoAgudGarcia/badbunny-tour-vrt-wdio-ts/actions/workflows/wdio-vrt-deployment.yml/badge.svg)](https://github.com/MateoAgudGarcia/badbunny-tour-vrt-wdio-ts/actions/workflows/wdio-vrt-deployment.yml)

This Proof of Concept (PoC) demonstrates the capabilities of WebdriverIO for visual regression testing, focusing on the ticket sales platform for Bad Bunny's most recent concert tour.

## Table of Contents

- [Getting Started](#getting-started)
- [Technical Stack](#technical-stack)
- [Features](#features)
- [Setup](#setup)
- [Reports](#reports)
- [Requirements](#requirements)

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:MateoAgudGarcia/badbunny-tour-vrt-wdio-ts.git
cd badbunny-tour-vrt-wdio-ts
```

## Technical Stack

- Node.js 22+
- TypeScript
- WebdriverIO
- Chrome Browser

## Features

- Automated visual comparison testing
- HTML report generation
- Cross-browser testing support
- TypeScript implementation
- Screenshot comparison analysis

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run visual regression tests:

```bash
npm run wdio
```

## Reports

There are two ways to view the visual regression test results:

1. Generate the visual report:

```bash
npm run report:generate
```

2. Open the generated report in your default browser:

```bash
npm run report:open
```

The test results will be available in the `visual-report` directory, providing detailed visual comparison analysis.

## Requirements

- Node.js 22 or higher
- Chrome browser
- TypeScript support
