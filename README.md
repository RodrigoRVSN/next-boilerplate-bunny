# 👕 Next.JS Template with Linter


<br>

___
## 🔨 Tools:

- NextJS
- Typescript
- Axios (Fetching)
- ESLint (Code Pattern)
- Prettier (Formatter)
- Husky (Pre-commit)
- Jest (Unit/Integration Test)
- Cypress (Test E2E)
___
## 🤺 How to use:

- `git clone https://github.com/RodrigoRVSN/next_ts_boilerplate.git`
- `yarn` to install dependencies
- `yarn dev` to run the app
- `yarn test` to run tests
- `yarn lint` to run linters
- `yarn cy:run` to run cypress in terminal
- `yarn cy:open` to run cypress in browser

___
## 🤖 Auto-formatting on save:

Inside `/.vscode/settings.json` we set prettier as the default formatter, and also set `editor.codeActionsOnSave` to run:

- **Lint:** `"source.fixAll.eslint"`
- **Format:** `"source.fixAll.format"`

___
## ✅ Checking standards pre-commit:

Using [husky](https://www.npmjs.com/package/husky) we can check all of our style standards to make sure our git commits are up to par. Check those checks out at [`.husky/pre-commit`](.husky/pre-commit)
