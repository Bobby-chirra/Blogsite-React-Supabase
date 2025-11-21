blog-frontend/
├── public/
│   └── index.html           # The main HTML template, rarely modified
│
├── src/
│   ├── components/
│   │   ├── Navbar.js        # Top navigation bar, handles routing
│   │   ├── Auth.js          # Login and signup forms and logic
│   │   ├── PostList.js      # Displays all posts in a list
│   │   ├── PostForm.js      # Add/edit post form with validation
│   │   ├── PostItem.js      # Individual post card/preview
│   │   └── BlogDetail.js    # Full single post view
│   ├── supabaseClient.js    # Supabase setup/config, import in components
│   ├── App.js               # Main application logic, handles routes and state
│   ├── index.js             # React entry; wraps App with BrowserRouter
│   └── styles/
│       └── main.css         # Custom global styles; expand as needed
│
├── package.json             # Project dependencies/scripts
└── README.md                # Project introduction, setup, and usage info