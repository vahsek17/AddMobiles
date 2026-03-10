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
