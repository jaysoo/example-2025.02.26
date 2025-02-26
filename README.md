Try to open this in an editor and open up `apps/nx-cloud/app/main.ts` and auto-import / quick fix in the file. The right `@nx-cloud/ui-primitives` package should be suggested.

Now open up `apps/nx-cloud/package.json` and remove `@nx-cloud/ui-primitives` from `dependencies`. Restart tsserver, and then try to auto-import again. This time the suggestion is missing.

It looks like a project's `package.json` _must_ include each package in its `dependencies` (even `devDependencies` is not enough), or else auto-import will not work.
