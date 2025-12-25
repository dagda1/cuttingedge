# Windsurf AI Assistant Instructions — Harbour Frontend

## Repository Architecture & Standards

**Monorepo Structure:**

- Managed with pnpm workspaces + Volta for Node.js version management
- Built with React 19 + TypeScript + Vite
- UI Framework: Material-UI (MUI) v6 with custom theming
- State Management: Zustand + @tanstack/react-query for server state
- Data Fetching: URQL (GraphQL) + Xior (REST APIs)
- Testing: Vitest for unit tests, Storybook for component development

**Repository Structure:**

```
harbour-frontend/
├── apps/
│   ├── frontend/           # Main harbour application
│   ├── ithealth/           # IT Health module
│   └── mentor/             # Mentor module
├── packages/
│   ├── component-library/  # Shared UI components (atoms, molecules, organisms)
│   ├── theme/              # MUI theme and palettes
│   ├── core/               # Core utilities and types
│   └── application/        # Application-wide logic
└── types/
    └── mui.d.ts           # Extended MUI type definitions
```

## Component Architecture - Atomic Design

**Strict Component Hierarchy:**

- **Atoms**: Basic building blocks (Button, Input, Typography, Icon)
- **Molecules**: Combinations of atoms (SearchBox, FormField, CardHeader)
- **Templates**: Complex UI sections and layouts (Header, Sidebar, DataTable)
- **Pages**: Route-specific components with business logic

**Component Structure Rules:**

```
components/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   ├── styles.ts
│   │   └── index.ts
│   └── Input/
├── molecules/
│   ├── SearchBox/
│   │   ├── SearchBox.tsx
│   │   ├── SearchBox.test.tsx
│   │   ├── SearchBox.stories.tsx
│   │   ├── styles.ts
│   │   └── index.ts
│   └── FormField/
├── templates/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx
│   │   ├── Header.stories.tsx
│   │   ├── styles.ts
│   │   └── index.ts
│   └── DataTable/
└── pages/
    ├── DashboardPage/
    │   ├── DashboardPage.tsx
    │   ├── DashboardPage.test.tsx
    │   ├── styles.ts
    │   └── index.ts
    └── SettingsPage/
```

## Hooks Architecture

**Custom Hooks Organization:**

Hooks are organized by feature domain and follow React Query patterns for server state management.

```
hooks/
├── workItems/                    # Work Items feature hooks
│   ├── useWorkItems.ts          # List/search work items
│   ├── useWorkItem.ts           # Single work item CRUD
│   ├── useMutateWorkItem.ts     # Create/update/delete mutations
│   ├── useComments.ts           # Comment operations
│   ├── useRelations.ts          # Work item relations
│   ├── useTags.ts               # Tag management
│   ├── useWatchers.ts           # Watcher management
│   ├── useActivityLog.ts        # Activity log & count
│   ├── useTeamStats.ts          # Team statistics
│   └── useWorkItemsUrlState.ts  # URL state management
├── useCurrentUser.ts            # Current user context
├── useGetTeamMembers.ts         # Team member fetching
└── [feature]/                   # Other feature-specific hooks
```

**Hook Development Rules:**

- **Use `urls` from `@intact/core`**: Import `urls` and use `urls.WorkItems` etc. for API endpoints
- **Use `xior` from `@intact/core`**: Use xior for HTTP requests, not fetch
- **Query invalidation**: Always invalidate related queries on mutation success (including `activityLog` and `activityCount`)
- **Error handling**: Use React Query's error states, don't swallow errors
- **Optimistic updates**: Consider for better UX on mutations
- **Query keys**: Use consistent, hierarchical query keys (e.g., `['workItem', id]`, `['workItems']`)
- **No hardcoded colors**: Use theme palette references (e.g., `'success.main'` not `'#4caf50'`)
- **TypeScript types**: Explicit return types for all hooks

**Query Invalidation Pattern:**

```typescript
onSuccess: (_, { workItemId }) => {
  queryClient.invalidateQueries({ queryKey: ['workItem', workItemId] });
  queryClient.invalidateQueries({ queryKey: ['workItems'] });
  // Always refresh activity log and count
  queryClient.invalidateQueries({ queryKey: ['activityLog', workItemId] });
  queryClient.invalidateQueries({ queryKey: ['activityCount', workItemId] });
},
```

**Hook Compliance Checklist:**

- [ ] Uses `urls` from `@intact/core` for API endpoints
- [ ] Uses `xior` for HTTP requests
- [ ] Proper query key structure
- [ ] Activity log/count invalidation on mutations
- [ ] No hardcoded colors (use theme palette)
- [ ] TypeScript types for all returns
- [ ] Unit tests for mutation hooks

## TypeScript & React Conventions

**Import Rules (enforced by ESLint):**

- **No `import type { JSX } from 'react'`** — Use inline `JSX.Element` instead
- **No `React.*` namespace** — Import types directly: `import type { MouseEvent, SetStateAction } from 'react'`
- **Direct event types** — Use `MouseEvent`, `ChangeEvent`, `KeyboardEvent` etc., not `React.MouseEvent`

```typescript
// ✅ GOOD
import type { MouseEvent, ChangeEvent } from 'react';

const handleClick = (event: MouseEvent<HTMLButtonElement>) => { ... };

// ❌ BAD
import type { JSX } from 'react';

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { ... };
```

**Schema & Validation (coding convention):**

- **Use Zod for schemas** — Define data shapes with Zod schemas, infer TypeScript types from them
- **Validate hook data** — API response data in hooks should be validated with Zod schemas

```typescript
// ✅ GOOD - Zod schema with inferred type
import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

type User = z.infer<typeof UserSchema>;

// In hooks, validate API responses
const data = UserSchema.parse(response.data);
```

## Code Standards & Practices

**Component Development Rules:**

- **No comments** - No inline comments, no JSDoc comments, no TODO comments. Code should be self-documenting through clear variable names and logical structure. This applies to all files: components, hooks, utils, pages, etc.
- **Keep components small** - max 100 lines, single responsibility
- **Human readable** - clear variable names, logical structure
- **Atomic design** - strict adherence to atom/molecule/template hierarchy
- **TypeScript strict** - explicit typing for all props and returns

**Required Files for Every Component:**

1. `Component.tsx` - Main component implementation
2. `Component.test.tsx` - Unit tests with React Testing Library
3. `Component.stories.tsx` - Storybook stories for all variants
4. `styles.ts` - Separated styling with theme-aware colors
5. `index.ts` - Barrel export for clean imports

**Code Quality Standards:**

```typescript
// ✅ GOOD - Clean, self-explanatory code
export const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  const theme = useTheme();

  return (
    <Card sx={styles.card}>
      <Typography variant="h6">{user.name}</Typography>
      <Button onClick={() => onEdit(user.id)}>Edit</Button>
    </Card>
  );
};

// ❌ BAD - No inline comments needed
export const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  // Get theme for styling
  const theme = useTheme();

  return (
    <Card sx={styles.card}>
      {/* Display user name */}
      <Typography variant="h6">{user.name}</Typography>
      {/* Edit button for user */}
      <Button onClick={() => onEdit(user.id)}>Edit</Button>
    </Card>
  );
};
```

## Shared Functions & Utilities

**DRY Principle:** Extract duplicated functions across components to shared utils (e.g., avatar colors, name formatting, data transformations)

## Styling Architecture

**Strict Styling Rules:**

- **Separate styles files** - Never inline styles in components
- **Use palette colors only** - No hardcoded colors, always from theme
- **Theme-aware styling** - Access colors via `theme.palette`
- **Consistent patterns** - Follow existing component styling

**styles.ts Structure:**

```typescript
import type { Theme } from "@mui/material/styles";

export const styles = {
  card: (theme: Theme) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  }),

  title: {
    color: (theme: Theme) => theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: (theme: Theme) => theme.spacing(1),
  },

  button: {
    backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    color: (theme: Theme) => theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: (theme: Theme) => theme.palette.secondary.dark,
    },
  },
};
```

**Color Usage Guidelines:**

- Always use (theme: Theme) => theme.palette.secondary.main etc.
- Use semantic colors: `theme.palette.error.main`, `theme.palette.success.main`
- Never hardcode colors like `#ffffff` or `rgb(255, 255, 255)`
- Check `packages/theme/src/themes/palettes.ts` for available colors

## Testing Requirements

**Mandatory Testing for Every Component:**

- **Unit tests** with React Testing Library
- **Storybook stories** for all component variants
- **Test user interactions** - clicks, form inputs, state changes
- **Test accessibility** - ARIA labels, keyboard navigation
- **Mock external dependencies** - API calls, services

**Testing Template:**

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    const handleClick = vi.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

**Storybook Template:**

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";

const meta: Meta<typeof Component> = {
  title: "Molecules/Component",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const WithError: Story = {
  args: {
    // Error state props
  },
};
```

## Technology Stack

**Core Dependencies:**

- React 19.2.0 with React Router 7.9.6
- MUI 6.5.0 (Material-UI) with custom theme system
- @tanstack/react-query 5.90.10 for server state management
- Zustand 5.0.8 for client state management
- URQL 5.0.1 for GraphQL API communication
- Xior 0.8.0 for REST API calls
- Date-fns 4.1.0 for date manipulation
- Immer 10.2.0 for immutable state updates

**Development Tools:**

- Vite for build tooling and development server
- Vitest for unit testing with MSW for API mocking
- Storybook 8.6.14 for component development and documentation
- ESLint with custom configuration for code quality

## Development Workflow

**Component Creation Process:**

1. Create component folder in appropriate atomic level
2. Implement component with TypeScript interfaces
3. Create styles.ts with theme-aware colors
4. Write comprehensive unit tests
5. Create Storybook stories for all variants
6. Add barrel export in index.ts
7. Test component in Storybook before integration

**Development Commands:**

```bash
# Install dependencies
pnpm install

# Start development server
pnpm --filter @harbour/frontend dev

# Start Storybook
pnpm --filter @harbour/frontend storybook

# Run tests
pnpm --filter @harbour/frontend test

# Run tests for specific component
pnpm --filter ./apps/frontend test -- src/components/atoms/Button/Button.test.tsx

# Run ESLint compliance check
pnpm eslint --ext .ts,.tsx apps/frontend/src
```

## File Organization

**Import Patterns:**

```typescript
// React and hooks
import { useState, useEffect } from "react";

// MUI components
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Internal components (atomic order)
import { Button } from "../atoms/Button";
import { SearchBox } from "../molecules/SearchBox";
import { DataTable } from "../templates/DataTable";

// Utilities and types
import { formatDate } from "@/utils/date";
import type { User } from "@/types/user";

// Styles
import { styles } from "./styles";
```

**Naming Conventions:**

- **Components**: PascalCase (UserCard, SearchBox, DataTable)
- **Files**: ComponentName.tsx, ComponentName.test.tsx, ComponentName.stories.tsx
- **Folders**: PascalCase matching component name
- **Interfaces**: PascalCase with descriptive names (UserCardProps, ButtonVariant)

## Component Reuse

**Always check existing components first:**

1. **Check `packages/component-library/`** - Shared components like `SearchInput`, `BasicLayout`, `MaxWidthContainer`
2. **Check existing feature components** - Look for similar patterns in the same feature area
3. **Extract to shared library** - If you find duplicated UI patterns across features

**Decision Framework:**

- ✅ **Reuse** when existing component covers 80%+ of your needs (add props for customization)
- ✅ **Extend** existing component with new optional props for additional flexibility
- ❌ **Don't duplicate** - Never copy-paste component code; extract to shared library instead

**Key Reusable Components:**

- `SearchInput` - Use for all search fields instead of inline TextField with SearchIcon
- `BasicLayout` - Standard page layout wrapper

## Performance & Optimization

**Component Performance:**

- Use React.memo for expensive components
- Implement proper dependency arrays in hooks
- Lazy load routes and heavy components
- Optimize bundle size with dynamic imports

**Best Practices:**

- Keep components under 100 lines when possible
- Single responsibility principle
- Co-locate related files (component, test, stories, styles)
- Use barrel exports for clean imports
- Follow atomic design hierarchy strictly
- **Reuse existing components** from `@intact/component-library` before creating new ones

## Quick Reference Templates

**Component Template:**

```typescript
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { styles } from './styles';

interface ComponentProps {
  // Define explicit props with TypeScript
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Box sx={styles.container(theme)}>
      {/* Component implementation */}
    </Box>
  );
};
```

This ensures consistency with atomic design principles, maintains high code quality, and provides comprehensive testing and documentation for the entire Harbour frontend repository.

## Pull Request Strategy

Large PRs (100+ files) are difficult to review, risky to merge, and hard to revert. Follow these guidelines to keep PRs manageable.

**PR Size Limits:**

| PR Type        | Max Files | Description                                          |
| -------------- | --------- | ---------------------------------------------------- |
| Infrastructure | ~20       | New hooks, types, schemas, API clients               |
| Components     | ~30       | New atoms/molecules/templates (with tests + stories) |
| Pages/Features | ~50       | Page components that wire everything together        |
| Refactors      | ~50       | Moving files, renaming, restructuring                |
| Bug fixes      | ~10       | Targeted fixes with tests                            |

**Feature Development Sequence:**

For large features, split into PRs in this order:

```
PR 1: Types & Schemas (5-15 files)
├── types.ts, schemas.ts, constants.ts
└── Zod schemas with inferred types

PR 2: API Layer (10-20 files)
├── hooks/feature/useFeature.ts
├── hooks/feature/useMutateFeature.ts
└── Unit tests for hooks

PR 3: Atoms & Molecules (20-40 files)
├── components/feature/atoms/*
├── components/feature/molecules/*
└── Stories + tests for each

PR 4: Templates & Complex Components (20-40 files)
├── Complex components (boards, panels, tables)
└── Stories + tests

PR 5: Pages & Routing (10-20 files)
├── pages/Feature/FeaturePage.tsx
├── Route configuration
└── Integration with layout

PR 6: Polish & Cleanup (5-15 files)
├── Final styling adjustments
├── Documentation updates
└── Enable feature flag in vite.config.mts
```

**Branch Strategy:**

Option A: **Feature branch with stacked PRs**

```
main
 └── feature/my-feature (long-lived feature branch)
      ├── PR: my-feature/types-schemas → feature branch
      ├── PR: my-feature/api-hooks → feature branch
      ├── PR: my-feature/components → feature branch
      └── Final PR: feature branch → main
```

Option B: **Sequential PRs to main with feature flags**

- Use `vite.config.mts` feature flags to hide incomplete work
- Merge each PR directly to main
- Enable feature flag in final PR

**PR Checklist:**

Before submitting a PR, verify:

- [ ] < 50 files changed (or justified exception)
- [ ] Tests added/updated for all new code
- [ ] Stories added for new components
- [ ] ESLint passes: `pnpm eslint --ext .ts,.tsx apps/frontend/src`
- [ ] No hardcoded colors (use theme palette)
- [ ] Follows atomic design hierarchy

**Splitting an Existing Large PR:**

If you have a large PR that needs splitting:

1. Identify natural boundaries (types → hooks → components → pages)
2. Create a feature branch from main
3. Cherry-pick commits into smaller PRs by category
4. Merge in dependency order: types → hooks → components → pages

## Enforcement & Compliance

**Automated Enforcement:**

The following rules are automatically enforced to ensure compliance:

1. **ESLint Rules** (run on commit):
   - No `import { JSX } from 'react'`
   - No `React.*` namespace for types
   - Component size limit (100 lines)
   - No inline comments
   - No TODO/FIXME comments

2. **Pre-commit Hook**:
   - Runs `pnpm compliance-check` before every commit
   - Blocks commits that violate rules
   - Also runs `pnpm lint-staged` for formatting

3. **Compliance Script**:

   ```bash
   # Run manually to check compliance
   pnpm compliance-check

   # Checks for:
   # - Inline comments
   # - JSX comments
   # - Hardcoded colors
   # - React.* namespace usage
   # - JSX imports from react
   # - Component size limits
   # - TODO/FIXME comments
   ```

4. **CI/CD Integration**:
   - Add to your CI pipeline:
   ```yaml
   - name: Compliance Check
     run: pnpm compliance-check
   ```

**Tips for AI Assistants:**

To ensure AI assistants follow the rules:

1. **Explicitly reference the rules** in your prompts
2. **Use the compliance script** to verify their work:
   ```bash
   pnpm compliance-check
   ```
3. **Ask for specific patterns**:
   - "Follow the windsurf-instructions.md guidelines"
   - "No inline comments, no hardcoded colors"
   - "Use direct event types, not React.MouseEvent"
   - "Keep components under 100 lines"

4. **Verify before merging**:
   ```bash
   pnpm lint                    # ESLint rules
   pnpm compliance-check        # Full compliance
   pnpm test                    # Unit tests
   ```
