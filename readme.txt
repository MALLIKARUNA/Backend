node.js is a one application 
express is a one packages
express is commend is (npm i express)
npm init -y =>nodejs appliaction initiate


// ------http protocall-------//
there are 4 methods is there
1) get ->read the data
2) post-> create data
3)patch->partiall update data
4)delete->delete data

//---------22/09/2026----/
we are learning the http status code 
HTTP status code = a number that tells the client the result of a request.

| Range       | Meaning         |
| ----------- | --------------- |
| **100–199** | Informational   |
| **200–299** | ✅ Success       |
| **300–399** | 🔄 Redirection  |
| **400–499** | ❌ Client error  |
| **500–599** | 💥 Server error |
For backend development, you will use 200, 201, 400, 401, 403, 404, and 500 very frequently.
----this are the most imp -----
200 → Success
201 → Created
400 → Bad request
401 → Not authenticated
403 → Not allowed
404 → Not found
500 → Server error

Mallikarjun, we use HTTP status codes to tell the frontend what happened when it sent a request to the backend.