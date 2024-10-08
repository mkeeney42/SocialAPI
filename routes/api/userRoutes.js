const router = require('express').Router();
const User = require('../../models/User');

// ALL of these of routes are prefixed with '/api/users'
router.get('/', (req, res) => {
    // We want to QUERY our DATABASE for ALL USERS
    User.find({})
        .then(result => {
            console.log("Data: ", result);
            res.status(200).json(result);
        }).catch(err => {
            console.log("Error: ", err);
            res.status(500).json({ msg: err })
        });
    /*
    , (err, data) => {
        if(err) {
            console.log("err: ", err);
            res.status(500).json({ msg: err })
        };
        console.log("data: ", data);  // --> data.rows | []
        // RESPONSE BACK (in JSON) to the REQUESTing entity
        res.status(200).json(data);
    })
    */
});


router.get('/:userId', (req, res) => {
    // We can pull out the userId from the INCOMING REQUEST --> req.params = { userId: '098sf097w3ergwef098sd'}
    User.findById(req.params.userId)
        .then(data => {
            // We MAY need to PARSE the data from the data base BEFORE passing it BACK 
            console.log("DB data: ", data);
            // response
            res.status(201).json(data)
        })
        .catch(err => {
            console.log("error: ", err);
            // response
            res.status(500).json({ msg: err })
        });
});

router.post('/', (req, res) => {
    // We can pull out the BODY from the INCOMING REQUEST --> req.body = { username: 'bingoChicken', email: 'a@b.com'}
    
    // WE want to CREATE a new Record in our dataabse
    const { username, email } = req.body
    // USING that userId we can search our DB for THAT user
    User.create(req.body)
        .then(data => {
            // We MAY need to PARSE the data from the data base BEFORE passing it BACK 
            console.log("DB data: ", data);
            // response
            res.status(201).json(data)
        })
        .catch(err => {
            console.log("error: ", err);
            // response
            res.status(500).json({ msg: err })
        });
    
});


router.put('/:userId', (req, res) => {
   // console.log("Params: ", req.params);
  //  console.log("Body: ", req.body);
    // We can pull out the userId from the INCOMING REQUEST --> req.params = { userId: '098sf097w3ergwef098sd'}
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then(data =>{
            console.log("User Updated: ", data);
            res.status(200).json(data) 
        }).catch(err => {
            console.log("error: ", err);
            res.status(500).json({ msg: err.message })
        });
});

router.delete('/:userId', (req, res) => {
    // We can pull out the userId from the INCOMING REQUEST --> req.params = { userId: '098sf097w3ergwef098sd'}
    User.findByIdAndDelete(req.params.userId) 
        .then(data =>{
            console.log("User Deleted: ", data);
            res.status(200).json({ msg: "User Deleted Successfully"})
            
        }).catch(err => {
            console.log("error: ", err);
            res.status(500).json({ msg: err.message })
        });
    });
        // We MAY need to PARSE the data from the data base BEFORE passing it BACK 
        
        // response
    

// --- Friend Routes --- //
router.post('/:userId/friends/:friendId', (req, res) => {
    console.log("incoming data: ", req.params);
    // console.log("incoming body: ", req.body);
    
    User.findByIdAndUpdate(req.params.userId, 
        { $addToSet: { friends: req.params.friendId} },
        { new: true })
        .then(data => {
            console.log("User Updated: ", data);
            res.status(200).json(data);
        }).catch(err => {
            console.log("error: ", err);
            res.status(500).json({ msg: err })
        });
       
});

router.delete('/:userId/friends/:friendId', (req, res) => {
    console.log("incoming data: ", req.params);
    // console.log("incoming body: ", req.body);
    
    User.findByIdAndUpdate(req.params.userId, 
        { $pull: { friends: req.params.friendId} },
        { new: true },
        (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).json({ msg: err })
            }
            console.log("User Updated: ", data);
            // We MAY need to PARSE the data from the data base BEFORE passing it BACK 
            
            // response
            res.status(200).json(data)
        });
});

module.exports = router;