# express-bookmark
Use the .env.example to setup your own .env file. This is a requirement for the application.


**Show staff**
----
  Returns json data about a single staff member

* **URL**

  /staff/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `\[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ _id : 12, name : "Michael Bloom", avatar:url, role: null}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `null`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`

**Show all staff**
----
  Returns array of all staff members

* **URL**

  /staff/

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**
**Required:**
  name:
**Optional:**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ _id : 12, name : "Michael Bloom", avatar:url, role: null}, { _id : 13, name : "Joe Bloggs", avatar:url, role: null}]`
 
* **Error Response:**


  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`

**Create a Staff Member**
----
 Creates a staff member 

* **URL**

  /staff/

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

  **Required:**
  name:
**Optional:**
avatar:

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `JSON object of the staff member you created`
 
* **Error Response:**


  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`


**Show Customer**
----
  Returns json data about a single customer

* **URL**

  /staff/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `\[integer]`

* **Data Params**
None


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ _id : 12, name : "Michael Bloom", email:, phone: `
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `null`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`

    **Show all customers**
----
  Returns array of all customers 

* **URL**

  /customers/

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**
**Required:**
  name:
**Optional:**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ _id : 12, name : "Michael Bloom", avatar:url, role: null}, { _id : 13, name : "Joe Bloggs", avatar:url, role: null}]`
 
* **Error Response:**


  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`




**Create a Customer**
----
 Creates a customer 

* **URL**

  /customers/

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

     **Required:**
  name: String
  email: String
  phone: Number
  
  **Optional:**
  dob: Date
  address:

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `JSON object of the customer you created`
 
* **Error Response:**


  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`


**Show review**
----
  Returns json data about a single review

* **URL**

  /reviews/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `\[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ _id : 12, foodRating: 1, serviceRating: 5, comment: "the food was good}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `null`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`
  
  
  
  **Show all reviews**
----
  Returns array of all reviews 

* **URL**

  /reviews/

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**
**Required:**
**Optional:**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ _id : 12, foodRating: 1, serviceRating: 5, comment: "the food was good}, { _id : 15, foodRating: 5, serviceRating: 3, comment: "the food was good}]`
 
* **Error Response:**


  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`

    **Create a Review**
----
 Creates a review

* **URL**

  /reviews/

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

     **Required:**
  foodRating: Number (1-5)
  serviceRating: Number (1-5)

  
  **Optional:**
  comment: String

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `JSON object of the review`
 
* **Error Response:**


  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized`

