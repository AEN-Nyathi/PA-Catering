# Project QA Checklist

## Notes

- Migrated all Firebase logic into a domain-driven structure under `src/firebase` (auth, users,
  carwash, orders).
- Enhanced the `UserProfile` interface with roles, preferences, and metadata.
- Created reusable Firestore utilities for user data management.
- Built `useAuth` and `useUser` hooks for authentication and user profile access.
- Refactored car wash booking logic to use new utilities and hooks.
- Removed legacy and redundant code (e.g., old `users.ts`).
- Fixed broken import paths in menu, comments, and orders Sections after refactor.
- Consolidated order and cart type definitions in `src/types/index.ts`.
- Refactored `getOrdersForUserFromFirestore` to resolve type mismatches and ensure compatibility
  with new types.
- Created a centralized `updateUserDocument` utility for user profile updates.
- Refactored `UserAddress.tsx` to use the new utility and fixed all related errors.
- Fixed duplicate key bug in menu by correcting duplicate ProductIDs in pizza data and adding unique
  `id` to each category in `menuContext.ts`.
- Refactored `MenuSections.tsx` to use unique ids for keys and fixed missing key on
  `React.Fragment`.
- Combined category and product search results into a single array with unique keys before rendering
  in `MenuSections.tsx`, eliminating key collisions.
- Fixed all `ProductType` import paths to use `@/types` after type consolidation.
- Fixed implicit `any` errors in `ProductInfo.tsx`, `CartContext.tsx`, and `MenuSections.tsx`.
- Corrected key usage in `MenuSections.tsx` to use `group.Name` instead of missing `group.id`.
- Fixed all remaining TypeScript errors and synchronized type definitions (`Order`, `CartItem`,
  `UserProfile`) with their usage across the codebase.

- Focused on design consistency using Tailwind CSS and optimizing folder structure.
- Reference designs: `/menu`, `/menu/products`, `/profile/edit` pages and `PersonalInformation`
  component.
- Goals: Modularity, scalability, maintainability, and adherence to Next.js best practices.
- All text color MUST be white throughout the application (per user requirement).
- Use filter: `drop-shadow(0 0 3px #ff0000)` for all `h1` elements.
- Red-based theme is required; use `red-500` (not `red-500`) as `red-500` doesn’t work as intended.
- Global CSS approach with white text and red drop shadows is intentional and should be maintained.

- All text must use `text-white`.
- Main containers/top-level: `bg-black/50`.
- Nested elements: `bg-red-700`.
- Interactive elements (buttons, links, inputs):
  - Default: `bg-red-600`
  - Hover: `hover:bg-red-700`
- All borders: `border-red-500` or `border-white/50`.
- Remove all non-red/white/black colors (no blue, green, yellow, gray, etc.).
- Keep `rounded-md`/`rounded-md` and consistent spacing.
- Preserve accessibility: focus rings, hover states, etc.
- Red accents for borders, shadows, error states.
- Fix any `class`/`className` issues and remove invalid Tailwind classes.
- Maintain TypeScript compatibility and component functionality.
- Refactor applies to all component files in the listed directories.
- In parallel, analyze and propose an optimized folder structure for modularity, scalability, and
  maintainability.

---

## Priority System

### Priority Levels

- **P1 – Critical**  
  Tasks that unblock the build, fix existing errors, and consolidate core functionality. Must be
  completed first to establish a stable foundation.

- **P2 – High**  
  Tasks that introduce new abstractions, move code into the proper structure, and enable cleaner
  patterns. Depend on P1 work.

- **P3 – Medium**  
  Tasks focusing on UI consistency, styling, and documentation. Improve quality and maintainability
  once core functionality is solid.

### Task Priorities

| Task # | Description                                                                                       | Priority |
| -----: | ------------------------------------------------------------------------------------------------- | :------: |
|      1 | Remove old/empty directories                                                                      |    P1    |
|      2 | Remove obsolete `updateUserLoyalty` function and old `users.ts` file                              |    P1    |
|      3 | Remove all conflicting colors and invalid Tailwind classes                                        |    P1    |
|      4 | Fix all `class`/`className` issues in components                                                  |    P1    |
|      5 | Fix broken import paths in menu, comments, and orders pages                                       |    P1    |
|      6 | Fix all `ProductType` import paths after type consolidation                                       |    P1    |
|      7 | Search for and fix any remaining broken imports or type errors                                    |    P1    |
|      8 | Fix implicit `any` errors in `ProductInfo.tsx`, `CartContext.tsx`, and `MenuSections.tsx`         |    P1    |
|      9 | Fix obsolete function usage and remaining TypeScript errors across the codebase                   |    P1    |
|     10 | Fix duplicate `ProductID`s in pizza data in `menuContext.ts`                                      |    P1    |
|     11 | Add unique `id` to each category in `menuContext.ts`                                              |    P1    |
|     12 | Consolidate order/cart types in `src/types/index.ts`                                              |    P1    |
|     13 | Enhance the `UserProfile` interface in `src/types/index.ts`                                       |    P1    |
|     14 | Create `updateUserDocument` utility in `src/firebase/users/updateUser.ts`                         |    P1    |
|     15 | Implement user Firestore utilities in `src/firebase/users/utils.ts`                               |    P1    |
|     16 | Implement `useAuth` and `useUser` hooks                                                           |    P2    |
|     17 | Create new directory structure under `src/firebase`                                               |    P2    |
|     18 | Move authentication, user, carwash, and order files to new locations                              |    P2    |
|     19 | Refactor car wash booking actions to use new utilities                                            |    P2    |
|     20 | Refactor `CarWashOperations.tsx` to use new hooks/utilities                                       |    P2    |
|     21 | Refactor `getOrdersForUserFromFirestore` to use new types and fix mismatches                      |    P2    |
|     22 | Refactor `UserAddress.tsx` to use `updateUserDocument` and resolve lint/type errors               |    P2    |
|     23 | Analyze current UI for Tailwind CSS usage and design inconsistencies                              |    P3    |
|     24 | Compare all pages/components to reference designs                                                 |    P3    |
|     25 | Identify and document inconsistent elements (spacing, typography, color, styling, responsiveness) |    P3    |
|     26 | Propose specific Tailwind CSS and component refactorings for consistency                          |    P3    |
|     27 | Suggest reusable utility classes and components                                                   |    P3    |
|     28 | Refactor all pages and components for design consistency                                          |    P3    |
|     29 | Review and resolve lint/code issues from the design refactor                                      |    P3    |
|     30 | Refactor shared and subcomponents for design consistency                                          |    P3    |
|     31 | Systematically refactor all components to match the strict design system                          |    P3    |
|     32 | Ensure accessibility and red-accent consistency throughout UI                                     |    P3    |
|     33 | Maintain or improve TypeScript compatibility and functionality                                    |    P3    |
|     34 | Analyze current project folder structure                                                          |    P2    |
|     35 | Propose optimized folder structure with rationale and migration suggestions                       |    P3    |
|     36 | Final review and documentation cleanup                                                            |    P2    |

---

## Task List

1. [ ] Remove old/empty directories  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

2. [ ] Remove obsolete `updateUserLoyalty` function and old `users.ts` file  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

3. [ ] Remove all conflicting colors and invalid Tailwind classes  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

4. [ ] Fix all `class`/`className` issues in components  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

5. [ ] Fix broken import paths in menu, comments, and orders pages  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

6. [ ] Fix all `ProductType` import paths after type consolidation  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

7. [ ] Search for and fix any remaining broken imports or type errors  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

8. [ ] Fix implicit `any` errors in `ProductInfo.tsx`, `CartContext.tsx`, and `MenuSections.tsx`  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

9. [ ] Fix obsolete function usage and remaining TypeScript errors across the codebase  
        [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

10. [ ] Fix duplicate `ProductID`s in pizza data in `menuContext.ts`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

11. [ ] Add unique `id` to each category in `menuContext.ts`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

12. [ ] Consolidate order/cart types in `src/types/index.ts`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

13. [ ] Enhance the `UserProfile` interface in `src/types/index.ts`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

14. [ ] Create `updateUserDocument` utility in `src/firebase/users/updateUser.ts`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

15. [ ] Implement user Firestore utilities in `src/firebase/users/utils.ts`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

16. [ ] Implement `useAuth` and `useUser` hooks  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

17. [ ] Create new directory structure under `src/firebase`  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

18. [ ] Move authentication, user, carwash, and order files to new locations  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

19. [ ] Refactor car wash booking actions to use new utilities  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

20. [ ] Refactor `CarWashOperations.tsx` to use new hooks/utilities  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

21. [ ] Refactor `getOrdersForUserFromFirestore` to use new types and fix mismatches  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

22. [ ] Refactor `UserAddress.tsx` to use `updateUserDocument` and resolve lint/type errors  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

23. [ ] Analyze current UI for Tailwind CSS usage and design inconsistencies  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

24. [ ] Compare all pages/components to reference designs  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

25. [ ] Identify and document inconsistent elements (spacing, typography, color, styling,
        responsiveness)  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

26. [ ] Propose specific Tailwind CSS and component refactorings for consistency  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

27. [ ] Suggest reusable utility classes and components  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

28. [ ] Refactor all pages and components for design consistency  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

29. [ ] Review and resolve lint/code issues from the design refactor  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

30. [ ] Refactor shared and subcomponents for design consistency  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

31. [ ] Systematically refactor all components to match the strict design system  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

32. [ ] Ensure accessibility and red-accent consistency throughout UI  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

33. [ ] Maintain or improve TypeScript compatibility and functionality  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

34. [ ] Analyze current project folder structure  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

35. [ ] Propose optimized folder structure with rationale and migration suggestions  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task

36. [ ] Final review and documentation cleanup  
         [ ] Run `yarn run tsc` – if you find errors, fix them before moving to the next task
