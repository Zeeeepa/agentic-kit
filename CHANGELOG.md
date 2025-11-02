# Changelog

All notable changes to Agentic Kit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Community marketplace submissions
- Additional skills for data analysis
- Enhanced testing capabilities
- Performance optimizations

---

## [1.1.0] - 2025-11-02

### Added - Session Persistence & Documentation Consolidation

#### 🔄 Session Persistence (Inspired by superpowers)
- **New `session-start.js` hook** - Auto-loads skills on every Claude Code session start
- **Persistent skills** - Skills now activate automatically without manual intervention
- **Startup banner** - Visual confirmation showing loaded agents and skills
- **Better UX** - Consistent experience across all sessions

#### 📚 Documentation Overhaul
- **Created `KNOWLEDGE_BASE.md`** - Comprehensive reference documentation (all agents, skills, architecture)
- **Streamlined `README.md`** - 70% shorter, focused on quick start
- **Consolidated documentation** - Removed redundant files (AGENTS.md, ARCHITECTURE.md, SKILLS.md)
- **Added `PUBLISHING.md`** - Complete guide for npm and marketplace publishing
- **Created `CHANGELOG.md`** - Version tracking and release notes
- **Fixed agent invocation syntax** - Now using lowercase IDs (e.g., `@product-manager:` not `@ProductManager:`)

#### 🛠️ Infrastructure
- **Added `.claude-plugin/marketplace.json`** - Official marketplace catalog
- **Created `UPDATE_VERSION.sh`** - Automated version management script
- **Created `CLEANUP.sh`** - Documentation cleanup automation
- **Version badges** - Added npm version badge to README

### Changed
- **README structure** - Now focuses on quick start, links to detailed docs
- **npx clarification** - Clearly states npx runs temporarily (doesn't install)
- **Agent invocation** - All examples now use correct lowercase syntax with hyphens

### Fixed
- **Skill count** - Corrected Pro variant from 16 to 14 skills everywhere
- **Repository URLs** - Updated from placeholder to `github.com/amrhas82/agentic-kit`
- **Author info** - Updated to `amrhas82 <avoidaccess@msn.com>`
- **Variant manifests** - Added session-start hook to all variants

### Documentation
- Removed: `AGENTS.md`, `AGENTS_GUIDE.md`, `ARCHITECTURE.md`, `SKILLS.md` (consolidated)
- Updated: `README.md` (streamlined), `QUICK-START.md`, `VARIANTS.md`, `TROUBLESHOOTING.md`
- Added: `KNOWLEDGE_BASE.md`, `PUBLISHING.md`, `CHANGELOG.md`, `UPDATE_VERSION.sh`, `CLEANUP.sh`

---

## [1.0.0] - 2025-11-02

### Added - Initial Release

#### 🚀 Core Features
- **13 Specialized Agents**:
  - Core: Master, Orchestrator, Scrum Master
  - Product: Product Manager, Product Owner, Business Analyst
  - Development: Full-Stack Developer, Holistic Architect, UX Expert, QA Test Architect
  - Workflows: Create PRD, Generate Tasks, Process Task List

- **14 Powerful Skills**:
  - Documents: PDF, DOCX, XLSX, PPTX (Standard & Pro)
  - Design: Canvas Design, Theme Factory, Brand Guidelines, Internal Comms (Standard & Pro)
  - Advanced: Algorithmic Art, Artifacts Builder, MCP Builder, Skill Creator, WebApp Testing, Slack GIF Creator (Pro only)

- **3 Variants**:
  - **Lite**: 3 agents, 0 skills - Minimal footprint
  - **Standard**: 13 agents, 8 skills - Recommended for most users
  - **Pro**: 13 agents, 14 skills - Full feature set

#### 📦 Distribution
- **npm package**: `@amrhas82/agentic-kit`
- **GitHub repository**: `github.com/amrhas82/agentic-kit`
- **Direct installation**: `/plugin add github:amrhas82/agentic-kit`
- **npx support**: `npx @amrhas82/agentic-kit` or `npx agkit`

#### 🔧 Infrastructure
- **Plugin manifests**: Separate manifests for each variant
- **Auto-discovery**: Agents register automatically on plugin load
- **Variant isolation**: Clean separation between Lite/Standard/Pro
- **Hook system**: `register-agents.js` for plugin-load event

#### 📖 Documentation
- **README.md**: Main documentation
- **QUICK-START.md**: 15-minute onboarding guide
- **AGENTS.md**: Complete agent directory
- **SKILLS.md**: Complete skill reference
- **VARIANTS.md**: Variant comparison matrix
- **ARCHITECTURE.md**: Technical architecture
- **TROUBLESHOOTING.md**: Common issues and solutions
- **CONTRIBUTING.md**: Contribution guidelines

#### ✅ Quality
- **Validation script**: Pre-publish validation (`validate-package.js`)
- **Reference checking**: Link validation (`validate-references.sh`)
- **Tested variants**: All 3 variants validated
- **npm published**: Available on npm registry

---

## Version History Summary

| Version | Date | Key Features |
|---------|------|--------------|
| **1.1.0** | 2025-11-02 | Session persistence, docs consolidation, marketplace.json |
| **1.0.0** | 2025-11-02 | Initial release: 13 agents, 14 skills, 3 variants |

---

## Upgrade Guide

### From 1.0.0 to 1.1.0

**No breaking changes!** This is a feature addition and documentation improvement.

**New Features:**
- Skills now auto-load on session start (automatic)
- Streamlined documentation (check new KNOWLEDGE_BASE.md)
- Marketplace.json for easier distribution

**Action Required:**
- None - upgrade is seamless
- Optionally: Update to use lowercase agent syntax (e.g., `@master:` instead of `@Master:`)

**To Upgrade:**
```bash
# Via GitHub
/plugin update github:amrhas82/agentic-kit

# Via npm
npm update @amrhas82/agentic-kit

# Via npx (always latest)
npx @amrhas82/agentic-kit
```

---

## Links

- **GitHub**: https://github.com/amrhas82/agentic-kit
- **npm**: https://www.npmjs.com/package/@amrhas82/agentic-kit
- **Issues**: https://github.com/amrhas82/agentic-kit/issues
- **Releases**: https://github.com/amrhas82/agentic-kit/releases

---

**Maintained by**: amrhas82
**License**: MIT
