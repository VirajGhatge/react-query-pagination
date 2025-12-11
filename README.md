**Table of contents**

        Project overview
        Requirements
        Setup & run
        Environment variables
        Folder structure
        Pagination logic (detailed)
        Useful commands
        -License

**Project overview**

        This is a client-side React project built with Vite and TypeScript. It demonstrates fetching a paginated list of users using Axios and React Query with:
        -src/api for API calls
        -src/utils/hooks.tsx providing useUsers (React Query hook)
        -A PaginatedList component that drives pagination UI
        -Prefetching of the next page using React Query
        The default API base URL is VITE_API_URL (set in .env), which in the provided .env is set to https://dummyjson.com.

**Requirements**

Node.js (recommended v18+)
npm or yarn

**Setup & run**

Clone the repo (or ensure the project folder is present).
Install dependencies:

        npm install
        # or
        yarn

**Environment variables**

VITE_API_URL — base URL for the backend API (example: https://dummyjson.com)

**Folder structure**

/
├─ .env
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src/
├─ App.tsx
├─ api/
│ ├─ client.tsx # axios client (baseURL from config)
│ └─ users.ts # fetchUsers function
├─ config/
│ └─ config.ts
├─ components/
│ ├─ userCard/
│ ├─ userListSkeleton/
│ └─ button/
├─ screen/
│ └─ paginatedList/
│ ├─ PaginatedList.tsx
│ └─ components/
│ ├─ listHeader/
│ └─ listFooter/
├─ types/
│ ├─ User.type.ts
│ └─ UserListResponse.type.ts
└─ utils/
└─ hooks.tsx # useUsers hook (React Query)

      Note:highlights files relevant to the pagination flow

**Pagination logic (detailed)**

The main pagination flow lives in:
src/screen/paginatedList/PaginatedList.tsx — UI component driving pagination
src/utils/hooks.tsx — useUsers React Query hook wrapping fetchUsers

    Setting data per page via:
        const LIMIT = 6;

    Pagination uses skip step
    for page 1 skip -> 0
    for page 2 skip  -> LIMIT
    for page 3 skip -> LIMIT*2

**useUsers used for fetch data and prefetching is also mentioned inside it.**

**Quick checklist to get the project working**

        -Ensure .env contains VITE_API_URL pointing to a working users endpoint.
        -Run npm install.
        -Run npm run dev and open the Vite URL.

**License**
This project is released under the MIT License.
