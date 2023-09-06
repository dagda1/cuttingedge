---
meta:
  title: 5 Things that should be Automated in a TypeScript/Javascript Monorepo
  description: Spend more time on the beach/golf course with these tips
  date: "2023-09-04T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1693756658/automation_alcvc3.png"

  tags: ["github-actions", "continuous-integration", "devops"]
---

Managing a TypeScript monorepo can be a complex task with various moving parts. Automation ensures that everything runs smoothly, from dependency management to deployment. Automate these five things in a TypeScript or JavaScript monorepo to enhance productivity and maintainability.

## 1. Renovate for package.json Updates

### Why Automate This?

I've included this first because managing dependencies is a huge pain point in monorepos. Leaving the updating of each `package.json` file to a developer or, even worse, developers often leads to failures, especially when multiple packages are within the monorepo.

### How to Automate

Use [renovate](https://github.com/renovatebot/renovate) to scan the monorepo repository automatically and generate Pull Requests to update dependencies. I like to confine my PRs to the weekend to keep the noise down, but this is all configurable through the extensive config options.

Below is a view of some PRs created by the excellent [renovate](https://github.com/renovatebot/renovate).

![renovate pull requests](https://res.cloudinary.com/ddospxsc8/image/upload/v1693757509/renovate_pozccg.png).

Each PR includes scores for confidence and adoptions for the dependency as well as the release notes from the PR for the dependency that is updated:

![renovate PR with confidence score and release notes](https://res.cloudinary.com/ddospxsc8/image/upload/v1693758376/renovate2_gzi3v1.png).

With [renovate](https://github.com/renovatebot/renovate), it is possible to specify scheduling, grouping, and even auto-merge rules.

Below is an example `renovate.json` for a monorepo that I control:

```json showLineNumbers
{
  "extends": ["config:base", "group:monorepos"],
  "baseBranches": ["main"],
  "semanticCommitScope": "deps",
  "rangeStrategy": "bump",
  "rebaseLabel": "rebase",
  "rebaseWhen": "auto",
  "requiredStatusChecks": [],
  "timezone": "Europe/Dublin",
  "schedule": ["before 8am every weekend"],
  "lockFileMaintenance": {
    "enabled": false
  },
  "packageRules": [
    {
      "packageNames": ["node", "pnpm"],
      "enabled": false
    },
    {
      "depTypeList": ["peerDependencies"],
      "enabled": false
    },
    {
      "updateTypes": ["major", "minor", "patch", "pin", "digest"],
      "automerge": true
    },
    {
      "depTypeList": ["devDependencies"],
      "automerge": true
    },
    {
      "packagePatterns": ["eslint"],
      "groupName": "eslint"
    }
  ]
}
```

### Benefits

- Keeps dependencies up-to-date, reducing security vulnerabilities.
- Frees developers from the manual task of updating each package.json.

## 2. [Adobe changesets](https://github.com/changesets/changesets) for Versioning and Changelog

![adobe changesets](https://res.cloudinary.com/ddospxsc8/image/upload/v1693758875/changesets_oqpref.png)

### Why Automate This?

In a monorepo, tracking changes across multiple packages can get chaotic. Leaving this to the diligence of the developer will always lead to problems. A versioning system helps maintain order. A naive approach is to use git commit messages to update the `CHANGELOG.md`. Dated git commit messages will lead to a suboptimal `CHANGELOG`.

### How to Automate

[Adobe changesets](https://github.com/changesets/changesets) offers a way to automate versioning and changelog updates. It provides commands to create changesets that describe the changes in your code.

An interactive CLI will prompt the user for inputs to create the changeset and provide a proper message for the `CHANGELOG`:

![CLI](https://res.cloudinary.com/ddospxsc8/image/upload/v1693807287/changesets2_eyatop.png)

The following two links provide complete information on how to get started with changesets:

- [using changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
- [changesets CLI](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)

### Benefits

- Streamlined versioning across multiple packages.
- Automatic generation of a detailed changelog.
  ![changelog](https://res.cloudinary.com/ddospxsc8/image/upload/v1693761122/changelog_zearai.png)

## 3. Automate performance metrics

### Why Automate This?

Staying on top of performance metrics is critical. Do not wait until your users start complaining. You should know exactly where you stand on every commit.

### How to Automate

I use [WebpageTest](https://www.webpagetest.org/), which offers detailed performance metrics and allows tests from multiple geographical locations, simulating various browsers and network conditions. WebpageTest enables developers to identify bottlenecks, optimize for different user scenarios, and improve overall user experience.

I have the following step in a GitHub action that supplies an array of URLs for WebpageTest to test.

```yml
- name: Trigger webpage test
  if: github.event_name == 'pull_request'
  uses: peter-evans/repository-dispatch@v1
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    repository: dagda1/cuttingedge
    event-type: trigger-webpage-test-for-frontendsupport
```

WebpageTest will automatically send an email and add a comment on the pull request for every commit to a pull request with detailed metrics:
![webpage test pull request comment](https://res.cloudinary.com/ddospxsc8/image/upload/v1693762721/webpagetest_krq5ku.png)

### Benefits

- Know the moment performance starts going south
- Communicate performance metrics to all stakeholders

## 4. TurboRepo for Build and Test Acceleration

![turborepo](https://res.cloudinary.com/ddospxsc8/image/upload/v1693760354/turborepo_w1wh1z.png)

### Why Automate This?

Building and testing in a monorepo can be slow, especially as the codebase grows.

### How to Automate

[Turborepo](https://turbo.build/) accelerates this process by only building and testing the parts of your monorepo affected by individual commits.

### Benefits

- Faster build and test cycles.
- Resource optimization, as only relevant tasks are executed.

## 5. Automated Deployment

### Why Automate This?

It seems ridiculous to think manual deployments still happen. However, I have included automated deployments just in case anyone is still practising the dark art of throwing the dice and hoping for a six each time. Manual deployments are error-prone and can be a bottleneck in the development process.

### How to Automate

Use CI/CD pipelines with tools like GitHub Actions or GitLab CI/CD to automate the deployment process.

The website that you are currently reading uses the GitHub action below to deploy a [remix-run](https://remix.run/) application that deploys an [AWS architect](https://arc.codes/docs/en/get-started/quickstart) application to both `production` and `staging` variants depending on the context that the action is run in.

```yml
name: Build and deploy

on: [push, pull_request]

env:
  CI: true
  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  AWS_DEFAULT_REGION: "us-east-1"

jobs:
  deploy:
    environment: CI
    name: build and deploy to AWS
    runs-on: ubuntu-latest
    steps:
      - uses: pnpm/action-setup@v2.4.0
        with:
          version: 8.7.4

      - name: Checkout Repo
        uses: actions/checkout@v3

      - name: Setup Node.js 16.x
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: "pnpm"

      - name: Cache pnpm modules
        uses: actions/cache@v3
        with:
          path: ~/.pnpm-store
          key: ${{ runner.os }}-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-

      - name: Install Dependencies
        run: pnpm i

      - name: Build App
        run: pnpm build

      - name: run architect deploy
        if: github.ref == 'refs/heads/main' || startsWith(github.ref, 'refs/tags/v') || github.event_name == 'pull_request'
        working-directory: apps/frontendsupport
        run: |
          FLAGS=""
          if [[ "${{ startsWith(github.ref, 'refs/tags/v') }}" == true ]]; then
            FLAGS="--production"
          else
            FLAGS="--staging"
          fi

          GIT_COMMIT="$(git rev-parse HEAD)" pnpm arc deploy $FLAGS -v --prune
        env:
          NODE_ENV: production

      - name: Invalidate Cloudfront cache staging
        if: github.ref == 'refs/heads/main'
        uses: imehedi/actions-awscli-v2@latest
        with:
          args: cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_STAGING_ID }} --paths "/*" --no-cli-pager

      - name: Invalidate Cloudfront cache Production
        if: startsWith(github.ref, 'refs/tags/v')
        uses: imehedi/actions-awscli-v2@latest
        with:
          args: cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_PRODUCTION_ID }} --paths "/*" --no-cli-pager
```

### Benefits

- Consistent and reliable deployments.
- Faster release cycles.
