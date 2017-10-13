# Camp-Compass
A camp application that allows users to add, edit, delete, and comments on campsites. 

<div align="center">
<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/campgrounds-top.png?raw=true" alt="The top of the campgrounds page" width="31%" />
<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/login.png?raw=true" alt="Login Page" width="31%" />
<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/login-successful.png?raw=true" alt="Login Successful" width="31%" />

All user-created campgrounds are displayed in the campgrounds page. In order for users to add camps, they must first be logged in. They can also create an account using the sign up button. 
Flash messages alert users to the status of their login attemp. For example, if a user attemps to sign up with a taken username, a message will
flash to let them know why their sign up attempt failed. 

<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/add-camp.png?raw=true" alt="Add Camp form" width="25%" />
<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/camp-top.png?raw=true" alt="Camp info top" width="25%" />
<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/camp-bottom.png?raw=true" alt="Camp info Bottom" width="25%" />
<img src="https://github.com/LizDominguez/Camp-Compass/blob/master/public/Screenshots/add-comment.png?raw=true" alt="Add Comment Form" width="25%" />

Once a user is logged in, they can add a camp with a title, image url, description, price, and location. The geocoder package converts the string location
into coordinates for the Google Maps API to display. Only the user who created the camp post can edit or delete it. 
Any user can view a camp and comment. 



Features:
* MongoDB database
* RESTful routing
* Data Assiciations
* User Authetication
* Add/Edit/Delete options
* Flash Messages
* Google Maps API
