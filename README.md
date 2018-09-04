# node-codetest
## Setup
- [Install Docker](https://docs.docker.com/install/)
- [Install docker-compose](https://docs.docker.com/compose/install/)
- clone this repo
- `cd node-codetest`
- `make build up`
- To see logs, run `make log`
- A rudimentary website will be available on `localhost:8080`
- A RethinkDB admin console will be available on `localhost:8081`

## Task
The purpose of this codetest is to connect a basic chat frontend to a node backend via websockets. 
The backend is connected to an instance of [RethinkDB](https://www.rethinkdb.com/), which allows for realtime "changefeeds", 
a pub/sub system that allows clients to listen to changes commited to the db.

The chat website should have these behaviours:
- Any new message committed to the DB should be pushed to all clients.
- Messages written in tab A should appear on the right-hand side of the chat log in tab A, and on the lhs in other tabs. Likewise, messages written in other tabs (or from any other source) should appear on the lhs in tab A.
- If a message is deleted from the DB, it should be removed from all clients.
- (Optional) Persist ownership of messages through page-reloads (per-browser, not per-tab).
