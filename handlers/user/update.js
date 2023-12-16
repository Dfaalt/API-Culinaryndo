const multer = require('multer');
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const uploadImage = require('../../helpers/helpers');

module.exports = {
  update: async (req, res, next) => {
    try {
      // Konfigurasi multer max 5mb
      const multerMid = multer({
        storage: multer.memoryStorage(),
        limits: {
          fileSize: 5 * 1024 * 1024, // no larger than 5mb.
        },
      });

      // Penanganan File dengan Multer
      await multerMid.single('file')(req, res, async (err) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
            message: 'Error processing file upload',
          });
        }

        // Validasi/Pencarian User dengan ID
        const { id } = req.params;
        const {
          email, username, fullname, oldPassword, newPassword,
        } = req.body;

        // find user by Id
        const findUser = await User.findOne({ where: { id } });
        if (!findUser) {
          return res.status(404).json({
            status: false,
            message: 'user not found',
          });
        }

        // Email sudah ada dan berbeda user
        if (email && email !== findUser.email) {
          const existingUser = await User.findOne({ where: { email } });
          if (existingUser) {
            return res.status(400).json({
              status: false,
              message: 'Email already exists',
            });
          }
        }

        let hashedPassword = findUser.password; // default to current password
        // Verifikasi Old Password hanya jika oldPassword dan newPassword disediakan
        if (oldPassword && newPassword) {
          const isMatch = await bcrypt.compare(oldPassword, findUser.password);
          if (!isMatch) {
            return res.status(400).json({
              status: false,
              message: 'Old password is incorrect',
            });
          }
          hashedPassword = await bcrypt.hash(newPassword, 10);
        }

        // Pengunggahan Gambar
        let imageUrl = findUser.urlImage; // default to current image
        if (req.file) {
          // eslint-disable-next-line no-unused-vars
          imageUrl = await uploadImage(req.file).catch((e) => {
            throw new Error('Failed to upload image');
          });
        }

        // Update Data User
        const updateData = {
          urlImage: imageUrl,
          email,
          username,
          fullname,
          password: hashedPassword,
        };

        const updated = await User.update(updateData, { where: { id } });
        return res.status(200).json({
          status: true,
          message: 'update profile successfully',
          data: {
            imageUrl,
            updated,
          },
        });
      });
    } catch (error) {
      next(error);
    }
  },
};
