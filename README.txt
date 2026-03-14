Shrink Shield Deployment

1. Upload all files to your GitHub repository.
2. Enable GitHub Pages in repository settings.
3. Create a Supabase table named 'items' with columns:

id (uuid, primary key)
barcode (text)
name (text)
price (numeric)
created_at (timestamp default now())

4. Create users in Supabase Authentication using emails like:
userid@shrinkshield.app

Employees log in using:
User ID = userid
Password = password you assign
