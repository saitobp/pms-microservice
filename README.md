# PMS Microservices

PMS stands for Pizzaria Management System

## Services

The current services available are:

- api-products

## Building Docker images

This is a monorepo, so for building the images we need to be at the root level, and build each individual Docker Image inside each app

### api-products

```shell
docker image build -f ./apps/api-product/Dockerfile -t pms-microservices/api-products:0.1 .
```

## Docker Compose

To run all docker images, use docker compose

```shell
docker-compose up
```

## Api Products

To make a GET request for all products:

```shell
curl http://localhost:5000/api/products
```

To make a POST request for a product:

```shell
curl -X POST http://localhost:5000/api/products -H 'Content-Type: application/json' -d '{"name":"curl","quantity":"123"}'
```