# App Blueprint: GuardFlex Connect  

## 1. Project Breakdown  

**App Name:** GuardFlex Connect  
**Platform:** Web (responsive design for mobile/desktop)  
**Summary:** GuardFlex Connect bridges the gap between licensed security guards and businesses needing temporary or emergency security staffing. The platform ensures accountability through real-time geotagged shift verification, automated payments, and strict no-show policies. Guards gain flexible gig opportunities with streamlined pay processing, while employers access vetted, on-demand security personnel with full shift transparency.  

**Primary Use Case:**  
- **Guards:** Sign up, pass background checks, browse/accept shifts, track earnings, and receive reminders.  
- **Employers:** Post shifts, monitor guard locations in real-time, verify on-site clock-ins, and manage payments.  

**Authentication Requirements:**  
- **Role-based auth (Supabase):** Guards (email/password + license verification), Employers (email/password + business verification).  
- **Background checks:** Third-party API integration (e.g., Sterling) for guard onboarding.  

---  

## 2. Tech Stack Overview  
- **Frontend Framework:** React + Next.js (App Router for dynamic routing)  
- **UI Library:** Tailwind CSS + ShadCN (pre-built accessible components)  
- **Backend (BaaS):** Supabase (PostgreSQL database, real-time location updates, auth)  
- **Deployment:** Vercel (serverless functions for background checks/webhooks)  

---  

## 3. Core Features  

### **For Guards:**  
- **Shift Management:** View/open shifts, cancel (with penalties), emergency coverage alerts.  
- **Geofenced Clock-In:** Guards can only log hours when GPS confirms on-site presence.  
- **Payment Dashboard:** Automatic hour tracking, direct deposit setup, T4 forms (Canada).  
- **Notifications:** Email (24h pre-shift) + in-app (1h prior, emergency shifts).  

### **For Employers:**  
- **Shift Posting:** Set location, time, briefing requirements (first-time guards arrive 45m early).  
- **Real-Time Tracking:** Live guard location via Supabase’s real-time WebSocket API.  
- **Billing:** Automated $2/hour fee per guard, invoicing, and payment history.  

### **Admin/Safety:**  
- **No-Score Penalty System:** Automated suspensions/bans (stored in Supabase policies).  
- **Emergency Protocols:** Panic button for guards (triggers employer alerts).  

---  

## 4. User Flow  

### **Guard Onboarding:**  
1. Sign up → Submit license + background check (Sterling API webhook).  
2. Approved? → Access shift board → Accept shift → Receive reminders.  
3. Arrive on-site → GPS verifies location → Clock-in enabled.  
4. Shift ends → Auto-log hours → Weekly direct deposit.  

### **Employer Flow:**  
1. Post shift → Set geofence radius → Guard accepts.  
2. Track guard en route (Supabase real-time GPS pings).  
3. Guard clocks in → Employer dashboard confirms.  
4. Shift completes → Auto-billing ($2/hour) → Guard paid.  

---  

## 5. Design & UI/UX Guidelines  

- **Tailwind CSS Themes:**  
  - Guards: Dark blue (trust) + green (availability).  
  - Employers: Navy (authority) + orange (urgent shifts).  
- **ShadCN Components:**  
  - Data tables (shift history), modals (penalty warnings), toast notifications (shift reminders).  
- **Critical UX Rules:**  
  - Clock-in button *only* appears when GPS-confirmed (disabled otherwise).  
  - Penalty notifications are bold red with countdown timers.  

---  

## 6. Technical Implementation  

### **Frontend (Next.js):**  
- `app/guards/dashboard/page.tsx`: Shift board with Supabase real-time subscription.  
- `app/employers/tracking/[shiftId]/page.tsx`: Live Mapbox GL JS map + Supabase GPS stream.  
- **API Routes:**  
  - `/api/background-check`: Handles Sterling webhook → updates Supabase `guards` table.  

### **Backend (Supabase):**  
- **Tables:**  
  - `guards`: License status, penalty count, earnings.  
  - `shifts`: Geofence coordinates, employer_id, status (open/closed).  
  - `locations`: Real-time GPS updates (RLS enabled for employer access only).  
- **Edge Functions:**  
  - Auto-suspend guards after 3 no-shows (cron job).  

### **Deployment (Vercel):**  
- Environment variables for Supabase URL/keys.  
- Serverless functions for background checks (avoid client-side secrets).  

---  

## 7. Development Setup  

### **Tools Required:**  
- Node.js v18+, Supabase CLI, Vercel CLI.  

### **Steps:**  
1. Clone repo → `npm install`.  
2. `supabase init` → Link local project to Supabase DB.  
3. Seed DB: `guards` and `shifts` tables with RLS policies.  
4. `vercel env pull` → Add Sterling API keys.  
5. `vercel deploy` → Push to production.  

---  

**Strict Adherence to Specified Tech Stack:** No deviations from React/Next.js, Tailwind/ShadCN, Supabase, or Vercel. All features must use only these tools.