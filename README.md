# GuardFlex Connect

GuardFlex Connect is a modern web platform that connects licensed security guards with businesses needing temporary or emergency security staffing. The platform features real-time location tracking, automated payments, and strict verification processes.

## Features

- Role-based authentication for guards and employers
- Real-time guard location tracking
- Automated payment processing
- Background check integration
- Geofenced clock-in system
- Emergency alert system
- Mobile-responsive design

## Tech Stack

- **Frontend:** React + Next.js 14
- **UI Components:** Tailwind CSS + ShadCN
- **Backend:** Supabase (PostgreSQL, Auth, Real-time)
- **Deployment:** Vercel
- **Maps:** Mapbox GL JS
- **Background Checks:** Sterling API

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd security-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`
Then fill in your environment variables in \`.env.local\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- \`/src/app\` - Next.js 14 app router pages and layouts
- \`/src/components\` - Reusable UI components
- \`/src/lib\` - Utility functions and configurations
- \`/src/types\` - TypeScript type definitions
- \`/public\` - Static assets

## Development Guidelines

- Follow the TypeScript best practices
- Use ShadCN components for consistent UI
- Implement proper error handling
- Follow the role-based access control
- Test all features thoroughly

## License

[License Type] - See LICENSE file for details
