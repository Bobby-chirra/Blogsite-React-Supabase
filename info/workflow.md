 ***documentation for the functionality of  React with supabase postgresql blog app***

## App Overview

This is a multi-user blog application built using React and Supabase. Users can sign up, log in, browse all published blogs, create new posts, and manage (edit/delete) their own posts. The app uses React Router for navigation and supabase for authentication and database backend.

***

## Key Features

### Authentication

- **Signup/Signin:** Users create accounts and log in securely via Supabase authentication.
- **Protected Routes:** The app only allows access to the blog and post management features after a successful login.

### Navigation

- **Navbar:** Persistent navigation bar includes:
  - **Home:** Shows all blogs posted by any user.
  - **My Blogs:** Shows only the current logged-in user's blogs.
  - **Add Post:** Clicking this reveals the post creation/edit form. Only one form is shown at a time.
  - **Logout:** Signs out and returns to the login/signup view.

### Blog Listing

- **Homepage (`/`):** Displays all blogs in the system, regardless of author.
- **My Blogs Page (`/my-blogs`):** Displays only the blogs authored by the logged-in user.

### Create & Edit Blog Posts

- **Add Post:** Button in navbar. Shows a form for entering Title, Description, and Content. All fields are required.
- **Edit Post:** Available only in "My Blogs" for posts authored by the user. Clicking Edit shows the same form, prefilled for updating.
- **Cancel:** Cancels the add/edit workflow and hides the form.

### View Individual Blog

- **Full View:** Clicking any blog card navigates to a dedicated page (`/post/:id`) showing the full title, description, content, and created time.

### Delete Blog Posts

- **Delete:** Only available for the user's own posts in "My Blogs". Removes the post immediately from the database.

***

## Roles and Permissions

- **Any logged-in user** can:
  - View all blogs on the homepage.
  - Add a new blog.
  - Edit or delete **only** their own blogs (only shown in "My Blogs").
  - Log out safely.

***

## Routing Structure

- `/`: Homepage, all blogs, "Add Post" form (if triggered)
- `/my-blogs`: Current user's blogs, with Add/Edit/Delete functionality
- `/post/:id`: Full page view for a specific blog post
- **Protected Navigation**: App automatically redirects to login if not authenticated. No route is forced after login; manual navigation is used.

***

## Data Model

- Each blog post includes:
  - **title**
  - **description**
  - **content**
  - **author_id**
  - **created_at**
  - **updated_at**

***

## Component Responsibilities

- **App.js:** App-level state, route handling, passing core handlers to child components.
- **Auth.js:** Handles signup and login. Shows errors and email confirmation messages.
- **Navbar.js:** Top navigation bar with links/buttons for key functions.
- **PostForm.js:** Handles both creation and editing of a post.
- **PostList.js:** Lists all posts, receives props for enabling/disabling edit/delete.
- **PostItem.js:** Renders a single post preview. Edit/Delete only enabled in "My Blogs".
- **BlogDetail.js:** Displays full details of a selected post.

***

## Workflow

1. **User visits app → prompted to login/signup.**
2. **After login:**
   - Homepage (`/`) displays all blogs.
   - User can click "Add Post" to open the create form.
   - User can click on any blog to see full details.
   - "My Blogs" shows only their own posts, with edit/delete options.
   - "Logout" clears session and returns to login.
3. **Create/Edit/Delete:** All actions update instantly via Supabase backend.

***

## Extending the App

- You can add features like comments, categories, image uploads, search/filter, or admin controls by expanding the schema and UI logic.
- Connect analytics tools, notifications, or improve SEO for discoverability.
