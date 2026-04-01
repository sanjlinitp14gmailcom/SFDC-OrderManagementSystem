# Salesforce Order Management System

A Salesforce Platform project built to demonstrate core Apex development skills including triggers, handler patterns, and test-driven development.

## Features
- Apex Trigger on Account object (before insert, before update)
- Trigger Handler pattern following Salesforce best practices
- Automatic Description field update on Account create
- Phone change detection with Description update
- 100% test coverage across 3 test scenarios

## Tech Stack
- Apex (Triggers, Handler Class)
- Salesforce DX (SFDX CLI)
- VS Code + Salesforce Extension Pack
- Jest for LWC testing

## How to Deploy
1. Clone this repo
2. Authenticate your org: `sf org login web --alias mydevorg`
3. Deploy: `sf project deploy start`
4. Run tests: `sf apex run test --class-names AccountTriggerTest --code-coverage`

## Author
Sanjli Kumari | Senior Salesforce Developer
[LinkedIn](https://www.linkedin.com/in/sanjli-kumari-049b57126/)

README quality        ░░░░░░░░░░░░  Needs urgent update ❌
Repo description      ░░░░░░░░░░░░  Missing ❌
Topics/tags           ░░░░░░░░░░░░  Missing ❌
