# City Snapshot

A small web app that allows users to enter a city and view a compact snapshot containing current weather information with a sun-protection advise and local time.

## Technical Details

- Framework: React
- Build tool: Vite
- Language: TypeScript
- Styling: Tailwind CSS
- External API: Tomorrow.io Weather API (https://docs.tomorrow.io/reference/realtime-weather)

## Architecture
The application has component-based architecture.
- UI Components: reusable components.
- Hooks: custom hooks for logic encapsulating (e.g., data fetching).
- Types: shared TypeScript interfaces.
- Utils: reusable helper functions. 

## Environment Configuration
- Sensitive data such as API keys are stored as environment variables.
- Change "your_api_key_here" to your API key in the .env.

## Example Flow
1. User enters a location.
2. App sends a repuest to Tomorrow.io API.
3. Response is parsed and typed.
4. UI updates with real-time weather conditions.

## AI Usage

I used AI tools such as ChatGPT and Copilot. They helped me with:
- generating a function to compute local time based on API response data (using luxon and timezone lookup),
- providing guidance and improving component structure and making the architecture more component-based
- assisting with boilerplate code generation (Copilot), particularly for React hooks and general setup.

Before accepting suggestions or changes I reviewed and verified them manually. AI was used as a support tool.

## Setup Instructions

In the .env file change "your_api_key_here" to your own API key.

Run locally:

```bash
npm install
npm run dev