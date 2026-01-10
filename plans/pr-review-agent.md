# PR Review Agent - Reuse Checker

## Problem

AI (and sometimes humans) builds functionality from scratch instead of reusing:

1. Existing components from our component library
2. Already-installed npm packages
3. Well-maintained open source alternatives

## Example

Using `@mui/material/Table` + hand-rolled editing instead of `material-react-table` which already has editing built in.

## Scope (starting small)

1. Check PRs against `@cutting/component-library` for existing components
2. Detect `material-react-table` should be used when tables with editing are added
3. Search npm for maintained alternatives when custom code is detected

## What the agent should check

### Internal reuse

- Scan component library for existing components that match what's being built
- Check `package.json` for already-installed packages that cover the need

### External alternatives

- Query npm registry for packages matching the functionality
- Check maintenance status:
  - Last commit/publish date
  - Weekly download count
  - Open vs closed issues ratio
  - Recent releases

## Workflow

```
PR adds custom component
    ↓
Agent detects what's being built
    ↓
Agent checks: component library → existing packages → npm alternatives
    ↓
Flags with suggestion and maintenance data
```

## Hard part

Recognizing _what_ functionality is being built so the agent knows what to search for. Requires semantic understanding, not just pattern matching.

## Status

Planning phase - not yet implemented.
