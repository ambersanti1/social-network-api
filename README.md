PROJECT TITLE: SOCIAL-NETWORK-API

TABLE OF CONTENT 
-[LICENSE](#LICENSE) 
-[DESCRIPTION](#DESCRIPTION) 
-[INSTALLATION](#INSTALLATION) 
-[USAGE](#USAGE) -[CONTRIBUTION GUIDELINES](#CONTRIBUTION-GUIDELINES) 
-[LINK TO WALKTHROUGH VIDEO](#LINK-TO-WALKTHROUGH-VIDEO)

# LICENSE

MIT License (2023, Ryan Messett)

# DESCRIPTION

Back-end of a social network where you can add users, thoughts, create reactions to thoughts and add friends.

# INSTALLATION INFORMATION

To install the node server packages

```
npm i
```

To initialize the application on the port and create the database in mongodb.

```
npm run dev
```

# USAGE INFORMATION

Open Insomnia and create the following routes:

Get all posts of reactions, users and thoughts
http://localhost:3001/api/reactions
http://localhost:3001/api/users
http://localhost:3001/api/thoughts

Get, Post, Update or Delete a single reaction
http://localhost:3001/api/reactions/:reactionId

Get, Post, Update or Delete a single user
http://localhost:3001/api/users/:userId

Get, Post, Update or Delete a single thought
http://localhost:3001/api/thoughts/:thoughtId

Delete or Post a single friend
http://localhost:3001/api/users/:userId/friends/:friendId

# CONTRIBUTION GUIDELINES

Carolina Sandoval - Models, controllers, routes, server and database.

# CONTACT INFORMATION

For further questions reach me on GitHub and by email.
GITHUB: https://github.com/ambersanti1
EMAIL: carolinasandoval879@gmail.com

# LINK TO WALKTHROUGH VIDEO
https://youtu.be/yqqTkRKmn-I

