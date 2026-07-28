# Healthy Recipe Finder

React app (Vite + Tailwind CSS + React Router) for browsing, searching and viewing recipes.

## Routes

- `/` — landing page (hero, features, CTA)
- `/about` — about page
- `/recipes` — browse + filter all recipes
- `/recipes/:id` — single recipe detail

## Project structure

```
src/
  data/
    recipes.js              # recipe data (id, title, image, prepTime, cookTime, ingredients, steps...)
  hooks/
    useRecipeSearch.js       # search + max prep/cook time filtering logic
    useChecklist.js          # toggleable ingredient checklist state
  components/
    icons/
      Icons.jsx              # shared inline SVG icons
    Nav.jsx                  # header nav (Home / About / Recipes + Browse recipes CTA)
    Footer.jsx
    RecipeDetail.jsx         # composes the detail sub-components below
    recipe-detail/
      TagList.jsx
      RecipeMeta.jsx
      IngredientList.jsx
      StepList.jsx
    recipes/
      RecipeCard.jsx         # photo card used on the /recipes grid
      RecipeGrid.jsx
      RecipeFilters.jsx      # max prep/cook time selects + search input
    home/
      HeroSection.jsx
      HeroImage.jsx
      FeatureGrid.jsx
      RealLifeSection.jsx
      CtaBanner.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    RecipesPage.jsx
    RecipeDetailPage.jsx     # resolves :id from the URL, handles not-found
  App.jsx                    # <Routes> definitions
  main.jsx                   # entry point, wraps App in <BrowserRouter>
  index.css                  # Tailwind directives + font classes
```

Data lives in `data/recipes.js`, state logic lives in `hooks/`, and each page is a thin
composition of small, single-purpose components — so any section can be reused or swapped
independently.

Recipe photos use placeholder images from `picsum.photos` (seeded per recipe so they stay
stable across reloads) — swap the `image` field in `recipes.js` for your own photos when ready.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
