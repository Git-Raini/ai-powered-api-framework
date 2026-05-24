![Playwright](https://img.shields.io/badge/Playwright-Automation-green)

![TypeScript](https://img.shields.io/badge/TypeScript-Framework-blue)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-black)

![API Testing](https://img.shields.io/badge/API-Automation-red)

![Schema Validation](https://img.shields.io/badge/Schema-AJV-orange)

![AI Testing](https://img.shields.io/badge/AI-Assisted_Testing-purple)

# AI-Powered API Testing Framework

Enterprise-grade API automation framework using Playwright + TypeScript with AI-assisted testing workflows.

---

# Features

## API Automation

- GET API validation
- POST API validation
- PUT API validation
- DELETE API validation
- Request chaining
- Dynamic IDs
- Authentication handling
- Token management

---

## Framework Features

- Reusable API client
- Dynamic payload support
- Schema validation
- Utilities layer
- Test tagging
- Retry strategy
- Reporting support

---

## AI-Assisted Testing

- AI Prompt Library
- AI Test Generation
- Enterprise AI Strategy
- AI-generated test scenarios

---

## CI/CD

- GitHub Actions integration
- Automated execution
- Environment handling

---

# Framework Architecture

## Architecture Diagram

(Add framework image later)

```text
Tests
   ↓
Auth Layer
   ↓
API Client Layer
   ↓
Utilities
   ↓
Schema Validation
   ↓
Reporting
   ↓
CI/CD
```

---

# Project Structure

```text
ai-powered-api-framework/
│
├── ai/
│
├── api/
│   └── apiClient.ts
│
├── auth/
│   ├── authService.ts
│   └── tokenManager.ts
│
├── schemas/
│
├── test-data/
│
├── tests/
│
├── utils/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# Execute Tests

Run all:

```bash
npx playwright test
```

Run API suite:

```bash
npx playwright test --grep "@api"
```

Run smoke suite:

```bash
npx playwright test --grep "@smoke"
```

---

# AI Capabilities

This project demonstrates:

- AI-assisted API test generation
- Prompt engineering
- Intelligent edge-case identification
- AI + QA workflow design

---

# Sample Scenarios

- Authentication workflow
- Request chaining
- Dynamic ID extraction
- Schema validation
- User API workflow

---

# Future Enhancements

- Docker support
- OAuth integration
- JWT implementation
- Database validation
- Visual reports
- Slack notifications

---

# Author

Raini Desai

Senior QA Engineer | API Testing | Automation | AI-Assisted QA