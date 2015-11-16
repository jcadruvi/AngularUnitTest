'use strict';

module.exports.controller = function (app) {
    app.get('/api/users/items', function(req, res) {
        res.json({
            "data": [
                 { id: 1, description: "item 1"},
                 { id: 2, description: "item 2"},
                 { id: 3, description: "item 3", selected: true }
            ],
            "status": {
                "code": 200
            }
        });
    });

    app.get('/api/users', function(req, res) {
        res.json({
            "data": [
                 {
                     city: "San Jose",
                     email: "johndoe@gmail.com",
                     name: "John Doe",
                     phone: "(123) 456-7890",
                     state: "CA"
                },
                {
                     city: "San Fransisco",
                     email: "janedoe@gmail.com",
                     name: "Jane Doe",
                     phone: "(123) 456-7891",
                     state: "CA"
                },
                {
                     city: "San Jose",
                     email: "johnsmith@gmail.com",
                     name: "John Smith",
                     phone: "(123) 456-7892",
                     state: "CA"
                },
                {
                     city: "San Diego",
                     email: "janesmith@gmail.com",
                     name: "Jane Smith",
                     phone: "(123) 456-7893",
                     state: "CA"
                },
                {
                     city: "San Jose",
                     email: "fredsmith@gmail.com",
                     name: "Fred Smith",
                     phone: "(123) 456-7894",
                     state: "CA"
                },
                {
                     city: "San Fransisco",
                     email: "joshsmith@gmail.com",
                     name: "Josh Smith",
                     phone: "(123) 456-7895",
                     state: "CA"
                }
            ],
            "status": {
                "code": 200
            }
        });
    });
};