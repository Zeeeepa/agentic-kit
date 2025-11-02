# Claude Package Structure Analysis
**Date:** 2025-11-02
**Task:** Subtask 1.1 - Analyze existing Claude package structure
**Purpose:** Count agents, skills, and identify core components for variant definitions

---

## Summary

**Total Agents:** 13
**Total Skills:** 22
**Resources:** 6 files
**Hooks:** 2 files

---

## Agents (13 total)

Located at: `/home/hamr/Documents/PycharmProjects/agentic-kit/packages/claude/agents/`

### Core Agents for Lite Variant (3 agents)
These are the essential agents that provide foundational AI codegen capabilities:

1. **master.md** - Central coordinator agent
2. **orchestrator.md** - Workflow orchestration agent
3. **scrum-master.md** - Project management and task tracking agent

### All Agents (for Standard and Pro variants)
1. 1-create-prd.md - Product Requirements Document creation
2. 2-generate-tasks.md - Task generation from PRDs
3. 3-process-task-list.md - Task list processing and execution
4. business-analyst.md - Business analysis and requirements gathering
5. full-stack-dev.md - Full-stack development agent
6. holistic-architect.md - Architecture and system design
7. **master.md** - Central coordinator (CORE)
8. **orchestrator.md** - Workflow orchestration (CORE)
9. product-manager.md - Product management agent
10. product-owner.md - Product ownership and prioritization
11. qa-test-architect.md - Quality assurance and testing
12. **scrum-master.md** - Project management (CORE)
13. ux-expert.md - User experience design

---

## Skills (22 total)

Located at: `/home/hamr/Documents/PycharmProjects/agentic-kit/packages/claude/skills/`

### Core Skills for Standard Variant (8 skills)
These 8 skills provide essential document processing and design capabilities as specified in the PRD:

1. **pdf** - PDF document generation and manipulation
2. **docx** - Microsoft Word document processing
3. **xlsx** - Microsoft Excel spreadsheet processing
4. **pptx** - Microsoft PowerPoint presentation creation
5. **canvas-design** - Visual design and canvas creation
6. **theme-factory** - Theme generation and customization
7. **brand-guidelines** - Brand identity and guidelines management
8. **internal-comms** - Internal communications tools and templates

### All Skills (for Pro variant - 22 total)
1. algorithmic-art - Algorithmic art generation
2. artifacts-builder - Artifact creation and management
3. brainstorming - Brainstorming and ideation tools
4. **brand-guidelines** - Brand management (CORE)
5. **canvas-design** - Visual design (CORE)
6. code-review - Code review automation
7. condition-based-waiting - Condition-based workflow control
8. **docx** - Word processing (CORE)
9. **internal-comms** - Internal communications (CORE)
10. mcp-builder - MCP (Model Context Protocol) builder
11. **pdf** - PDF processing (CORE)
12. **pptx** - PowerPoint creation (CORE)
13. root-cause-tracing - Root cause analysis
14. skill-creator - Skill creation framework
15. slack-gif-creator - Slack GIF creation tool
16. systematic-debugging - Systematic debugging approach
17. test-driven-development - TDD methodology implementation
18. testing-anti-patterns - Testing anti-pattern detection
19. **theme-factory** - Theme generation (CORE)
20. verification-before-completion - Verification workflows
21. webapp-testing - Web application testing
22. **xlsx** - Excel processing (CORE)

---

## Resources (6 files)

Located at: `/home/hamr/Documents/PycharmProjects/agentic-kit/packages/claude/resources/`

1. agent-teams.yaml - Agent team definitions and configurations
2. checklists.md - Quality and process checklists
3. data.md - Data templates and structures
4. task-briefs.md - Task brief templates
5. templates.yaml - General templates
6. workflows.yaml - Workflow definitions

---

## Hooks (2 files)

Located at: `/home/hamr/Documents/PycharmProjects/agentic-kit/packages/claude/hooks/`

1. register-agents.js - Agent registration hook for Claude Code
2. session-start.js - Session initialization hook

---

## Variant Definitions (for variants.json)

Based on the analysis, here are the recommended variant configurations:

### Lite Variant
- **Agents:** 3 (master, orchestrator, scrum-master)
- **Skills:** 0 (none)
- **Resources:** All (shared resources are lightweight)
- **Hooks:** All (required for functionality)
- **Use Case:** Minimal installation for basic AI codegen capabilities
- **Target Users:** Users wanting to try Claude Code with minimal footprint

### Standard Variant
- **Agents:** 13 (all agents)
- **Skills:** 8 (pdf, docx, xlsx, pptx, canvas-design, theme-factory, brand-guidelines, internal-comms)
- **Resources:** All
- **Hooks:** All
- **Use Case:** Balanced installation with essential document processing and design capabilities
- **Target Users:** Most users, professional developers, teams

### Pro Variant
- **Agents:** 13 (all agents)
- **Skills:** 22 (all skills)
- **Resources:** All
- **Hooks:** All
- **Use Case:** Complete installation with all capabilities
- **Target Users:** Power users, enterprises, users needing all features

---

## Skill Directory Structure

Each skill is a directory containing multiple files (average 2-3 files per skill):
- Primary skill definition (usually skill.md or similar)
- Supporting templates, examples, or resources
- Documentation or README files

Example structure for `pdf` skill:
```
skills/pdf/
  ├── skill.md (or similar)
  ├── templates/ (optional)
  └── examples/ (optional)
```

---

## File Count Summary

| Component | Lite | Standard | Pro |
|-----------|------|----------|-----|
| Agents    | 3    | 13       | 13  |
| Skills    | 0    | 8        | 22  |
| Resources | 6    | 6        | 6   |
| Hooks     | 2    | 2        | 2   |
| **Total** | **11** | **29** | **43** |

Note: Total counts are for top-level entities (directories for skills, files for others). Actual file counts will be higher due to multiple files within skill directories.

---

## Recommendations for variants.json

1. **Wildcard Selection Pattern:** Use `"*"` for "all items"
   - Example: `"agents": "*"` (selects all 13 agents)

2. **Specific Selection Pattern:** Use array of names for specific items
   - Example: `"agents": ["master", "orchestrator", "scrum-master"]`

3. **Empty Selection Pattern:** Use `[]` for no items
   - Example: `"skills": []` (no skills selected)

4. **Resource and Hook Selection:** Use `"*"` for all variants since they're lightweight and often required

---

## Tool-Specific Adaptations

When creating packages for other tools (Opencode, Ampcode, Droid), consider:

1. **Opencode (CLI-based):**
   - Adapt agent prompts for terminal/CLI workflows
   - Emphasize command-line integration patterns
   - Skills should support CLI output formats

2. **Ampcode (Amplified):**
   - Enhance agents with automation focus
   - Add acceleration-focused skill variations
   - Emphasize productivity and workflow optimization

3. **Droid (Mobile/Android):**
   - Adapt agents for mobile development patterns
   - Include Android-specific skills and templates
   - Mobile UI/UX focused resources

---

## Verification Status

- ✓ Agent count verified: 13 agents found
- ✓ Skill count verified: 22 skills found
- ✓ Core agents identified: master, orchestrator, scrum-master
- ✓ Core skills identified: pdf, docx, xlsx, pptx, canvas-design, theme-factory, brand-guidelines, internal-comms
- ✓ Resources enumerated: 6 files
- ✓ Hooks enumerated: 2 files

---

**Analysis Complete**
**Next Step:** Create variants.json file (Subtask 1.2)
