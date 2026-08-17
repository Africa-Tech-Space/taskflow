# TaskFlow API

A small internal task tracker used by a team to create, assign, and complete tasks.

## Setup

```bash
npm install
npm start
```

The server runs on `http://localhost:3000`. On first run it seeds a working
database file at `data/db.json` from `data/seed.json`.

To reset the database back to its original seed state at any point:

```bash
npm run reset
```

## API Overview

| Method | Route | Description |
|---|---|---|
| GET | `/tasks?page=1&pageSize=5` | List tasks, paginated |
| GET | `/tasks/:id` | Get a single task |
| POST | `/tasks` | Create a task (`title`, optional `assigneeId`, `dueDate`) |
| PATCH | `/tasks/:id/complete` | Mark a task complete (notifies the assignee) |
| DELETE | `/tasks/:id` | Delete a task |
| GET | `/users` | List users |

## Data model

**Task**: `{ id, title, assigneeId (nullable), completed, dueDate (nullable) }`
**User**: `{ id, name }`

Note that `assigneeId` can be `null` — some tasks are unassigned.

## Recent bug reports from users
look at bug-reports.txt

