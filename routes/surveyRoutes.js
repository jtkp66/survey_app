const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', async (req, res) => {
        const { coordinator, student, title, body, img, dateSent } = req.body;

        const survey = new Survey({
            title,
            coordinator,
            student,
            body,
            img,
            _user: req.user.id,
            dateSent: Date.now()
        })
        try {
            await survey.save();
            const user = await req.user.save();
            res.send(user);
          } catch (err) {
            res.status(422).send(err);
          }
    });
};
