# Express Postgres Example

This is an example of how I'd set up a basic Express + Postgres app.

Creation of a local database is automated with two Bash scripts: `scripts/db:setup` and `scripts/db:build`. To create the DB, DB user and `.env` file:

```shell
./scripts/create_db
```

Then to populate the DB with tables:

```shell
./scripts/populate_db
```

If you want to copy these into your own project you must change the permissions on each file to make them executable:

```shell
chmod +x ./scripts/your-filename
```

The first script will create a new Postgres user named "exampleuser" and a new DB named "example". It will also copy the `example.env` file in this repo into a new `.env` file for your server to use. The second will populate it using the schema defined in `database/init.sql`.

To allow Node to connect to the database the `src/database/connection.js` file creates a pool of connections to the DB defined in the `DATABASE_URL` environment variable, then exports it for other parts of the server to use.

## Deploying to Heroku

If you add the "Postgres add-on" to your Heroku app it will automatically set a `DATABASE_URL` environment variable when it starts your server.

Heroku's Postgres add-on requires an SSL connection. Unfortunately if you hard-code that in your `pg` options it'll break your local server, since that is _not_ a secure connection.

There's an easy workaround: if you set this environment variable in your Heroku app's settings Heroku will use the right connection:

```
PGSSLMODE='no-verify'
```

You can do this by opening your app on Heroku, visiting "Settings", then scroll down to "Config Vars", then clicking "Reveal Config Vars" to show the inputs.
