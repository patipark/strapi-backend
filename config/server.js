module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('WEBSITE', 'http://localhost'), // THIS ONE ให้ไปอ่านค่า config ที่ไฟล์ .env
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '07dba122e9a416551ed4f880ece5ecad'),
    },
  },
});
