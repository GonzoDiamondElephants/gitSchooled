# gitSchooled

#### Authors: 
Henok Gebremedhn
Sian Culligan 
Randee Orion

#### Links and Resources
- [Github Repo](https://github.com/GonzoDiamondElephants/gitSchooled)
- [Front end to our DB](https://gitschooledalexaapp.herokuapp.com/)
- [Swagger Potion-mentation](http://localhost:3000/api-docs)


Sources: 
- [Swagger Docs](https://swagger.io/docs/)
- [Adding Sounds Effects with the help of a 6th grader](https://www.awesomeaariv.com/how-to-add-sound-effects-to-your-alexa-skill/01/17/2019/)
- [Echo Demo Code](https://github.com/AlwaysBCoding/Episodes/edit/master/amazon-echo/lambda-function.js)
- [Weather API](https://darksky.net/dev/docs#data-point)
- [Tooltip Functionality](https://www.w3schools.com/css/css_tooltip.asp)
- [Sounds](https://developer.amazon.com/en-US/docs/alexa/custom-skills/ask-soundlibrary.html)
- [Lambda Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
- [Alexa Skill Tutorial 1](https://developer.amazon.com/blogs/alexa/post/de130c67-0703-4480-a2b3-c9f2977a7dd6/how-to-build-an-alexa-game-skill-from-scratch)
- [Alexa Skill Tutorial 2](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/get-deeper/tutorials-code-samples/build-an-engaging-alexa-skill)
- [Alexa Skill Tutorial 3](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/get-deeper/tutorials-code-samples/build-an-engaging-alexa-skill/module-1)
- [Hello World Demo Code](https://github.com/alexa/skill-sample-nodejs-hello-world)
- [Express API Reference](https://expressjs.com/en/api.html)



#### Setup 
**.env requirements**
- PORT=3000
- MONGODB_URI=mongodb+srv://gitSchooled:hogwarts@gitschooled-nsgoi.mongodb.net/

**How to initialize the application**
- [Front end to our DB](https://gitschooledalexaapp.herokuapp.com)
- Insomnia or the like can reach the database with get post put and delete at https://gitschooledalexaapp.herokuapp.com/potions
- Once the repo is local and all the dependencies are added npm start from the root folder will get the app up and running
- Last but not least, Alexa can be used to access our database in a fun and interactive way. Simply add 'git schooled' to the approved list for your alexa account. Then simply say Alexa, open git schooled and you are on your way! 

**Tests**
- To run tests npm test [file name] will run tests once everything is up and running locally 

**UML**
[uml](devPhases.pdf)

