# Example playwright test

## Install node
```
brew install node
node -v
```
*Any version >14 will be okay to execute project*


## Clone 
```
git clone 
```

## Install dependencies
```
npm install
```

Install browser binaries with if needed
```
npx playwright install
```

## Execute tests
```
npm run test
```

To execute in headed mode:
```
npm run test:headed
```

## Test report
Once tests are executed, we can run the below command to view the HTML report with traces.
```
npx playwright show-report
```

## Structure
- Tests are defined as `*.spec.js` files under `/tests` dir
- Page models are inside `/pages` dir as `*.model.js`
- Playwright test runner configuration is at the root of the directory with 2 browser combinations - Desktop chromium && safari
  

## Feedback
Please let me know if any issues with execution. Appreciate any feedback!!! 