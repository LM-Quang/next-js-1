### `React Context` for State management

-  Context is not store permernantly, when you reload the Webpage, the Context data will be cleared

1. Create a Context (favorites-context.tsx)

```
store
└──favorites-context.tsx
```

2. Wrap all the Component that uses the context (layout.tsx)

```
app
└──react-context
   └──layout.tsx
```

3. Use the Context (2 files: page.tsx)

```
app
└──react-context
   ├──page.tsx
   └──favorites
      └──page.tsx
```
