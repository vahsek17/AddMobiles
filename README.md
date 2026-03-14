# Project Setup

This project uses **two environments** mapped to Git branches.

| Branch | Environment | CSV Files Used                         |
| ------ | ----------- | -------------------------------------- |
| `dev`  | Development | `toBeAdded_dev.csv`, `added_dev.csv`   |
| `main` | Production  | `toBeAdded_main.csv`, `added_main.csv` |

The application automatically chooses which files to use based on the runtime environment.

Internally the app resolves the environment like this:

```
development → dev
production → main

If you want to push the device info into the dev database, run the pipeline with 'dev' branch, for Production, run with main branch
If you want the UI to render the Dev devices, execute npm run dev - If you want the UI to render the Prod Devices, Execute npm run build & npm start
```

---

# Running the Project

## Development Mode

Start the development server:

```
npm install
npm run dev
```

Application runs at:

```
http://localhost:3000
```

This environment uses:

```
toBeAdded_dev.csv
added_dev.csv
```

---

## Production Mode

Build and run the production server:

```
npm run build
npm start
```

Application runs at:

```
http://localhost:3000
```

This environment uses:

```
toBeAdded_main.csv
added_main.csv
```

---

# Notes

* Development and production environments are **fully isolated**
* Each environment maintains its **own CSV processing queue**
* GitHub Actions pipelines operate on the **branch-specific files**
