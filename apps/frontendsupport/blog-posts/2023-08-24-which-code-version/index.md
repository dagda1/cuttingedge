---
meta:
  title: How to pinpoint which version of the code is running in any environment
  description: Being able to tell at a glance which version of the code is in which environment is critical.
  date: "2023-08-24T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1692637878/versioning_gsg8au.png"
  tags: ["github-actions", "continuous-integration", "devops"]
---

It is common to have multiple staging, UAT and production environments running different code versions. Knowing which version of the frontend code is in which environment is critical for bug fixing or tracking down issues.

With frontend code, it is often possible to visually check for frontend features such as menu items or visible features that only appear in a specific code version. Visually checking is time-consuming and doomed to failure in most cases.

A better approach is to render something unique and unambiguous into the markup like the git commit hash of the HEAD commit that is rendered into an invisible div below:

![git hash in hidden div](https://res.cloudinary.com/ddospxsc8/image/upload/v1692535661/guid_rbdtxs.png)

A git commit hash is a perfect identifier to pinpoint what version of the code is in the current environment. This git commit hash is the current ID of the current HEAD when the code was deployed.

The hash in the markup can then be an input for the [git show command](https://git-scm.com/docs/git-show), which can display a nice git diff of precisely which commit this hash is pointing at.

![git show result](https://res.cloudinary.com/ddospxsc8/image/upload/v1692819323/git-show_dgaicf.png)

## What makes a suitable identifier?

I used to parse the version of the code from the package.json file, but this is only sometimes reliable. The version number field of a `package.json`` file will probably not get updated on each commit, while a git commit hash certainly will.

## CI/CDs pipeline is the only place where environment variables should be assigned values

Checking `.env` files of anything into source control will soon become a security hazard. The retrieval and setting of environment variable values should be part of the continuous integration/deployment process (CI/CD), even for something as seemingly innocuous as a git commit hash. Please do not rely on a developer to set this value before each deploy. Every value must be assigned as part of the automated release process.

In this example, the git commit hash is rendered into a [remix-run](https://remix.run/docs/en/main) application that deploys to AWS using [aws architect](https://arc.codes/docs/en/get-started/quickstart).

There are a few steps to getting this value into the remix application.

The following github action sets an environment variable called `GIT_COMMIT` and makes the variable available to the aws architect runtime:

```yml {12} showLineNumbers
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
```

An aws architect [set plugin](https://arc.codes/docs/en/guides/plugins/set) is registered in the `app.arc` file:

```yml
@plugins
set-env
```

The above configuration will tell the aws architect runtime to expect a file named `set-env.js` to be at the path `src/plugins/set-env`.

```js:src/plugins/set-env.js {5}
module.exports = {
  set: {
    env({ arc, inventory }) {
      return {
        API_SECRET: process.env.GIT_COMMIT,
      };
    },
  },
};
```

AWS architect will thankfully ignore `.env` files and this is the only place where secrets should be accesed and assigned to environment variables. The above code is called a [set.env plugin](https://arc.codes/docs/en/guides/plugins/set#set.env) that registers environment variables to all lambdas in the aws architect project.

If you really must use some form of .env file then the file should be created on the CI/CD server:

```yml {5} showLineNumbers
- name: Create .env file
  working-directory: apps/frontendsupport
  run: |
    cat << EOF > ".env"
    GIT_COMMIT="$(git rev-parse HEAD)"
    EOF
```

Once the environment variable is set, it is available in the application, depending on the build/deployment framework. Remix has the concept of [loader functions](https://remix.run/docs/en/1.19.3/route/loader) on the server that provides data to the component rendering the current route

```ts {4}
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

Every time a commit triggers a build, the hash will be unique and will be automatically rendered into the markup in a div that is invisible to the naked eye.

Knowing the exact code version of any frontend code is now easy.

I have been using this trick for a long time and find it invaluable when determining which version of the code is in which environment.
