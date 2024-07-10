# Accessibility Checks

## Overview

This repository uses the [pa11y-ci](https://github.com/pa11y/pa11y-ci) tool to perform accessibility checks. The checks can be run locally, but are also run on [Pull Request preview environments](../infra/pull-request-environments.md). This ensures that any new code changes meet accessibility standards before being merged.

## Running Locally

- `npm install` in `./accessibility`
- Create an `./accessibility/.env` file with a `BASE_URL` variable pointing to your local server.
- Ensure your local server is running and run either:
    - `npm run test:pa11y-desktop` or
    - `npm run test:pa11y-mobile`

A `screenshots-output` directory will be created if it doesn't already exist. The accessibility check, by default, will output a screenshot.

### PR Environments

The accessibility checks are triggered in PR preview environments on each PR update. For more information on how PR environments work, please refer to [PR Environments Documentation](link-to-pr-environments-docs).

### Workflows

The following workflows trigger accessibility checks:
- [PR Environment Update](../../.github/workflows/pr-environment-update.yml)
- [Accessibility Scans Workflow](../../.github/workflows/accessibility-scans.yml)

The [Accessibility Scans Workflow](../../.github/workflows/accessibility-scans.yml) takes a `service_endpoint` URL and an `app_name` if there is a need to define custom config for your specific app.

## Configuration

The accessibility checks are configured using the following files:
- [Base Configuration](../../accessibility/.pa11yci-base-config.js)
- [Desktop Configuration](../../accessibility/.pa11yci-desktop.js)
- [Mobile Configuration](../../accessibility/.pa11yci-mobile.js)

The desktop and mobile configuration extend the common base configuration.

