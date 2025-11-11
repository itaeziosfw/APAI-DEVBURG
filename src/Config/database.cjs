module.exports = {
  dialect: 'postgres',
  host: 'localhost',

  port: 5433,
  username: 'bug-app',
  password: '1',
  database: 'bug-app-db',
  define: {
    timestamps: true,
    underscored: true,
  },
};
