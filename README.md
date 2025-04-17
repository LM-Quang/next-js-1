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
      ├──layout.tsx
      ├──page.tsx
      ├──community/
      |  └──page.tsx
      └──meals/
         ├──page.tsx
         ├──[mealSlug]/
         |  └──page.tsx
         └──share/
            └──page.tsx
```
