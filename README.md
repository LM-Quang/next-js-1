### 1. `React Context` for State management

-  Context is not store permernantly, when you reload the Webpage, the Context data will be cleared

1. Create a Context (favorites-context.tsx)

```
next-js/
└──store/
   └──favorites-context.tsx
```

2. Wrap all the Component that uses the context (layout.tsx)

```
next-js/
└──app/
   └──react-context/
      └──layout.tsx
```

3. Use the Context (2 files: page.tsx)

```
next-js/
└──app/
   └──react-context/
      ├──layout.tsx
      ├──page.tsx
      └──favorites/
         └──page.tsx
```

### 2. `Dynamic Routes`

```
next-js/
└──app/
   └──dynamic-routes/
      ├──page.tsx
      └──[routeName]/
         └──page.tsx
```

### 3. `Food app`

```
next-js/
   ├──app/
   |  ├──community/
   |  |  └──page.tsx
   |  ├──meals/
   |  |  ├──[mealSlug]/
   |  |  |  └──page.tsx
   |  |  ├──share/
   |  |  |  └──page.tsx
   |  |  ├──page.tsx
   |  |  └──loading-out.tsx  => When only want that Loading state for a specific component
   |  ├──layout.tsx
   |  └──page.tsx
   ├──components/
   └──lib/  => This is for API call
```

### 4. `Server Side` component and `Client Side` component

Try to split component into smaller component to seperare the `Server` component and `Client` component

```
next-js/
   └──components/
      └──main-header/
         └──MainHeader.tsx
```

### 5. `Image` with `Unknown` dimensions, use the `fill` attribute

[Read more](https://nextjs.org/docs/pages/api-reference/components/image#fill)

```
next-js/
   └──components/
      └──meals/
         └──MealItem.tsx
```

### 6. Handle `Loading` state

1. Add `loading.tsx` to App folder to have a Loading state for the entire App when any component waits for calling API

```
next-js/
   └──app/
      ├──layout.tsx
      ├──loading.tsx  => This is for showing Loading state when calling API
      └──page.tsx
```

2. Add `loading-out.tsx` to a certain Page when you only want to apply Loading state to one Page

```
next-js/
   └──app/
      └──meals/
         ├──page.tsx
         └──loading-out.tsx  => When only want that Loading state for a specific component
```

### 7. Handle `Error` (Similar to `Loading`)

```
next-js/
   └──app/
      └──meals/
         ├──page.tsx
         └──error.tsx  => When only want that Error for a specific component
```

### 8. Handle `Not Found`

```
next-js/
   └──app/
      ├──layout.tsx
      ├──not-found.tsx
      └──page.tsx
```

### 9. `useParams` Hook to get Parameter from Dynamic URL, `notFound` method from Next JS

(Read more)[https://nextjs.org/docs/app/api-reference/functions/use-params]

```
next-js/
   └──app/
      └──meals/
         └──[mealSlug]/
            └──page.tsx
```

### 10. `useRef` Hook and upload Image file

(Read more)[https://dev.to/kirubelkinfe/mastering-useref-in-react-with-typescript-4-different-use-cases-for-useref-2a87]

```
next-js/
   └──components/
      └──meals/
         └──ImagePicker.tsx
```

### 12. Using `Server Actions` for Handling Form submissions

```
next-js/
   ├──app/
   |  └──meals/
   |     └──share/
   |        └──page.tsx
   └──lib/
      └──actions.ts
```

\*\* Note. Add these `Dependency`

```bash
npm install slugify
npm install xss
```

1. `Slugify` to Slugify a string. Useful for URLs, filenames, and IDs

```
next-js/
   └──lib/
      └──actions.ts
```

2. XSS (A module used to filter input from users to prevent XSS attacks)

```
next-js/
   ├──app/
   |  └──meals/
   |     └──[mealSlug]/
   |        └──page.tsx
   └──lib/
      └──actions.ts
```
