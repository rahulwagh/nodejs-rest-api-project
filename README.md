## 1. Install the npm dependencies

```commandline
npm install 
```

## 2. Run the npm app

```commandline
npm run start 
```

## 3. Docker build the npm app

```commandline
docker build -t npm-rest-api . 
```

## 2. Run Docker image

```commandline
docker run -p 9004:9004 npm-rest-api
```