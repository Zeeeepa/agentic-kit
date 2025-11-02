# Shared Components Index

**Purpose:** Index of all reference components in the shared directory
**Created:** 2025-11-02
**Source:** Claude package (reference implementation)

---

## Overview

This directory contains reference implementations of common components that can be shared across multiple tools. All files have `.ref` extension to indicate they are reference copies, not active components.

**Usage:** Tools can copy these references and customize them for their specific needs.

---

## Reference Files

### Agents (`shared/agents/`)

Core agent definitions that provide foundational AI codegen capabilities:

| File | Description | Source | Size |
|------|-------------|--------|------|
| `master.md.ref` | Central coordinator agent | Claude | 4.1 KB |
| `orchestrator.md.ref` | Workflow orchestration agent | Claude | 5.0 KB |
| `scrum-master.md.ref` | Project management agent | Claude | 3.6 KB |

**Total:** 3 reference agent files (12.7 KB)

**Selection for Lite variant:** All three agents (master, orchestrator, scrum-master) are recommended for minimal installations.

---

### Skills (`shared/skills/`)

Common skill definitions providing specific capabilities:

| Directory | Description | Source | Files |
|-----------|-------------|--------|-------|
| `pdf.ref/` | PDF document generation and manipulation | Claude | Multiple |

**Total:** 1 reference skill directory

**Note:** Skills typically contain multiple files (skill definition, templates, examples). Additional core skills (docx, xlsx, pptx, canvas-design, theme-factory, brand-guidelines, internal-comms) can be copied from Claude package as needed.

---

### Resources (`shared/resources/`)

Common resource files including templates, workflows, and configurations:

| File | Description | Source | Size |
|------|-------------|--------|------|
| `agent-teams.yaml.ref` | Team configuration patterns | Claude | 1.4 KB |
| `workflows.yaml.ref` | Common workflow definitions | Claude | 54.0 KB |

**Total:** 2 reference resource files (55.4 KB)

**Additional resources available in Claude package:**
- `checklists.md` - Quality and process checklists (67.1 KB)
- `data.md` - Common data structures (46.2 KB)
- `task-briefs.md` - Task brief templates (141.3 KB)
- `templates.yaml` - General templates (179.1 KB)

---

### Hooks (`shared/hooks/`)

Common initialization and registration hooks:

| File | Description | Source | Size |
|------|-------------|--------|------|
| `register-agents.js.ref` | Agent registration pattern | Claude | 3.0 KB |
| `session-start.js.ref` | Session initialization pattern | Claude | 4.1 KB |

**Total:** 2 reference hook files (7.1 KB)

---

## Usage Instructions

### To Copy a Reference Component

```bash
# Copy an agent
cp shared/agents/master.md.ref packages/{tool}/agents/master.md

# Copy a skill
cp -r shared/skills/pdf.ref packages/{tool}/skills/pdf

# Copy a resource
cp shared/resources/workflows.yaml.ref packages/{tool}/resources/workflows.yaml

# Copy a hook
cp shared/hooks/register-agents.js.ref packages/{tool}/hooks/register-agents.js
```

### To Customize a Component

1. Copy the reference file to your tool package
2. Remove the `.ref` extension
3. Edit the file to adapt for your tool's specific needs:
   - Update tool-specific patterns (CLI for Opencode, mobile for Droid)
   - Adjust language and terminology
   - Add tool-specific features
   - Update file paths and references

### Example: Adapting for Opencode

```bash
# Copy reference
cp shared/agents/master.md.ref packages/opencode/agents/master.md

# Edit for CLI-specific patterns
# - Add terminal/command-line references
# - Update prompts for CLI workflow
# - Add Opencode-specific features
```

---

## Component Relationships

### Agent Dependencies

- **master.md** → Coordinates all other agents
- **orchestrator.md** → Manages workflow execution, depends on master
- **scrum-master.md** → Task tracking, reports to master and orchestrator

### Skill Categories

- **Document Processing:** pdf, docx, xlsx, pptx (Core skills for Standard variant)
- **Design:** canvas-design, theme-factory (Visual/creative skills)
- **Communication:** internal-comms, brand-guidelines (Business skills)
- **Development:** test-driven-development, code-review (Engineering skills)

### Resource Types

- **Configuration:** agent-teams.yaml (Team setup)
- **Process:** workflows.yaml, checklists.md (Workflow definitions)
- **Templates:** templates.yaml, task-briefs.md, data.md (Reusable templates)

### Hook Integration

- **register-agents.js** → Loads and registers agents at startup
- **session-start.js** → Initializes session context and environment

---

## Tool-Specific Adaptation Guide

### Claude Code (Reference Implementation)
**Status:** Complete
**Location:** `/packages/claude/`
**Components:** All components fully implemented
**Use Case:** Conversational AI assistant with rich agent ecosystem

### Opencode (CLI-Optimized)
**Status:** Partial
**Location:** `/packages/opencode/`
**Adaptations Needed:**
- Adapt agent prompts for terminal/CLI workflows
- Emphasize command-line integration patterns
- Update skills for CLI output formats
- Add shell script integration

### Ampcode (Amplified Workflows)
**Status:** Partial
**Location:** `/packages/ampcode/`
**Adaptations Needed:**
- Enhance agents with automation focus
- Add acceleration-focused variations
- Emphasize productivity patterns
- Add workflow amplification features

### Droid (Mobile/Android)
**Status:** Partial
**Location:** `/packages/droid/`
**Adaptations Needed:**
- Adapt agents for mobile development
- Add Android-specific patterns
- Include mobile UI/UX resources
- Add Android Studio integration

---

## Maintenance

### Adding New Reference Files

1. **Identify candidate:** Component used by 2+ tools, tool-agnostic, stable
2. **Copy from Claude:** Copy the latest version from Claude package
3. **Add .ref extension:** Mark as reference file
4. **Update this index:** Add entry to appropriate section
5. **Update README:** Update component status table

### Updating Reference Files

1. **Update Claude version:** Make changes in Claude package first
2. **Test thoroughly:** Ensure changes work in Claude
3. **Sync to shared:** Copy updated version to shared directory
4. **Update index:** Note version/date of update
5. **Notify tools:** Document that update is available

### Deprecating Reference Files

1. **Mark as deprecated:** Add DEPRECATED prefix to filename
2. **Update index:** Note deprecation date and reason
3. **Provide migration path:** Document replacement or alternative
4. **Remove after grace period:** Delete after all tools have migrated

---

## Statistics

### Current Status (2025-11-02)

| Category | Reference Files | Total Size | Source |
|----------|----------------|------------|--------|
| Agents | 3 files | 12.7 KB | Claude |
| Skills | 1 directory | ~10 KB | Claude |
| Resources | 2 files | 55.4 KB | Claude |
| Hooks | 2 files | 7.1 KB | Claude |
| **Total** | **8 items** | **~85 KB** | Claude |

### Available in Claude (Not Yet Copied)

| Category | Additional Files | Total Size |
|----------|-----------------|------------|
| Agents | 10 files | ~45 KB |
| Skills | 21 directories | ~500 KB |
| Resources | 4 files | ~434 KB |
| Hooks | 0 files | 0 KB |
| **Total** | **35 items** | **~979 KB** |

---

## Future Enhancements

### Phase 2: Installer Integration
- Add variant configuration field for shared component references
- Implement symbolic linking or direct installation from shared/
- Add shared component version tracking
- Implement automatic update propagation

### Phase 3: Component Registry
- Create component metadata (version, dependencies, compatibility)
- Build component search and discovery
- Add component validation and testing
- Implement component marketplace concept

### Phase 4: Dynamic Loading
- Support runtime loading of shared components
- Add hot-reloading for shared component updates
- Implement component dependency resolution
- Add component conflict detection

---

## References

- **Main README:** `/shared/README.md`
- **Package Analysis:** `/tasks/ANALYSIS-Claude-Package-Structure.md`
- **Progress Tracking:** `/tasks/PROGRESS_Interactive_Installer.md`
- **Task List:** `/tasks/tasks-PRD_Interactive_Installer.md`

---

**Last Updated:** 2025-11-02
**Status:** Initial reference library created (Task 1.4)
**Next:** Tool-specific package creation (Task 6.0)
