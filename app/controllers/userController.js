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
};