Reproduction repo for a NX -> Jest -> Clarity testing incompatibility

Issue Reference: https://github.com/vmware/clarity/issues/4196

Reproduction (steps are also roughly in sync with their own git commits):

- Create NX workspace
- Create NX Angular App with Jest as test-runner
- Add Clarity Framework
- Add a Clarity component to the app (here: a dropdown)
- Add transformIgnores / babel and respective config
- Run tests, result will be:

```
ng test app
 FAIL  apps/app/src/app/app.component.spec.ts
  ● Test suite failed to run

    Cannot find module './base/base.element.css' from 'index.js'

      at Resolver.resolveModule (../../node_modules/jest-resolve/build/index.js:259:17)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        8.908s
```
