# pern-todo-app

### Updates

Converted to containerized deployment and added docker-compose file for local testing and templating

### TO USE
1. Create an env file in ./server directory with the content;
```
CONN_STRING="postgresql://dbuser:secretpassword@database.server.com:5432/mydb"
```
2. Create an env file in the base directory for the docker-compose file to use for the pgsql
```
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_DB=todo_db
```

3. Run docker-compose to build

```
docker-compose up -d
```
</br>
<img src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/PERN.png" />

https://www.youtube.com/watch?v=ldYcgPKEZC8
