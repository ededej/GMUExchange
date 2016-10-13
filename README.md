# GMUExchange
Marketplace to buy and sell textbooks, notebooks, or other class materials.

The four scenarios we decided on were as follows:

1.) Register

   A new user can sign in to GMUExchange by providing an e-mail address and password. The application checks that the e-mails is            affiliated with GMU through use of regular expressions (ends in @gmu.edu or @masonlive.gmu.edu). The application sets the user’s        netID to his username, and the user can then log in by providing either his netID, his @gmu.edu e-mail, or his @masonlive.gmu.edu      e-mail and his password. Credentials can be changed after registration.
      
2.) Browse products

   A non-registered user can browse the available products with limited scope, which includes item name, description, market price,         and image. A registered user, in addition to the scope of non-registered users, can also view the user who posted the product,         his rating, his profile, the user price, whether the price is negotiable, and his personal account settings, which include             messages from other users, changing his credentials, changing his profile picture, and more. 
    Using the zoomable sunburst with updating data visualization in 3D.js, the application will display a summary of currently               available class-related materials; the lower-level will display departments (e.g. CS, ECE), the next level will display class           number (e.g. 112, 301), and the third level will display the professor’s name. This visualization will only reflect information         affiliated with an existing listing. By clicking on the different sections on the visualization tool, the application will update       the currently-displayed search results to filter depending on the selection. (e.g. if the user has selected ECE 301, only ECE 301       materials will display).
    User dashboard with personal information and total revenue from sales through GMUExchange, visible only to the user himself.             (Maybe also show their current listing and give them an edit option).
      
3.)Post a product

   A registered user can post a product on the site by providing its category (book, class notes, class materials, or miscellaneous), a    subcategory (dorm essentials, other) if the main category is miscellaneous, or the class name (e.g. ECE 301) and professor              otherwise. The user must then upload a photo of the product to reflect its quality, the price requested for the product, and            whether or not the price is final or negotiable. If the main category is book, the user must provide an ISBN, and the application      will then use the Amazon API to search for the market price for the book, which is also displayed to the user posting a product        before finalizing the post, and to users viewing the post.
    
4.)Search

   Registered and non-registered users can browse products by entering keywords into a search bar. The page displays the results after      the search button is clicked.
   Not included in this submission: Results can be filtered by category (and subcategory if the main category is miscellaneous), class      name, professor, and price. Users are provided options for filters to narrow down results.
   
5.)Home visualization

   Users are able to see a breakdown of posted products of the current year for each month. They can hover over the categories 
   (textbooks, class notes, class materials, miscellaneous) to view how many of each has been sold by month, or they can hover over the 
   month to view the breakdown of posts by category.

*HW5 scenarios: search, post a product, registration, home visualization (D3JS).
https://dayanahudson.github.io/GMUExchange/
