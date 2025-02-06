# Handson-React-Query

Demo application using NX Monorepo to get the hand on concepts like:
- ReactQuery
- useContext
- Formik
- Redux
- MUI
- Router

## To Install dependencies

```sh
npm install
```


## To Run Api Server

To run the dev server for the api, use:

```sh
npx nx serve handson-react-query-api
```

## To Run the React APP

To run the dev server for the app, use:

```sh
npx nx serve handson-react-query
```

# Troubleshoot


## Error installing Cypress
If you have errors when npm tries to install CYPRESS Binaries, add this environment variable :

- On Linux\Mac:
```sh
    export CYPRESS_INSTALL_BINARY=0
```

- On Windows using Powershell:
```sh
    $env:CYPRESS_CRASH_REPORTS = "0"
```

- On Windows using Command Prompt:
```sh
   set CYPRESS_CRASH_REPORTS=0 
```

## Error: No existing Nx Cloud client and failed to download new version

To fix this proxy error, add this environment variable:

- On Linux\Mac:
```sh
    export NX_NO_CLOUD=true
```

- On Windows using Powershell:
```sh
    $env:NX_NO_CLOUD = "true"
```

- On Windows using Command Prompt:
```sh
   set NX_NO_CLOUD=true 
```

