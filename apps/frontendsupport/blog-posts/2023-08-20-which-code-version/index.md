---
meta:
  title: How to pinpoint which version of the code is running in any environment
  description: Being able to tell at a glance which version of the code is in which environment is critical.
  date: "2023-08-20T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1692637878/versioning_gsg8au.png"
  tags: ["github-actions", "continuous-integration", "devops"]
---

It is common to have multiple staging, UAT and production environments running different code versions. With frontend code, it is often possible to visually check frontend features such as menu items or visible features that only appear in a specific code version. Visually checking is time-consuming and doomed to failure in most cases.

A better approach is to render something unique and unambiguous into the markup, like the git commit hash that is rendered into an invisible div below:

![git hash in hidden div](https://res.cloudinary.com/ddospxsc8/image/upload/v1692535661/guid_rbdtxs.png)

A git commit hash is a perfect identifier to pinpoint what version of the code is in the current environment. This git commit hash is the current ID of the current head when the code was deployed.

The hash in the markup can then be checked with the [git show command](https://git-scm.com/docs/git-show), which can display a nice git diff of precisely what the HEAD commit is.

![git show result](https://res.cloudinary.com/ddospxsc8/image/upload/v1692536629/git-show_dzzblo.png)

## What makes a suitable identifier?

I used to parse the version of the code from the package.json file, but this is only sometimes reliable. The version number field of a package.json file will probably not get updated on each commit, while a git commit hash certainly will.

## Never commit environment variable values into source control

Checking `.env` files of anything into source control will soon become a security hazard. The retrieval and setting of environment variable values should be part of the continuous integration/deployment process (CICD), even for something as seemingly innocuous as a git commit hash.

In this example, the identifier is rendered into a [remix-run](https://remix.run/docs/en/main) application that deploys to AWS using [aws architect](https://arc.codes/docs/en/get-started/quickstart).

The following github action sets an environment variable called `GIT_COMMIT`:

```yml {11} showLineNumbers
- name: Set arc environment variables
  working-directory: apps/frontendsupport
  run: |
    FLAGS=""
    if [[ "${{ startsWith(github.ref, 'refs/tags/v') }}" == "true" ]]; then
      FLAGS="production"
    else
      FLAGS="staging"
    fi

    pnpm arc env -e $FLAGS --add GIT_COMMIT $(git rev-parse HEAD)
```

> Note: If setting sensitive information in an aws architect project, then it is better to use the [set.env](https://arc.codes/docs/en/guides/plugins/set#set.env) plugin.

Alternatively, in a different application, a `.env` file could be created before uploading it to the target server:

```yml {5} showLineNumbers
- name: Create .env file
  working-directory: apps/frontendsupport
  run: |
    cat << EOF > ".env"
    GIT_COMMIT="$(git rev-parse HEAD)"
    EOF
```

Once the environment variable is set, it is available in the application, depending on the build/deployment framework. Remix has the concept of [loader functions](https://remix.run/docs/en/1.19.3/route/loader) on the server that provides data to the component rendering the current route

```ts
export async function loader() {
  return json({
    ENV: {
      GIT_COMMIT: process.env.GIT_COMMIT,
    },
  });
}
```

The hash is then rendered into the markup.

```ts
<div style={{ display: "none" }}>{data.ENV.GIT_COMMIT}</div>
```

I have been using this trick for a long time and find it invaluable when determining which version of the code is in which environment.
