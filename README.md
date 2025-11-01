# Agentic Toolkit

A comprehensive toolkit for AI-driven software development featuring 13 specialized agents and 16 powerful skills for product management, architecture, development, design, and quality assurance.

## Overview

The Agentic Toolkit provides an ultra-lean, modular structure designed for flexibility and scalability:

```
agentic-kit/
├── agents/                    (13 agent definitions)
├── skills/                    (16 extensible skills)
├── resources/                 (Consolidated content & templates)
├── hooks/                     (Auto-discovery mechanisms)
└── .claude-plugin/            (Plugin manifests & configuration)
```

## Quick Start

### Installation

The toolkit comes in three variants - choose the one that fits your needs:

- **Lite** - 3 core agents, minimal dependencies
- **Standard** - 13 agents + 8 core skills (recommended)
- **Pro** - 13 agents + all 16 skills

### Configuration

Plugin manifests are located in `.claude-plugin/`:

- `plugin.json` - Main configuration (references Standard as default)
- `plugin-lite.json` - Lite variant configuration
- `plugin-standard.json` - Standard variant configuration
- `plugin-pro.json` - Pro variant configuration

## Architecture

### Agents

13 specialized agents working together:

- **Master** - Central orchestration
- **Orchestrator** - Workflow management
- **Product Manager** - Product strategy
- **Product Owner** - Requirements management
- **Business Analyst** - Business analysis
- **Full-Stack Developer** - Implementation
- **Holistic Architect** - System design
- **UX Expert** - User experience
- **QA Test Architect** - Quality assurance
- **Scrum Master** - Project coordination
- **Create PRD** - Document generation
- **Generate Tasks** - Task decomposition
- **Process Task List** - Task tracking

### Skills

Expandable skill library (8 core in Standard, all 16 in Pro):

**Document Processing:** PDF, DOCX, XLSX, PPTX
**Design & Content:** Canvas Design, Theme Factory, Brand Guidelines, Internal Communications
**Advanced:** MCP Builder, Skill Creator, Web App Testing, Slack GIF Creator, Algorithmic Art, Artifacts Builder

### Auto-Discovery

The `hooks/register-agents.js` mechanism automatically:

1. Scans the `agents/` directory
2. Extracts metadata from agent markdown files
3. Registers agents in the context registry
4. Enables agent auto-invocation

## Development

### Adding New Agents

1. Create a new markdown file in `agents/`
2. Follow the standard agent format with metadata sections
3. The auto-discovery mechanism will automatically register it

### Adding New Skills

1. Create a new directory in `skills/`
2. Add skill documentation and implementation
3. Update the appropriate variant manifest(s) in `.claude-plugin/`

### Resources

Shared resources are consolidated in `resources/`:
- Templates and reusable content
- Utility functions and helpers
- Data definitions and models

## Manifests

Each variant has a dedicated manifest declaring:

- Plugin name, version, and description
- List of included agents with metadata
- List of included skills with descriptions
- Hook references and configuration
- Resource paths and types

The main `plugin.json` provides an overview and references all variants.

## Project Structure

```
.claude-plugin/
├── plugin.json                (Main configuration)
├── plugin-lite.json           (Lite variant)
├── plugin-standard.json       (Standard variant)
└── plugin-pro.json            (Pro variant)

agents/
├── master.md
├── orchestrator.md
├── product-manager.md
├── ... (10 more agents)
└── 3-process-task-list.md

skills/
├── pdf/
├── docx/
├── xlsx/
├── ... (13 more skills)
└── template-skill/

resources/
├── templates/
├── data/
├── utils/
└── checklists/

hooks/
└── register-agents.js
```

## Documentation

Detailed documentation for each component will be expanded in subsequent phases:

- **Phase 2:** Content consolidation
- **Phase 3:** Integration setup
- **Phase 4:** Documentation enhancement
- **Phase 5:** Testing framework
- **Phase 6:** Final documentation

---

**Version:** 1.0.0
**Status:** Phase 1 - Foundation Setup Complete
