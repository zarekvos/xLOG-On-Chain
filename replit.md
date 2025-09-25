# replit.md

## Overview

ChainBlog is a decentralized blogging platform built on Web3 technology that allows users to publish content permanently on the blockchain. The application enables content creators to write and publish blog posts across multiple EVM-compatible networks (Ethereum, Base, BNB Chain, and Avalanche), ensuring true ownership, censorship resistance, and permanent storage of their content. The platform features a modern React frontend with Web3 wallet integration and a Node.js backend that manages blog post data.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Web3 Integration**: Wagmi for Ethereum interactions and RainbowKit for wallet connection UI
- **Animation**: Framer Motion for smooth UI animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework using TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation with sample data for development
- **API Design**: RESTful API endpoints for blog post CRUD operations
- **Development Server**: Custom Vite integration for hot module replacement in development

### Database Schema
- **Users Table**: Stores user credentials with username/password authentication
- **Blog Posts Table**: Contains blog post content, metadata, blockchain transaction details (chain ID, transaction hash), and timestamps
- **Validation**: Zod schemas for runtime type validation and data integrity

### Authentication & Wallet Integration
- **Web3 Wallets**: RainbowKit integration supporting major Ethereum wallets
- **Multi-Chain Support**: Configuration for Ethereum, Base, BNB Chain, and Avalanche networks
- **Session Management**: Express sessions with PostgreSQL session store

### Development Experience
- **Hot Reload**: Vite development server with Express backend integration
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Code Organization**: Monorepo structure with shared types and schemas between client and server
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@/, @shared/, etc.)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments
- **drizzle-orm**: Type-safe PostgreSQL ORM with zero-runtime overhead
- **express**: Web application framework for Node.js backend
- **react**: Frontend UI library with hooks and modern patterns
- **vite**: Fast build tool and development server

### Web3 & Blockchain
- **@rainbow-me/rainbowkit**: Wallet connection UI and multi-wallet support
- **wagmi**: React hooks for Ethereum blockchain interactions
- **viem**: Low-level Ethereum client library

### UI & Styling
- **@radix-ui/***: Headless UI primitives for accessible components
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React
- **lucide-react**: Modern icon library

### Development Tools
- **typescript**: Static type checking
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation and formatting
- **zod**: Runtime type validation

### Build & Deployment
- **esbuild**: Fast JavaScript bundler for server-side code
- **tsx**: TypeScript execution for development
- **postcss**: CSS processing with Tailwind CSS