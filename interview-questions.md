# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: It is refering to the parent class of the current object. Now to explain this a bit because that statement is very wordy and not really explanitory to most. If you have a class of animal and want to add dog as a child then you would use super. The child class then invoke the method with the same name and pass along the aguments that were sent to that method. 

class Animal
  def name
    puts "Animal"
  end
end

class Dog < Animal
  def name
    super
  end
end
dog = Dog.new
dog.name
# "Animal"

Researched answer: Super and Super() are two different things. Starting with super it calls a method on the parent class with the same name in that childs class while Super() does not pass along the arument. Super is just a way to call the parent class to access the parents methods and properties. Its all about adding data with out modifing original data. 

2. What is a gem?

Your answer: A gem is a library that uses specific piece of functionality and brings all needed scripting files related to the needed functionality. Its just different tools that are built by other developers to make ruby coding faster and easier. 

Researched answer: is just a ruby programming language package that uses a standard format. Gems can bring different functionality to a application such as money and currency using a credit card system for processing payments. it is all about saving time and making programming with ruby simpler. 

3. What is a relational database? Are there other kinds of databases?

Your answer: Tables and rows! Relational databases are data with predefined relationships. They are organized as a set of tables with columns and rows. Each row of the data uses a unique identifier called a primary key. 

Researched answer: There are 5 types of databases, Hierarrchial, Network, Object-oriented, relational and NoSQL databases. Now we can even get into subcatigories such as relational and non-relational databases. Neither of the two are better than the other and both have a place in the database world. Relational databases focus more on structured data while non relational databases dont use as much structure. Relational data is table and row oriented while  non-relational databases arer document oriented.

4. What are primary keys? Why are they important?

Your answer: I spoke briefly about primary keys in answer 3 about relational databases. A primary key is the unique idendified to locate a specific row of data. 

Researched answer: A primary key is need to insert, update, restore or delete data fom a database table. It is inside the colomn  of each row of the databases table. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: CRUD is all about the internet interactions. It stands for create, read, update and delete. These 4 operations are needed for creating and managing data elements. 

Researched answer: There are 5 variations of CRUD, ABCD - add, browse, change, delete, CRUDL - create, read, update, delete and list. BREAD - Browse, read, edit, add and delete. Dave - delete, add, view and edit. and CRAP which stands for create replicate append and process. All of them sould the same because they all do the same thing. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Is a way of mapping HTTP routes and crud functionalities. Routes is a code that listens and rercieves requests and then decides what to send back. It provides a basic functionality of CRUD. 

2. Ruby on Rails: Ruby on Rails is all about high performance web platforms. It is used for progamming a whide range of tasks for a web platform. Rails uses a concise amount of code making it easier to detect and fix errors. 

3. Database migrations: Database migrations are exactly what you think when you see mirgrations. Its all about moving from one place to another. With data migrations you are moving from one or moe source databases to the target usually using a migration service. The data may be restructed in the target database but it resides fully in the new database. 

4. Params: To use params as a keyword you are specifing a method parameter that will take a varible number of arguments. 

5. ERB: Epic Rap Battles of History.. Just kidding ERB Provides a templet that is powerful and easy to use. ERB returns a string in the same character encoding as the input string. 
