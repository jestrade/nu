#  Contact Form
Laravel  + React + Tailwind

## setup 

1. Install MySQL/MariaDB locally
2. Create a db user
3. Create a new database
4. Grant access to user in the new database

## Run the app

### backend
In the folder
```
cd backend/
```
1. Install your dependencies

2. Set up your db credentials in backend/.env
```
DB_CONNECTION=mysql
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

3. Run the app
```
php artisan serve
```

### frontkend
In the folder
```
cd frontend/
```
1. Install your dependencies
```
yarn install
```
2. Set up your api domain in frontend/.env (i.e. `http://localhost:8000/api`)
```
REACT_APP_API_URL=
```
3. Run the app
```
yarn start
```

## Use the app
In your browser, go to the web app URL (default port: `3000`)
```
http://localhost:3000/
```

1. Create some messages

2. In the MySQL CLI, select all records from the contacts table
```
select * from contacts;
```

3. You should be able to see all messages sent