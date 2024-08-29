# Project Description

Modern website with the ability to search for current cars

---

### Technologies Used

-   **Next + TS**
-   **Tailwindcss**

---

### Architecture

The project use App-Router structure.

- **APP folder** is used for routing. 
- **COMPONENTS folder** is used for custom components and functional features blocks. 
- **LIB folder** is used for functions and other helpers.
- **TYPES folder** is used for elements types.
---

### Scripts

### `npm run dev`

Starts the frontend project in developing mode.

### `npm run build`

Build the project

### `npm run start`

Start builded project in runtime;

### `npm run lint:ts`

Runs ESLint on ts/tsx files.

### `npm run lint:ts:fix`

Runs ESLint with auto-fix on ts/tsx files.

---

### CI pipeline

The GitHub Actions configuration is located in /.github/workflows.

---

### Deployment

Run `npm run build` to build project, then run `npm run start` to see the builded project.
