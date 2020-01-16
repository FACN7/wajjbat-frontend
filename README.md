# Wajjbat Project

## Local installation

```
git clone git@github.com:FACN7/wajjbat-frontend.git

cd wajjbat-frontend

npm i

npm start
```

## User stories (eg: As a user, ...)

### First sprint (Goal - A user can view their nearest businesses, sign-up & login and leave reviews)

-  As a user of any type, I want to come to home page, see a list of businesses close to me, and top rated businesses (Medium - both teams)
    - Fetch user's location with their approval, and get closest businesses, send to backend & retrieve closest businesses
    - Fetch top rated buinesses
    - A home page displaying list of closest businesses, and top rated businesses, which matches design
    
- As a user of any type, I want to switch between Arabic & English  (Medium - FE team)
    - Button on navbar to switch
    - Update the written content based on language
    - Update the layout (RtL for Arabic, LtR for English)

- As a user, I can sign-up/login to the app with a Facebook/Gmail account (FE - small, BE - large)
    - Required details: 
        - First name (required)
        - Last name (required)
        - E-mail (Required and unique)        
        - Tel. number (optional)
        - Possible profile pic from FB
    - Default profile picture
    - /signup, /signin, /logout routes
    - Store users in DB

- As a user, I want to click on a buinesses and be taken to a buinesses profile page where I can see important details (Medium - Both teams)
    - Make list items links that take you to business profile page
    - Fetch and display (according to design):
        - carousel of Business images, 
        - buisness details, 
        - google map location 
        - reviews 

- As a logged in user, I want to submit a review of a business on the business's profile page (FE - small, BD - medium)
    - Check if user is logged in
        - If they are, allow user to write / submit a review
    - Create BE route for POSTing reviews
    - Save reviews in DB
            
- Stretch goals
    - BE team        
        - Research deploy with AWS
        - Research image hosting with AWS S3

### Other sprints

-  As a user, I want to search/filter businesses for what I want (Medium - FE team)
    - Sort by Ratings.
    - Filter by price range.    
    - Filter by business type.
    - Filter by cuisine (stretch)    

        
- As a logged-in user, I want to submit an application to register a new business
    - Navigate to new business form with navbar
    - Check if user is logged in before showing form
    - Required details:
        - Business name (Required)
        - Business type - dropdown for Restaurant/Bar/Candy shop/ Café / Hookah bar/ other. (Is this required?)
        - Street, City, Country, zip code- (Required).  
        - Placing the business on google maps- adding a business should be integrated with google maps- (Required)        
        -  Business email- Optional.
        -  Adding price range- Optional.
        -  Adding opening hours- Optional
        -  Adding Cuisines categories- Optional.        
        -  Business features categories: parking, free Wi-Fi, private room, smoking area, etc. Checkboxes (optional)
        -  Accept orders by phone (Yes/No) - optional.
        -  Reservations by phone (Yes/No) - optional.
        -  Uploading/linking business photos- optional.
        -  Facebook page- optional.
        -  Website- optional.
    -  /register-business endpoint
    -  Store business in database (field for admin-approval)
    -  Once registered, user will be redirected to home page
    

- As an admin-user, I want to have control over all users and business (with a CRM on a different website)
    - View list of all buisnesses and users, with search & filter
    - Profile page for each business / user with details (stretch)
    - View new business applications, and approve or deny 
    - Blocking user accounts (stretch) 

- As a user, I want to upload a profile picture
    - 50 x 50px

    
- As a logged-in user, I want to view my profile
    - Navigate to user profile using navbar
    - Fetch and display (according to design):
        - Profile pic (use placeholder if none present)
        - Full name
        - User's reviews
    - Can anyone view?

## Sprint 1 sub-teams
- Front-End
    - Hosen
    - Omri
    - Faris
- Back-End
    - Moshe
    - Mohammed
- CRM
