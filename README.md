# Agentic Kit

> **AI-powered development toolkit with 13 specialized agents and 14 skills for end-to-end software development**

[![npm version](https://img.shields.io/npm/v/@amrhas82/agentic-kit)](https://www.npmjs.com/package/@amrhas82/agentic-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive toolkit featuring specialized AI agents and powerful skills for product management, agile development, content creation, and design.

---

## 🚀 Quick Start

### 1. Choose Your Variant

| Variant | Agents | Skills | Best For |
|---------|--------|--------|----------|
| **Lite** | 3 | 0 | Minimal setup, CI/CD pipelines |
| **Standard** ⭐ | 13 | 8 | Most users, general development |
| **Pro** | 13 | 14 | Advanced users, full feature set |

### 2. Install

**Claude Code (Recommended):**
```bash
/plugin add github:amrhas82/agentic-kit
```

**npx (Run without installing):**
```bash
npx @amrhas82/agentic-kit
npx agkit --variant=lite
```

### 3. Start Using

```bash
# Get help
@master: help

# Create a Product Requirements Document
@product-manager: Create a PRD for a task management app

# Generate development tasks
@generate-tasks: Break down this feature into tasks

# Process task list
@process-task-list: Execute this task list
```

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| **[KNOWLEDGE_BASE.md](docs/KNOWLEDGE_BASE.md)** | Complete reference: all agents, skills, architecture |
| **[QUICK-START.md](docs/QUICK-START.md)** | 15-minute onboarding guide |
| **[VARIANTS.md](docs/VARIANTS.md)** | Compare variants and choose the right one |
| **[TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)** | Common issues and solutions |
| **[CONTRIBUTING.md](docs/CONTRIBUTING.md)** | Contribution guidelines |
| **[PUBLISHING.md](docs/PUBLISHING.md)** | Publishing guide for maintainers |

---

## ⚙️ Installation Options

### Option 1: Claude Code via GitHub ⭐

Install directly from GitHub (no marketplace approval needed):

```bash
/plugin add github:amrhas82/agentic-kit
```

**Advantages:** Instant access, always latest version, no waiting

### Option 2: npx (Run Temporarily)

Run the CLI without installing (doesn't install to your system):

```bash
# Standard variant
npx @amrhas82/agentic-kit

# Other variants
npx agkit --variant=lite
npx agkit --variant=pro
```

**Note:** `npx` downloads and runs the package temporarily. Nothing is installed permanently. Use Option 3 (npm install) for permanent installation.

### Option 3: npm Install

```bash
npm install @amrhas82/agentic-kit
```

### Option 4: Marketplace

```bash
/plugin marketplace add github:amrhas82/agentic-kit
```

---

## 🤖 What's Included

### Agents (13 Total)

**Core Orchestration:**
- Master - Central coordination
- Orchestrator - Workflow management
- Scrum Master - Agile project management

**Product & Requirements:**
- Product Manager - Strategy and vision
- Product Owner - Backlog management
- Business Analyst - Requirements analysis

**Development:**
- Full-Stack Developer - Implementation
- Holistic Architect - System design
- UX Expert - Interface design
- QA Test Architect - Quality assurance

**Specialized Workflows:**
- Create PRD - Generate product requirements
- Generate Tasks - Break down features
- Process Task List - Execute task lists

[See full agent details →](docs/KNOWLEDGE_BASE.md#agents)

### Skills (14 Total)

**Document Generation (Standard & Pro):**
- PDF, DOCX, XLSX, PPTX

**Design & Branding (Standard & Pro):**
- Canvas Design, Theme Factory, Brand Guidelines, Internal Communications

**Advanced (Pro Only):**
- Algorithmic Art, Artifacts Builder, MCP Builder, Skill Creator, WebApp Testing, Slack GIF Creator

[See full skill details →](docs/KNOWLEDGE_BASE.md#skills)

---

## 🔧 Key Features

- **✅ Persistent Skills** - Auto-load on session start
- **✅ Variant Isolation** - Clean separation between tiers
- **✅ Auto-Discovery** - Agents register automatically
- **✅ Rich Documentation** - Comprehensive guides and examples
- **✅ Production-Ready** - Battle-tested workflows

---

## 💡 Example Workflows

**Create a Product:**
```
@product-manager: Create a PRD for a mobile expense tracker
@generate-tasks: Generate implementation tasks from the PRD
@full-stack-dev: Implement the first task
```

**Generate Documents:**
```
@master: Create a PDF report of our Q4 metrics
@master: Generate a branded PowerPoint for the board meeting
```

**Design & Branding:**
```
@ux-expert: Create wireframes for the login flow
@master: Apply our brand guidelines to this design
```

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

**Quick contribution:**
1. Fork the repo
2. Create a feature branch
3. Add your agent or skill
4. Submit a pull request

---

## 📊 Stats

- **13** Specialized Agents
- **14** Powerful Skills
- **3** Variants (Lite/Standard/Pro)
- **MIT** License
- **Production-Ready**

---

## 🔗 Links

- **npm:** https://www.npmjs.com/package/@amrhas82/agentic-kit
- **GitHub:** https://github.com/amrhas82/agentic-kit
- **Issues:** https://github.com/amrhas82/agentic-kit/issues
- **Knowledge Base:** [KNOWLEDGE_BASE.md](docs/KNOWLEDGE_BASE.md)

---

## 📄 License

MIT © 2025 amrhas82

---

**Need help?** Check [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) or [open an issue](https://github.com/amrhas82/agentic-kit/issues)
