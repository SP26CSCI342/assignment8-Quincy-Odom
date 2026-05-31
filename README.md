[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24044343&assignment_repo_type=AssignmentRepo)

Quincy Odom
Assignment 8

## Live URLs

- **Client:** https://platescout-quincy.vercel.app
- **Server:** https://platescout-quincy.onrender.com
- **Server health check:** https://platescout-quincy.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment
There are a lot of moving parts to deployment, and it is difficult to find the sole source of conflict when things go wrong compared to a local instance.
One thing that took me a long time to debug was the signup page running into a network error on vercel despite running fine locally on my system. I was convinced that my server itself was the problem, but then I realized that it was running fine, so I eventually looked at the frontend fetches and realized that I was doing them improperly.
One thing I'd do differently is be better with my GitHub pushes during deployment. I found myself pushing a lot and missing things, which looks very sloppy when looking at the whole commit timeline. It would be more ideal to look at my code more carefully instead of rushing to push as soon as I make a change.
