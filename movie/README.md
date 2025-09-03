# Movie Library App (React + Redux + TMDb)

This is a scaffold for the **React JS Practical Exam** Movie Library app. It includes:
- Redux store with thunks for async API calls
- TMDb API integration (popular, search, details)
- Components: MovieList, MovieDetails, MovieSearch, Navbar, PrivateRoute
- Bootstrap styling and basic responsive layout
- Simple mock authentication (Redux + localStorage)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a Firebase project is NOT required. Instead get **TMDB API key** from https://www.themoviedb.org/settings/api
3. Copy `.env.example` to `.env` and paste your TMDB key:
   ```bash
   cp .env.example .env
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```

## Notes for the exam requirements mapping
- Redux actions/reducers: `src/store/`
- External API integration: `src/services/tmdb.js` (uses axios)
- Components structure: `src/components/*`
- Movie search, popular list, details: implemented
- Loading and basic error handling included
- Authentication: simple mock login (sign in with name)
- Navbar with links and sign in/out buttons
- Bootstrap included for styling

Good luck — modify and expand as needed for your submission.
