export const sampleQuestions = [
  {
    id: "1",
    title: "How do I get started with React development?",
    description:
      "I'm new to web development and want to learn React. What are the best resources, tools, and steps to get started? I have some basic JavaScript knowledge but no experience with frameworks.",
    tags: ["react", "javascript", "frontend", "beginners"],
    createdAt: "2024-01-15T10:30:00.000Z",
    image: "/pic1.png",
  },
  {
    id: "2",
    title: "What's the difference between useState and useEffect in React?",
    description:
      "I'm learning React hooks and I'm confused about when to use useState vs useEffect. Can someone explain the key differences and provide examples of when each should be used?",
    tags: ["react", "hooks", "usestate", "useeffect"],
    createdAt: "2024-01-14T15:45:00.000Z",
    image: null,
  },
  {
    id: "3",
    title: "Best practices for responsive design with Tailwind CSS",
    description:
      "I'm using Tailwind CSS for my project and want to ensure it's fully responsive. What are the best practices for creating responsive layouts? Any tips for mobile-first design?",
    tags: ["tailwind", "css", "responsive", "design"],
    createdAt: "2024-01-13T09:20:00.000Z",
    image: "/pic2.png",
  },
  {
    id: "4",
    title: "How to implement authentication in a React app?",
    description:
      "I need to add user authentication to my React application. What are the recommended approaches? Should I use Firebase Auth, Auth0, or implement my own solution?",
    tags: ["react", "authentication", "firebase", "security"],
    createdAt: "2024-01-12T14:15:00.000Z",
    image: null,
  },
  {
    id: "5",
    title: "What are the best JavaScript frameworks for 2024?",
    description:
      "I'm planning to start a new project and want to choose the right JavaScript framework. What are the current trends and which frameworks are most popular for different use cases?",
    tags: ["javascript", "frameworks", "react", "vue", "angular"],
    createdAt: "2024-01-11T11:00:00.000Z",
    image: "/pic3.png",
  },
  {
    id: "6",
    title: "How to optimize website performance and loading speed?",
    description:
      "My website is loading slowly and I want to improve its performance. What are the most effective techniques for optimizing loading speed, images, and overall user experience?",
    tags: ["performance", "optimization", "web", "speed"],
    createdAt: "2024-01-10T16:30:00.000Z",
    image: null,
  },
  {
    id: "7",
    title: "Should I learn TypeScript as a JavaScript developer?",
    description:
      "I've been working with JavaScript for a while and wondering if I should invest time in learning TypeScript. What are the benefits and is it worth the learning curve?",
    tags: ["typescript", "javascript", "learning", "development"],
    createdAt: "2024-01-09T13:45:00.000Z",
    image: null,
  },
  {
    id: "8",
    title: "What's the best way to deploy a React app to production?",
    description:
      "I've built my React app and now need to deploy it. What are the best hosting platforms and deployment strategies? Looking for something reliable and cost-effective.",
    tags: ["react", "deployment", "hosting", "production"],
    createdAt: "2024-01-08T08:15:00.000Z",
    image: null,
  },
];

export const sampleAnswers = [
  {
    id: "1",
    questionId: "1",
    content:
      "Great question! Here's a comprehensive step-by-step guide to get started with React:\n\n1. **Learn the basics**: Start with the official React documentation at react.dev - it's excellent and free\n2. **Set up your environment**: Install Node.js and use Create React App or Vite for quick setup\n3. **Practice with small projects**: Build simple components and gradually increase complexity\n4. **Learn state management**: Start with useState, then move to Context API or Redux\n5. **Build a portfolio project**: Create something meaningful to showcase your skills\n\n**Recommended learning path**:\n- Week 1-2: React fundamentals and JSX\n- Week 3-4: Hooks (useState, useEffect)\n- Week 5-6: Component composition and props\n- Week 7-8: Build a complete project\n\nI also recommend checking out React tutorials on YouTube and joining React communities on Discord!",
    votes: 12,
    createdAt: "2024-01-15T11:00:00.000Z",
  },
  {
    id: "2",
    questionId: "1",
    content:
      "I'd also recommend checking out these excellent resources:\n\n**Free Resources**:\n- **YouTube**: Traversy Media and The Net Ninja have amazing React tutorials\n- **Courses**: Udemy courses by Maximilian Schwarzmüller are top-notch\n- **Practice**: Use platforms like CodeSandbox to experiment without setup\n- **Community**: Join React Discord servers and Reddit communities\n\n**Paid Resources**:\n- Frontend Masters React courses\n- Epic React by Kent C. Dodds\n- React for Beginners by Wes Bos\n\n**Pro Tips**:\n- Start with functional components and hooks\n- Don't try to learn everything at once\n- Build projects, don't just watch tutorials\n- Join coding communities for support\n\nRemember: Consistency is key. Code a little bit every day!",
    votes: 8,
    createdAt: "2024-01-15T12:30:00.000Z",
  },
  {
    id: "3",
    questionId: "2",
    content:
      "Excellent question! Here's a clear breakdown of useState vs useEffect:\n\n**useState**: Manages component state (data that can change)\n- Used for storing values that trigger re-renders when changed\n- Examples: form inputs, counters, toggle states, user data\n\n**useEffect**: Handles side effects (operations outside React's render cycle)\n- Used for API calls, subscriptions, DOM manipulation, timers\n- Runs after component renders\n\n**Practical Examples**:\n```jsx\n// useState example\nconst [count, setCount] = useState(0);\nconst [user, setUser] = useState(null);\n\n// useEffect example\nuseEffect(() => {\n  document.title = `Count: ${count}`; // Side effect\n  fetchUserData().then(setUser); // API call\n}, [count]); // Dependency array\n```\n\n**Key Differences**:\n- useState: \"What data do I need to track?\"\n- useEffect: \"What should happen when something changes?\"\n\nThink of useState as your component's memory and useEffect as your component's actions!",
    votes: 15,
    createdAt: "2024-01-14T16:00:00.000Z",
  },
  {
    id: "4",
    questionId: "2",
    content:
      "Let me add some practical examples to clarify:\n\n**useState Use Cases**:\n- Form inputs (email, password, search)\n- UI state (modal open/closed, loading states)\n- Data that changes over time (counters, timers)\n- User preferences (theme, language)\n\n**useEffect Use Cases**:\n- Fetching data from APIs\n- Setting up subscriptions (WebSocket, event listeners)\n- Updating document title or meta tags\n- Cleanup operations (removing event listeners)\n\n**Common Pattern**:\n```jsx\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    setLoading(true);\n    fetchUser(userId)\n      .then(data => setUser(data))\n      .finally(() => setLoading(false));\n  }, [userId]);\n\n  if (loading) return <div>Loading...</div>;\n  return <div>{user.name}</div>;\n}\n```\n\nThis pattern is used in almost every React app!",
    votes: 7,
    createdAt: "2024-01-14T17:30:00.000Z",
  },
  {
    id: "5",
    questionId: "3",
    content:
      'Here are the essential best practices for responsive design with Tailwind CSS:\n\n**1. Mobile-First Approach**:\n- Start with mobile styles, then add larger breakpoints\n- Use responsive prefixes: sm:, md:, lg:, xl:\n- Example: `w-full md:w-1/2 lg:w-1/3`\n\n**2. Flexible Layouts**:\n```html\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <div class="card">Content</div>\n</div>\n```\n\n**3. Typography Scaling**:\n- Use responsive text sizes: `text-sm md:text-base lg:text-lg`\n- Maintain readable line heights: `leading-relaxed`\n- Consider font weights: `font-medium md:font-semibold`\n\n**4. Spacing Consistency**:\n- Use consistent spacing scale: `p-4 md:p-6 lg:p-8`\n- Maintain proper margins: `mb-4 md:mb-6`\n- Consider container max-widths\n\n**5. Image Optimization**:\n- Use responsive images: `w-full h-auto`\n- Consider aspect ratios: `aspect-video`\n- Optimize for different screen densities\n\n**Pro Tips**:\n- Test on real devices, not just dev tools\n- Use Tailwind\'s container queries for complex layouts\n- Consider dark mode with `dark:` prefix\n- Use CSS Grid for complex responsive layouts',
    votes: 11,
    createdAt: "2024-01-13T10:00:00.000Z",
  },
  {
    id: "6",
    questionId: "3",
    content:
      'I\'ll add some advanced responsive techniques:\n\n**Container Queries** (Tailwind CSS v3.3+):\n```html\n<div class="@container">\n  <div class="@lg:grid-cols-3 @md:grid-cols-2 grid-cols-1">\n    <!-- Responsive based on container, not viewport -->\n  </div>\n</div>\n```\n\n**Responsive Navigation**:\n```html\n<nav class="hidden md:flex lg:space-x-8">\n  <!-- Desktop navigation -->\n</nav>\n<button class="md:hidden">\n  <!-- Mobile menu button -->\n</button>\n```\n\n**Responsive Tables**:\n```html\n<div class="overflow-x-auto">\n  <table class="min-w-full divide-y divide-gray-200">\n    <!-- Table content -->\n  </table>\n</div>\n```\n\n**Key Breakpoints to Remember**:\n- sm: 640px (small tablets)\n- md: 768px (tablets)\n- lg: 1024px (laptops)\n- xl: 1280px (desktops)\n- 2xl: 1536px (large screens)\n\nAlways prioritize mobile experience first!',
    votes: 6,
    createdAt: "2024-01-13T11:45:00.000Z",
  },
  {
    id: "7",
    questionId: "4",
    content:
      "For most projects, I'd strongly recommend **Firebase Auth** for these reasons:\n\n**Why Firebase Auth is the best choice**:\n- **Easy to implement**: Minimal setup, great documentation\n- **Built-in security**: Handles security best practices automatically\n- **Multiple providers**: Google, Facebook, Twitter, GitHub, email/password\n- **Generous free tier**: 10,000 authentications per month\n- **Real-time updates**: Automatic user state synchronization\n\n**Implementation example**:\n```jsx\nimport { auth } from './firebase';\nimport { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';\n\n// Sign in\nconst login = async (email, password) => {\n  try {\n    const userCredential = await signInWithEmailAndPassword(auth, email, password);\n    return userCredential.user;\n  } catch (error) {\n    console.error('Login error:', error);\n  }\n};\n\n// Sign up\nconst signup = async (email, password) => {\n  try {\n    const userCredential = await createUserWithEmailAndPassword(auth, email, password);\n    return userCredential.user;\n  } catch (error) {\n    console.error('Signup error:', error);\n  }\n};\n```\n\n**Alternative options**:\n- **Auth0**: More features but can be overkill for simple apps\n- **Supabase Auth**: Great if you're using Supabase for database\n- **Custom solution**: More control but requires extensive security knowledge\n\nStart with Firebase Auth unless you have specific requirements it doesn't meet!",
    votes: 9,
    createdAt: "2024-01-12T15:00:00.000Z",
  },
  {
    id: "8",
    questionId: "4",
    content:
      "Let me add some security considerations and best practices:\n\n**Security Best Practices**:\n- Always use HTTPS in production\n- Implement proper password requirements\n- Add rate limiting for login attempts\n- Use environment variables for API keys\n- Implement proper error handling\n\n**User Experience Considerations**:\n- Add loading states during authentication\n- Provide clear error messages\n- Implement \"Remember me\" functionality\n- Add password reset capabilities\n- Consider social login options\n\n**State Management**:\n```jsx\nimport { createContext, useContext, useState, useEffect } from 'react';\n\nconst AuthContext = createContext();\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    const unsubscribe = auth.onAuthStateChanged((user) => {\n      setUser(user);\n      setLoading(false);\n    });\n\n    return unsubscribe;\n  }, []);\n\n  return (\n    <AuthContext.Provider value={{ user, loading }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n```\n\nThis pattern ensures your app always knows the user's authentication state!",
    votes: 5,
    createdAt: "2024-01-12T16:30:00.000Z",
  },
  {
    id: "9",
    questionId: "5",
    content:
      "Here's my analysis of the best JavaScript frameworks for 2024:\n\n**React** - Still the most popular choice:\n- **Pros**: Huge ecosystem, great community, excellent tooling\n- **Cons**: Steep learning curve, frequent updates\n- **Best for**: Large applications, teams, enterprise\n\n**Vue.js** - The progressive framework:\n- **Pros**: Easy to learn, excellent documentation, great performance\n- **Cons**: Smaller ecosystem compared to React\n- **Best for**: Small to medium projects, rapid prototyping\n\n**Angular** - The enterprise choice:\n- **Pros**: Full-featured, TypeScript-first, excellent for large teams\n- **Cons**: Steep learning curve, opinionated\n- **Best for**: Enterprise applications, large teams\n\n**Svelte** - The newcomer:\n- **Pros**: Excellent performance, less boilerplate, great DX\n- **Cons**: Smaller ecosystem, fewer job opportunities\n- **Best for**: Performance-critical applications\n\n**My Recommendation**:\n- **Beginners**: Start with Vue.js\n- **Job market**: Learn React\n- **Enterprise**: Consider Angular\n- **Performance**: Try Svelte\n\nAll frameworks are excellent choices - pick based on your specific needs!",
    votes: 13,
    createdAt: "2024-01-11T12:00:00.000Z",
  },
  {
    id: "10",
    questionId: "5",
    content:
      "Let me add some specific use cases and trends for 2024:\n\n**Emerging Trends**:\n- **Server Components**: React Server Components gaining traction\n- **Islands Architecture**: Astro, Fresh, and similar frameworks\n- **Meta-frameworks**: Next.js, Nuxt, SvelteKit dominating\n- **TypeScript adoption**: Becoming standard across all frameworks\n\n**Framework Comparison by Use Case**:\n\n**E-commerce**:\n- React + Next.js (most popular)\n- Vue + Nuxt (excellent performance)\n\n**Blog/Content**:\n- Astro (best for static content)\n- Next.js (great for dynamic content)\n\n**Dashboard/Admin**:\n- React (most components available)\n- Vue (excellent admin templates)\n\n**Real-time Apps**:\n- Svelte (best performance)\n- React (largest ecosystem)\n\n**Learning Path Recommendation**:\n1. Learn JavaScript fundamentals thoroughly\n2. Pick one framework and master it\n3. Learn TypeScript\n4. Explore meta-frameworks\n5. Keep an eye on emerging technologies\n\nRemember: The best framework is the one you and your team can be most productive with!",
    votes: 7,
    createdAt: "2024-01-11T13:30:00.000Z",
  },
  {
    id: "11",
    questionId: "6",
    content:
      'Here are the most effective website performance optimization techniques:\n\n**1. Image Optimization**:\n- Use WebP format with fallbacks\n- Implement lazy loading: `loading="lazy"`\n- Use responsive images with `srcset`\n- Compress images without quality loss\n- Consider using CDN for image delivery\n\n**2. Code Optimization**:\n- Minify CSS, JavaScript, and HTML\n- Remove unused CSS with PurgeCSS\n- Use code splitting and lazy loading\n- Implement tree shaking for JavaScript\n- Use modern build tools (Vite, Webpack 5)\n\n**3. Caching Strategies**:\n- Implement browser caching with proper headers\n- Use service workers for offline functionality\n- Cache API responses appropriately\n- Use CDN for static assets\n\n**4. Server Optimization**:\n- Enable Gzip/Brotli compression\n- Use HTTP/2 or HTTP/3\n- Optimize database queries\n- Use Redis for session storage\n- Implement proper caching headers\n\n**5. Core Web Vitals**:\n- Optimize Largest Contentful Paint (LCP)\n- Reduce First Input Delay (FID)\n- Minimize Cumulative Layout Shift (CLS)\n\n**Tools to Use**:\n- Lighthouse for performance auditing\n- WebPageTest for detailed analysis\n- GTmetrix for monitoring\n- Google PageSpeed Insights\n\nStart with image optimization - it usually gives the biggest performance boost!',
    votes: 16,
    createdAt: "2024-01-10T17:00:00.000Z",
  },
  {
    id: "12",
    questionId: "6",
    content:
      "Let me add some specific implementation examples:\n\n**Image Optimization with Next.js**:\n```jsx\nimport Image from 'next/image';\n\n<Image\n  src=\"/hero.jpg\"\n  alt=\"Hero image\"\n  width={1200}\n  height={600}\n  priority={true} // For above-the-fold images\n  placeholder=\"blur\"\n  blurDataURL=\"data:image/jpeg;base64,...\"\n/>\n```\n\n**Lazy Loading Components**:\n```jsx\nimport { lazy, Suspense } from 'react';\n\nconst HeavyComponent = lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}\n```\n\n**Service Worker for Caching**:\n```javascript\n// sw.js\nself.addEventListener('install', (event) => {\n  event.waitUntil(\n    caches.open('v1').then((cache) => {\n      return cache.addAll([\n        '/',\n        '/styles/main.css',\n        '/scripts/main.js'\n      ]);\n    })\n  );\n});\n```\n\n**Performance Monitoring**:\n```javascript\n// Monitor Core Web Vitals\nimport { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';\n\ngetCLS(console.log);\ngetFID(console.log);\ngetFCP(console.log);\ngetLCP(console.log);\ngetTTFB(console.log);\n```\n\nRemember: Performance is a feature, not an afterthought!",
    votes: 8,
    createdAt: "2024-01-10T18:30:00.000Z",
  },
  {
    id: "13",
    questionId: "7",
    content:
      "Absolutely YES! Learning TypeScript is one of the best investments you can make as a JavaScript developer. Here's why:\n\n**Major Benefits**:\n\n**1. Better Developer Experience**:\n- IntelliSense and autocomplete\n- Catch errors at compile time\n- Better refactoring support\n- Improved debugging\n\n**2. Enhanced Code Quality**:\n- Type safety prevents runtime errors\n- Self-documenting code\n- Better code organization\n- Easier to maintain large codebases\n\n**3. Career Growth**:\n- High demand in job market\n- Better salary prospects\n- Required for many modern frameworks\n- Industry standard for large projects\n\n**4. Framework Integration**:\n- React with TypeScript is excellent\n- Vue 3 has built-in TypeScript support\n- Angular is TypeScript-first\n- Next.js works great with TypeScript\n\n**Learning Path**:\n1. Start with basic types (string, number, boolean)\n2. Learn interfaces and type aliases\n3. Understand generics\n4. Practice with real projects\n5. Learn advanced patterns\n\n**Getting Started**:\n```typescript\n// Basic types\nlet name: string = 'John';\nlet age: number = 30;\nlet isActive: boolean = true;\n\n// Interfaces\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  isActive?: boolean; // Optional property\n}\n\n// Functions\nfunction greet(user: User): string {\n  return `Hello, ${user.name}!`;\n}\n```\n\nThe learning curve is worth it - you'll write better code and catch bugs before they reach production!",
    votes: 14,
    createdAt: "2024-01-09T14:30:00.000Z",
  },
  {
    id: "14",
    questionId: "7",
    content:
      "Let me add some practical tips for the TypeScript learning journey:\n\n**Common Challenges and Solutions**:\n\n**1. Gradual Migration**:\n- Start with `.js` files and rename to `.ts`\n- Use `// @ts-ignore` for problematic code\n- Enable strict mode gradually\n- Use `any` type initially, then refine\n\n**2. Essential TypeScript Features**:\n```typescript\n// Union types\ntype Status = 'loading' | 'success' | 'error';\n\n// Generic types\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\n// Utility types\ntype PartialUser = Partial<User>;\ntype UserKeys = keyof User;\n\n// Type guards\nfunction isUser(obj: any): obj is User {\n  return obj && typeof obj.name === 'string';\n}\n```\n\n**3. React with TypeScript**:\n```typescript\ninterface Props {\n  title: string;\n  count?: number;\n  onIncrement: () => void;\n}\n\nconst Counter: React.FC<Props> = ({ title, count = 0, onIncrement }) => {\n  return (\n    <div>\n      <h2>{title}</h2>\n      <p>Count: {count}</p>\n      <button onClick={onIncrement}>Increment</button>\n    </div>\n  );\n};\n```\n\n**4. Best Practices**:\n- Use strict mode from the start\n- Prefer interfaces over type aliases for objects\n- Use const assertions for immutable data\n- Leverage TypeScript's built-in utility types\n- Write types for external libraries\n\n**Resources**:\n- TypeScript Handbook (official)\n- TypeScript Deep Dive by Basarat\n- Matt Pocock's TypeScript tips on YouTube\n\nStart small and gradually add types to your existing JavaScript projects!",
    votes: 6,
    createdAt: "2024-01-09T15:45:00.000Z",
  },
  {
    id: "15",
    questionId: "8",
    content:
      "Here are the best deployment options for React apps in 2024:\n\n**1. Vercel (Recommended for most cases)**:\n- **Pros**: Zero config, automatic deployments, great performance, free tier\n- **Cons**: Limited server-side features\n- **Best for**: Static sites, JAMstack, personal projects\n- **Setup**: Just connect your GitHub repo\n\n**2. Netlify**:\n- **Pros**: Excellent free tier, form handling, serverless functions\n- **Cons**: Build times can be slower\n- **Best for**: Static sites, small to medium projects\n- **Setup**: Drag and drop or Git integration\n\n**3. AWS Amplify**:\n- **Pros**: Full AWS integration, scalable, enterprise features\n- **Cons**: More complex setup, can be expensive\n- **Best for**: Enterprise applications, AWS users\n\n**4. Firebase Hosting**:\n- **Pros**: Fast CDN, easy setup, great for full-stack apps\n- **Cons**: Limited to Google ecosystem\n- **Best for**: Apps using Firebase services\n\n**5. Railway/Render**:\n- **Pros**: Simple deployment, good for full-stack\n- **Cons**: Limited free tier\n- **Best for**: Full-stack applications\n\n**Quick Vercel Setup**:\n```bash\nnpm install -g vercel\nvercel login\nvercel\n```\n\n**Environment Variables**:\n- Set up in your hosting platform's dashboard\n- Use `.env.local` for local development\n- Never commit sensitive data to Git\n\n**Performance Tips**:\n- Enable compression (Gzip/Brotli)\n- Use CDN for static assets\n- Implement proper caching headers\n- Optimize bundle size\n\nFor most React developers, Vercel is the best choice due to its simplicity and performance!",
    votes: 10,
    createdAt: "2024-01-08T09:00:00.000Z",
  },
  {
    id: "16",
    questionId: "8",
    content:
      "Let me add some advanced deployment strategies and CI/CD setup:\n\n**CI/CD Pipeline with GitHub Actions**:\n```yaml\n# .github/workflows/deploy.yml\nname: Deploy to Vercel\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm ci\n      - run: npm run build\n      - uses: amondnet/vercel-action@v25\n        with:\n          vercel-token: ${{ secrets.VERCEL_TOKEN }}\n          vercel-org-id: ${{ secrets.ORG_ID }}\n          vercel-project-id: ${{ secrets.PROJECT_ID }}\n```\n\n**Docker Deployment**:\n```dockerfile\n# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\nEXPOSE 3000\nCMD [\"npm\", \"start\"]\n```\n\n**Environment Configuration**:\n```javascript\n// next.config.js\nmodule.exports = {\n  env: {\n    API_URL: process.env.API_URL,\n    NODE_ENV: process.env.NODE_ENV,\n  },\n  images: {\n    domains: ['your-cdn-domain.com'],\n  },\n};\n```\n\n**Monitoring and Analytics**:\n- Set up error tracking (Sentry, LogRocket)\n- Implement performance monitoring\n- Use analytics (Google Analytics, Plausible)\n- Monitor Core Web Vitals\n\n**Security Considerations**:\n- Enable HTTPS everywhere\n- Set up security headers\n- Implement CSP (Content Security Policy)\n- Regular dependency updates\n- Use environment variables for secrets\n\nRemember: Choose the deployment platform that matches your team's expertise and project requirements!",
    votes: 4,
    createdAt: "2024-01-08T10:30:00.000Z",
  },
];

export const initializeSampleData = () => {
  // Only initialize if no data exists
  if (!localStorage.getItem("questions")) {
    localStorage.setItem("questions", JSON.stringify(sampleQuestions));
  }

  if (!localStorage.getItem("answers")) {
    localStorage.setItem("answers", JSON.stringify(sampleAnswers));
  }

  if (!localStorage.getItem("votedAnswers")) {
    localStorage.setItem("votedAnswers", JSON.stringify([]));
  }
};

// Function to clear localStorage and reload sample data (for debugging)
export const resetToSampleData = () => {
  localStorage.removeItem("questions");
  localStorage.removeItem("answers");
  localStorage.removeItem("votedAnswers");

  localStorage.setItem("questions", JSON.stringify(sampleQuestions));
  localStorage.setItem("answers", JSON.stringify(sampleAnswers));
  localStorage.setItem("votedAnswers", JSON.stringify([]));

  // Reload the page to see the changes
  window.location.reload();
};
