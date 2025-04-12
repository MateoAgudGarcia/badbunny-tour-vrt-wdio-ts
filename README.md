# Visual Regression Testing - Bad Bunny Ticket Sales

This project implements Visual Regression Testing (VRT) for Bad Bunny's latest concert ticket sales website using WebdriverIO (WDIO).

## Overview

This Proof of Concept (PoC) demonstrates the capabilities of WebdriverIO for visual regression testing, focusing on the ticket sales platform for Bad Bunny's most recent concert tour.

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

