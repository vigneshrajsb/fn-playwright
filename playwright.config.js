// @ts-check
const { devices } = require("@playwright/test");
require("dotenv").config();

const config = {
  testDir: "./tests",
  timeout: 75 * 1000, // should reduce test timeout
  expect: {
    timeout: 20_000,
  },
  /* Run tests in files in parallel (2 workers)*/
  fullyParallel: true,
  workers: 2,
  forbidOnly: !!process.env.CI,
  retries: 1,
  reporter: "html",
  use: {
    actionTimeout: 30 * 1000,
    baseURL: "https://www.fashionnova.com",
    // collect trace by default
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  // browser combinations to test with
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },

    /* Test against mobile viewports if needed. uses emulation */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
};

module.exports = config;
