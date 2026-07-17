# 🩺 ISSS623 HealthStack

Study companion for **SMU ISSS623 Applied Data Science in Healthcare** (MITB, July 2026).

Built with React 19 + TypeScript + Tailwind CSS 4 + Vite. Deployed to GitHub Pages.

**Live site:** [chuatzeyee.github.io/ISSS623](https://chuatzeyee.github.io/ISSS623/)

## What's Inside

| Section | Description |
|---------|-------------|
| **Topics & Glossary** | Lecture content by segment (healthcare landscape, financing & value, health data ecosystem, analytics & AI, tools) plus a searchable glossary |
| **Debate Trainer** | The ageing debate: full argument-by-argument cases for Proposition, Opposition and Policy Jury, a memorizable stat card, delivery tactics, and an interactive rebuttal sparring drill |
| **BRFSS Group Project** | Step-by-step playbook for the 2024 BRFSS predictive-modelling project: scope, topic options with candidate variables, roles, rubrics, deadlines |
| **Practice Quiz** | MCQ bank with explanations covering every lecture topic, filterable by topic - built for Quiz 1 and Quiz 2 prep |

## Development

```bash
npm install
npm run dev      # http://localhost:5173/ISSS623/
npm run build    # outputs to dist/
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages.
