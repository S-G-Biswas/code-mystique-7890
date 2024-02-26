## Project Title 
## Invest Master

## Introduction
InvestMaster is conceived as a state-of-the-art stock market portfolio management application that aims to democratize investing by making it accessible, understandable,
and engaging for everyone. Drawing inspiration from leading platforms like Robinhood and E*TRADE, InvestMaster will incorporate a blend of intuitive design with advanced
recommendations, social trading capabilities, and an immersive educational suite designed to enhance the user's investing skills.

## Project type 
### Full Stack (MERN)

## Deployed App
### Frontend:https://investmaster.vercel.app/
### Backend:https://outstanding-gray-xerus.cyclic.app/
### Database:mongodb+srv://shyamgopalbiswas:Sgbiswas22114atlas@cluster0.in6i802.mongodb.net/InvestMaster?retryWrites=true&w=majority

## Directory Structure

### Invest-Master/
- Backend/
- Frontend/
  - public/
  - src/
    - components/
    - pages/
    - styles/
    - app.js
    - index.js

## Video walkthrough of the project
link:https://www.youtube.com/watch?v=2G07C5Bxs8w

## Video walkthrough of the project
link:https://www.youtube.com/watch?v=2G07C5Bxs8w


## Features
- User can view the top trending stocks in the market
- User can buy stocks from a wide variety of stocks
- User can sell their stocks from their portfolio
- Admin can add, update, and delete the stocks available in the market


## Design decision or assumption
We are a team of 3, planned and developed this user interactive website in the span of 5 days. 
for design we followed the same theme over all the pages and sections

## Installation and Getting Started

- bash
- npm install invest-master
- cd invest-master
- npm start


## Usage
Visit the website-https://investmaster.vercel.app/

--Landing page

![Screenshot (1009)](https://github.com/S-G-Biswas/code-mystique-7890/assets/147697000/0afdc7b9-611c-4d9c-912f-1da2f348a752)

--Signup & Login page

![Screenshot (1010)](https://github.com/S-G-Biswas/code-mystique-7890/assets/147697000/e6bba96d-aeb9-4d4c-a916-e5e17f35af68)


![Screenshot (1011)](https://github.com/S-G-Biswas/code-mystique-7890/assets/147697000/64f53dc8-8c15-4ae8-9889-c16dfc756db3)

--Stocks page

![Screenshot (1012)](https://github.com/S-G-Biswas/code-mystique-7890/assets/147697000/5c7ef47a-4c19-42c5-a12a-84c0bbaeedca)

--Portfolio page

![WhatsApp Image 2024-02-26 at 12 13 50 PM](https://github.com/S-G-Biswas/code-mystique-7890/assets/147697000/5fb55e43-414f-4ce4-b6d6-cb50f5c26e3b)

--Admin page

![Screenshot (1013)](https://github.com/S-G-Biswas/code-mystique-7890/assets/147697000/f5f6f752-b202-4c7d-80e3-411113150c99)



## Credentials
user: email:r@gmail.com
      password:rahul

 Admin-- email:Admin@gmail.com
         password:admin 

## api used
Link: https://outstanding-gray-xerus.cyclic.app/

## API Endpoints

### GET:
- /users/allstocks
- /adminstocks
  - /portfolio

### POST:
- /users/register
- /users/login
  - /portfolio
  - /adminstocks

### PATCH:
- /adminstocks/:stockID

### DELETE:
- /portfolio/:stockID
- /adminstocks/:stockID

## Technology Stack
- Reactjs
- Nodejs
- Expressjs
- MongoDB












