const User = require('../models/User.js');

class UsersController {
    updateUser(req, res, next) {
        const userId = req.params.id;
        const newData = req.body;

        // Kiểm tra xem có sự thay đổi về mật khẩu hay không
        if (newData.password) {
            // Nếu có thay đổi, hash mật khẩu mới trước khi cập nhật
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return next(err);
                }
                bcrypt.hash(newData.password, salt, (err, hashedPassword) => {
                    if (err) {
                        return next(err);
                    }
                    // Cập nhật mật khẩu đã được hash vào newData
                    newData.password = hashedPassword;

                    // Tiếp tục với quá trình cập nhật người dùng
                    performUpdate();
                });
            });
        } else {
            // Nếu không có sự thay đổi về mật khẩu, tiếp tục với quá trình cập nhật người dùng
            performUpdate();
        }

        // Hàm thực hiện cập nhật người dùng
        function performUpdate() {
            User.findByIdAndUpdate(
                userId,
                { $set: newData },
                { new: true }
            )
                .then(updatedUser => res.status(200).json(updatedUser))
                .catch(next);
        }
    };

    deleteUser(req, res, next) {
        User.findByIdAndDelete(req.params.id)
            .then(res.status(200).json("User has been deleted."))
            .catch(next);
    };

    getUser(req, res, next) {
        User.findById(req.params.id)
            .then(user => res.status(200).json(user))
            .catch(next);
    };

    getUsers(req, res, next) {
        User.find(req.params.id)
            .then(users => res.status(200).json(users))
            .catch(next);
    };
}

module.exports = new UsersController;