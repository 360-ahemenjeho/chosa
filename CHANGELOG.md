### CHANGELOG.md
```markdown
## [2.0.0] - 2025-01-XX
### BREAKING CHANGES
- Removed default export support
- Package is now ES6 modules only (`"type": "module"`)
- Minimum Node.js version is now 14.0.0

### Migration
- Replace `import init from 'chosa'` with `import { init } from 'chosa'`

### Added
- Modern ES6 module support
- Better bundler compatibility
