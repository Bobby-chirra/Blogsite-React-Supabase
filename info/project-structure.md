blog-frontend/
├── public/
│   └── index.html           # The main HTML template, rarely modified
│
├── src/
│   ├── components/
│   │   ├── PostList.js      # Displays multiple posts
│   │   ├── PostForm.js      # Handles new/edit post form
│   │   └── PostItem.js      # Individual post layout
│   ├── supabaseClient.js    # Supabase setup/config, use in components
│   ├── App.js               # Main application logic, routes, layout
│   ├── index.js             # React entry point, renders <App />
│   └── styles/
│       └── main.css         # Custom global styles; expand as needed
│
├── package.json             # Project dependencies/scripts
└── README.md                # Project intro/setup guide
