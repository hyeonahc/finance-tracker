<br/>

<div align="center"><a href="https://hyeonahc-finance-tracker.vercel.app/" target="_blank"><img src="./README-images/finance-tracker-logo-piggy.svg" width="250px"></div>

<br/>

<div align="center">

![last commit](https://img.shields.io/github/last-commit/hyeonahc/finance-tracker?color=green)
![most language](https://img.shields.io/github/languages/top/hyeonahc/finance-tracker)
[![release](https://img.shields.io/badge/release-v0.1.0-yellow)](https://github.com/https://github.com/hyeonahc/finance-tracker/tree/main)

</div>

<br/>

# Finance Tracker

- [🚀 Getting Started](#-getting-started)
- [✨ Project Summary](#-project-summary)
- [🗓 Development Timeline](#-development-timeline)
- [👀 Demo](#demo)
- [🔑 Key Features](#-key-features)
- [🪄 Tech Stack](#-tech-stack)
  - [Front-End Tech Stack](#front-end-tech-stack)
  - [Back-End Tech Stack](#back-end-tech-stack)

<br />

## 🚀 Getting Started

1. Clone this repo: `git clone https://github.com/hyeonahc/finance-tracker.git`
2. Move to the project directory `cd finance-tracker`.
3. Install dependencies: `pnpm install`
4. Start the project
   - Development mode: `pnpm run dev`
   - After build: `pnpm build` then `pnpm start`
5. To run the project, you may need environment variables. Please contact [hyeonah.hello@gmail.com](hyeonah.hello@gmail.com) for details.

<br />

## ✨ Project Summary

Finance Tracker helps users track income and expenses. It offers multiple viewing options, filters by date, and provides a clear financial summary. Future updates will include budgeting, goal tracking, and visual insights for better financial management.

<br />

## 🗓 Development Timeline

Jul 9, 2024 - Present

### **Timeline**

- [Version 0.1.0 released: Mar 2, 2025](https://github.com/hyeonahc/finance-tracker/releases/tag/v0.1.0)

<br />

## 👀 Demo

🔗 [Visit the live website on Vercel](https://hyeonahc-finance-tracker.vercel.app)

| Sign up                                 | Sign in                                 |
| --------------------------------------- | --------------------------------------- |
| ![1-signup](./README-images/signup.gif) | ![2-signin](./README-images/signin.gif) |

<br/>

| Transactions on Different Views       | Add Transaction                                           |
| ------------------------------------- | --------------------------------------------------------- |
| ![3-views](./README-images/views.gif) | ![4-add-transaction](./README-images/add-transaction.gif) |

<br/>

## 🔑 Key Features

### Version 0.1.0

- **Sign Up & Sign In**: Securely create an account and log in to access your financial data.
- **Add Transactions**: Manually log income and expenses with key details (title, date, amount and category).
- **Income, Expense, and Total Summary**: Get an overview of your financial status at a glance.
- **Top Filter by Month/Year**: Easily switch between different timeframes.
- **Transaction Views**: View financial data in four formats\*\*:
  - **Daily**: List of transactions per day.
  - **Monthly**: Aggregated view of monthly transactions.
  - **Calendar**: Interactive calendar for quick insights.
  - **Category**: Breakdown of expenses by category.

This is just the beginning! Try it out and stay tuned for more updates! 💰📊

<br/>

## 🪄 Tech Stack

### Front-End Tech Stack

- **Framework**: React
- **Programming Language**: TypeScript
- **Router**: React Router
- **State Management**: Zustand
- **API Request**: React Query
- **Design**: MUI, Emotion

### Back-End Tech Stack

- **Runtime Environment**: Node.js
- **Framework**: Express
- **Programming Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Security**: bcrypt, validator
- **Environment Management**: dotenv
