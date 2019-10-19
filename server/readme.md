# GoBarber API - 1.0.0

API was developer in module 02 of Rocketseat's Bootcamp.

## Introduction

GoBarber API is a API to manage schedulesing to services providers as barber, hair stylist and all beauty salon services.

## Pre-install

Before you use this api, you need install databases.

> if you use connections by docker, run codes:

```shell
# install DB ex: postgres
sudo docker run --name your_db_name -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres:11
# install mondodb
sudo docker run --name your_db_name -p 27017:27017 -d -t mongo
# install minimal redis
sudo docker run --name your_db_name -p 6379:6379 -d -t redis:alpine
```

## Installation

- Clone this with `git clone https://github.com/felipecoders/gobarber.git`;
- Run `yarn` ou `npm` to install node dependencies.
- Configure `.env` file like `.env.example` using your own credentials;
- Run migrations: `yarn sequelize db:migration` or `npx sequelize db:migration`;
- Run `yarn dev` or `npm run dev` to run server and `yarn queue` or `npm run queue` to run Bee-Queue to manager email process in background.

## Routes

| PROTOCOL | ROUTE                             | PERMISSION            | UPLOAD                | CONTROLLER/METHOD             |
| -------- | --------------------------------- | --------------------- | --------------------- | ----------------------------- |
| post     | /users                            | public                | -                     | UserController.store          |
| post     | /sessions                         | public                | -                     | SessionController.store       |
| put      | /users                            | private               | -                     | UserController.update         |
| get      | /providers                        | private               | -                     | ProviderController.index      |
| get      | /providers/:provider_id/available | private               | -                     | AvailableController.index     |
| get      | /appointments                     | private               | -                     | AppointmentController.index   |
| post     | /appointments                     | private               | -                     | AppointmentController.store   |
| delete   | /appointments/:id                 | private               | -                     | AppointmentController.delete  |
| get      | /schedules                        | private               | -                     | ScheduleController.index      |
| get      | /notifications                    | private               | -                     | NotificationController.index  |
| put      | /notifications/:id                | private               | -                     | NotificationController.update |
| post     | /files                            | private               | upload.single('file') | FileController.store |

## Support files

You can download and import the [insominia config](Insomnia.json) file to start your tests.

## Thanks to

[Rocketseat's Bootcamp](https://rocketseat.com.br/).
