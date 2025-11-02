# Shared Components Directory

**Purpose:** This directory contains common agents, skills, resources, and hooks that can be shared across multiple tools (Claude Code, Opencode, Ampcode, Droid).

**Location:** `/home/hamr/Documents/PycharmProjects/agentic-kit/shared/`

**Created:** 2025-11-02

---

## Directory Structure

```
shared/
├── agents/          # Common agent definitions shared across tools
├── skills/          # Common skill definitions shared across tools
├── resources/       # Common resource files (templates, workflows, etc.)
├── hooks/           # Common hooks for initialization and registration
└── README.md        # This file
```

---

## Component Categories

### 1. Agents (`shared/agents/`)

Common agent definitions that can be used by Claude, Opencode, Ampcode, and Droid with minimal or no modifications. These agents provide core AI codegen capabilities that are tool-agnostic.

**Candidates for sharing:**
- Core workflow agents (master, orchestrator, scrum-master)
- Project management agents (product-owner, product-manager)
- Architecture agents (holistic-architect)
- Quality assurance agents (qa-test-architect)

**Tool-specific agents should remain in package directories:**
- Agents with tool-specific CLI patterns (Opencode)
- Agents with amplified workflow patterns (Ampcode)
- Agents with mobile development focus (Droid)

### 2. Skills (`shared/skills/`)

Common skill definitions that provide functionality across multiple tools. Skills are generally more portable than agents since they focus on specific capabilities.

**Candidates for sharing:**
- Document processing skills (pdf, docx, xlsx, pptx)
- Design skills (canvas-design, theme-factory)
- Development methodology skills (test-driven-development, code-review)
- Communication skills (internal-comms, brand-guidelines)

**Tool-specific skills should remain in package directories:**
- Skills requiring tool-specific integrations
- Skills with platform-specific implementations

### 3. Resources (`shared/resources/`)

Common resource files including templates, workflows, checklists, and data definitions that are universally applicable across tools.

**Common resources include:**
- Generic templates (PRD templates, task templates, documentation templates)
- Common workflows (development workflows, review workflows)
- Quality checklists (code review checklists, testing checklists)
- Data structures and schemas

**Reference files from Claude package:**
- `agent-teams.yaml` - Team configuration patterns
- `checklists.md` - Quality and process checklists
- `data.md` - Common data structures and templates
- `task-briefs.md` - Task brief templates
- `templates.yaml` - General-purpose templates
- `workflows.yaml` - Common workflow definitions

### 4. Hooks (`shared/hooks/`)

Common initialization and registration hooks that can be shared across tools with minimal adaptation.

**Common hooks include:**
- Agent registration patterns
- Session initialization logic
- Configuration loading
- Environment setup

**Reference files from Claude package:**
- `register-agents.js` - Agent registration pattern
- `session-start.js` - Session initialization pattern

---

## Usage Patterns

### Pattern 1: Direct Reference (Symlinks)

Tools can create symlinks to shared components:

```bash
# From a package directory
ln -s ../../shared/agents/master.md agents/master.md
ln -s ../../shared/skills/pdf skills/pdf
```

**Pros:** Changes to shared components automatically propagate
**Cons:** Requires filesystem symlink support

### Pattern 2: Copy with Customization

Tools can copy shared components and customize them:

```bash
# Copy and adapt
cp -r ../../shared/agents/master.md agents/master.md
# Edit agents/master.md for tool-specific needs
```

**Pros:** Full customization freedom, no dependency issues
**Cons:** Changes to shared components don't propagate

### Pattern 3: Variant Configuration Reference

The installer can reference shared components in variants.json:

```json
{
  "lite": {
    "agents": {
      "source": "shared",
      "selection": ["master", "orchestrator", "scrum-master"]
    }
  }
}
```

**Pros:** Single source of truth, efficient storage
**Cons:** Requires installer support (future enhancement)

---

## Current Implementation Strategy

**For this implementation (Phase 1):**
- Each tool package maintains its own complete set of agents, skills, resources, and hooks
- Shared directory serves as a **reference library** and **source of common definitions**
- New tools can copy from shared/ as a starting point
- Common updates can be synchronized manually

**Future Enhancement (Phase 2):**
- Implement installer support for shared component references
- Add variant configuration field for shared vs package-specific components
- Create tooling to sync shared components to packages
- Implement dependency tracking for shared components

---

## Maintenance Guidelines

### When to Add to Shared

Add a component to shared/ when:
1. The component is used by 2+ tools
2. The component is tool-agnostic (no tool-specific patterns)
3. The component provides core functionality (agents, common skills)
4. The component is stable and well-tested

### When to Keep in Package

Keep a component in package directory when:
1. The component is tool-specific (CLI patterns, mobile patterns, etc.)
2. The component requires extensive customization per tool
3. The component is experimental or under active development
4. The component has tool-specific dependencies

### Synchronization Process

To synchronize shared components to packages:

1. **Identify common components** in Claude package (the reference implementation)
2. **Copy to shared/** for reference
3. **Document in this README** which components are shared
4. **Update package variants.json** to note shared components (comments)
5. **Test** shared components with each tool
6. **Propagate updates** manually during maintenance cycles

---

## Component Status

### Agents

| Agent | Claude | Opencode | Ampcode | Droid | Shared | Notes |
|-------|--------|----------|---------|-------|--------|-------|
| master | ✓ | TBD | TBD | TBD | Reference | Core coordinator |
| orchestrator | ✓ | TBD | TBD | TBD | Reference | Workflow orchestration |
| scrum-master | ✓ | TBD | TBD | TBD | Reference | Project management |
| Other agents | ✓ | TBD | TBD | TBD | Reference | Full agent set |

### Skills

| Skill | Claude | Opencode | Ampcode | Droid | Shared | Notes |
|-------|--------|----------|---------|-------|--------|-------|
| pdf | ✓ | TBD | TBD | TBD | Reference | PDF processing |
| docx | ✓ | TBD | TBD | TBD | Reference | Word processing |
| xlsx | ✓ | TBD | TBD | TBD | Reference | Excel processing |
| pptx | ✓ | TBD | TBD | TBD | Reference | PowerPoint creation |
| canvas-design | ✓ | TBD | TBD | TBD | Reference | Visual design |
| theme-factory | ✓ | TBD | TBD | TBD | Reference | Theme generation |
| brand-guidelines | ✓ | TBD | TBD | TBD | Reference | Brand management |
| internal-comms | ✓ | TBD | TBD | TBD | Reference | Communications |
| Other skills | ✓ | TBD | TBD | TBD | Reference | Additional skills |

### Resources

| Resource | Claude | Opencode | Ampcode | Droid | Shared | Notes |
|----------|--------|----------|---------|-------|--------|-------|
| agent-teams.yaml | ✓ | TBD | TBD | TBD | Reference | Team configurations |
| checklists.md | ✓ | TBD | TBD | TBD | Reference | Quality checklists |
| data.md | ✓ | TBD | TBD | TBD | Reference | Data templates |
| task-briefs.md | ✓ | TBD | TBD | TBD | Reference | Task templates |
| templates.yaml | ✓ | TBD | TBD | TBD | Reference | General templates |
| workflows.yaml | ✓ | TBD | TBD | TBD | Reference | Workflow definitions |

### Hooks

| Hook | Claude | Opencode | Ampcode | Droid | Shared | Notes |
|------|--------|----------|---------|-------|--------|-------|
| register-agents.js | ✓ | TBD | TBD | TBD | Reference | Agent registration |
| session-start.js | ✓ | TBD | TBD | TBD | Reference | Session initialization |

**Legend:**
- ✓ = Implemented
- TBD = To be determined/implemented
- Reference = Available in shared/ as reference

---

## Reference Implementation

The **Claude package** serves as the reference implementation. All shared components should be based on Claude's well-tested components, with adaptations as needed for other tools.

**Claude package location:** `/home/hamr/Documents/PycharmProjects/agentic-kit/packages/claude/`

---

## Next Steps

1. **Task 1.4 (Current):** Create shared directory structure ✓
2. **Task 6.0:** Create tool-specific packages (Opencode, Ampcode, Droid)
3. **Task 6.2-6.4:** Copy and adapt components from Claude to other tools
4. **Future:** Implement installer support for shared component references

---

## Documentation References

- **Package Structure Analysis:** `/tasks/ANALYSIS-Claude-Package-Structure.md`
- **Variant Configuration:** Each package's `variants.json`
- **Installation Guide:** `/docs/INSTALLER_GUIDE.md` (to be created)
- **Task List:** `/tasks/tasks-PRD_Interactive_Installer.md`
- **Progress Tracking:** `/tasks/PROGRESS_Interactive_Installer.md`

---

**Last Updated:** 2025-11-02
**Status:** Initial structure created (Task 1.4)
