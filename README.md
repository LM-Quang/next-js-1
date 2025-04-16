### `React Context` for State management

-  Context is not store permernantly, when you reload the Webpage, the Context data will be cleared

1. Create a Context
   \_store
   |\_ favorites-context.tsx

2. Wrap all the Component that uses the context
   \_app
   |\_layout.tsx

3. Use the Context
   \_app
   |\_page.tsx
   |\_favorites
   |\_page.tsx

### Note

1. Update State based on previous state
   \_components
   |\_UpdateState.tsx
