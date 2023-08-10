---
meta:
  title: Triggering a github action from a different file
  description: trigger a github action from a different file by using repository dispatch events
  date: "2023-08-10T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png"
  tags: ["github-actions", "continuous-integration"]
---

# How to trigger a GitHub action from a different GitHub action file

It is easy to run one Github action job after another by using the [needs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds) keyword.

```yml {14} showLineNumbers
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Run build
        run: echo "Running build steps..."

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Deploy code
        run: echo "Deploying..."
```

In the example above, the `deploy` job has a `needs` directive that states that `deploy` can only run after `build` has been completed successfully.

However, what about if we want an entire series of jobs in a separate GitHub action file to run after a job in a completely different file has run?

## Repository Dispatch Events

Fortunately, it is possible to create a [repository dispatch event](https://docs.github.com/en/free-pro-team@latest/rest/repos/repos?apiVersion=2022-11-28#create-a-repository-dispatch-event) to trigger Github actions.

A repository dispatch event is an endpoint that triggers a webhook event called `repository_dispatch`.

Even more, fortunately, is that somebody has wrapped the finer details of triggering a `repository_dispatch` webhook event into an excellent GitHub action in this [repo](https://github.com/peter-evans/repository-dispatch/tree/v1/).

I faced a problem running [webpage-test](https://www.webpagetest.org/) on a staging site only after it was successfully deployed, and I wanted the logic segregated into its own Github action file.

Below is the code that creates the dispatch event for an event I have named `trigger-webpage-test-for-frontendsupport`

```yml:build-and-deploy.yml
- name: Trigger webpage test
  uses: peter-evans/repository-dispatch@v1
  with:
    token: ${{ secrets.PAT }}
    repository: dagda1/cuttingedge
    event-type: trigger-webpage-test-for-frontendsupport
```

The action that runs web-page-test in a different file:

```yml:webpage.test.yml {14-17} showLineNumbers
name: run webpage test for frontendrescue

on:
  repository_dispatch:
    types: [trigger-webpage-test-for-frontendsupport]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: WebPageTest Staging
        uses: WPO-Foundation/webpagetest-github-action@main
        with:
          apiKey: ${{ secrets.WPT_API_KEY }}
          urls: |
            https://staging.frontendrescue.com/
            https://staging.frontendrescue.com/posts/2023-07-28-session-storage-playwright
          label: 'GitHub Action Test'
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## GOTCHA ALERT!!!!

One catch is that repository dispatch events will only trigger an event if the workflow is committed to the default branch (usually master/main etc.).

I initially wondered why the event was not triggered when committing to a feature branch, but once the action was in the `main` branch, the event got triggered.

## Wrapping up

Repository dispatch events are an excellent way to generalise logic without resorting to the dreaded horrors of copying and pasting.
