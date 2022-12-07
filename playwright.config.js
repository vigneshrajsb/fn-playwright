// @ts-check
const { devices } = require("@playwright/test");
require("dotenv").config();

const config = {
  testDir: "./tests",
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  /* Run tests in files in parallel (5 workers)*/
  fullyParallel: true,
  workers: 5,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  reporter: "html",
  use: {
    actionTimeout: 30 * 1000,
    baseURL: "https://www.fashionnova.com",
    // collect trace by default
    trace: "on",
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
