# Travel Planning App

A universal travel planning application built with Solito (React Native + Next.js) that allows users to manage trips and create packing lists.

## Tech Stack

- **Language**: TypeScript (strict mode)
- **Frontend**: Solito (React Native + Next.js)
- **Styling**: Tamagui (Universal Design System)
- **Database**: SQLite with Drizzle ORM
- **State Management**: React Query (TanStack Query) + Custom Hooks
- **Package Manager**: Yarn

## Project Structure

```
packages/
├── app/           # Shared navigation and business logic
├── ui/            # Universal components (Tamagui)
├── db/            # Database schema and queries (Drizzle)
└── config/        # Shared configuration

apps/
├── expo/          # Mobile app
└── next/          # Web app
```

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start development servers:
   ```bash
   # Web
   yarn web
   
   # Mobile
   yarn native
   ```

## Commands

- `yarn install` - Install dependencies
- `yarn web` - Start web development server
- `yarn native` - Start mobile development server
- `yarn build:web` - Build web app
- `yarn build:native` - Build mobile app
- `yarn type-check` - Run TypeScript type checking