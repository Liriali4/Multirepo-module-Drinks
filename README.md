## Dependencies

```
yarn add typescript ts-node ts-node-dev @types/node --dev
```
OR
```
npm i typescript ts-node ts-node-dev @types/node --save-dev
```

# Código para o arquivo tsconfig.json

``` JSON

{
  "compilerOptions": {
    "jsx": "react",
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

# Alterações para o arquivo package.json

``` JSON

"main": "dist/index.js",
  "types" : "dist/index.d.ts",
  "keywords": [],
  "author": "",
  "license": "ISC",
    "scripts": {
    "build": "tsc --declaration",
    "dev": "nodemon --watch \"src//\" --exec \"ts-node src/sample.ts\" -e ts"
  },
    "devDependencies": {
    "@types/node": "^12.12.14",
    "nodemon": "^2.0.1",
    "ts-node": "^8.5.2",
    "typescript": "^5.2.2"
  }

```


## Build
```
npm run build
```
or
```
yarn build
```
