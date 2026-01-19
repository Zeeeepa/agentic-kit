#!/usr/bin/env node

const message = `
==========================================
  Agentic Kit Installation Complete
==========================================

Next step: Run the interactive installer

  $ agentic-kit

Available tools:
  • Claude Code    - Full-featured AI development assistant
  • OpenCode       - Open-source AI coding tool
  • Ampcode        - Amplified coding agent
  • Droid          - Android-focused development assistant

Each tool offers 3 variants:
  • Lite     - 3 agents (510 KB)
  • Standard - 13 agents + 8 skills (8.4 MB)
  • Pro      - 13 agents + 22 skills (9 MB)

Quick commands:
  agentic-kit              # Interactive installer
  agentic-kit --uninstall  # Remove installed tools

Documentation:
  https://github.com/amrhas82/agentic-kit

==========================================
`;

console.log(message);
