# Next.js with Parse Server

This project integrates Next.js for the frontend with Parse Server as a backend, all served through Express.js. It provides a full-stack solution with a powerful backend and a modern React-based frontend.

## Features

- **Next.js Frontend**: Modern React framework with server-side rendering
- **Parse Server Backend**: Fully featured backend-as-a-service
- **Express.js**: Custom server configuration
- **Parse Dashboard**: Built-in admin interface for data management
- **TypeScript Support**: Full type safety across the stack
- **Development Tools**: Hot reloading, debugging, and more

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm package manager
- MongoDB (for Parse Server database)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-project-name>
```

```bash
pnpm install
```

# Parse Server
APP_ID=your_app_id
MASTER_KEY=your_master_key
SERVER_URL=http://localhost:1337/parse
PARSE_MOUNT=/parse

# Database
DATABASE_URI=mongodb://localhost:27017/your_database_name

# Next.js
NEXT_PUBLIC_APP_ID=your_app_id
NEXT_PUBLIC_SERVER_URL=http://localhost:1337/parse

```bash
pnpm dev:all
```


#### Server side
We can use parse from "parse/node

```javascript
import Parse from 'parse/node';
``` 
 to access the parse server from the backend.

#### Client side
We can use parse from "parse" to access the parse server from the frontend.
```javascript
import Parse from 'parse';
```


