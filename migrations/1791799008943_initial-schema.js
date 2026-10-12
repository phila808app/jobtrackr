/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => 
    pgm.sql(`
        CREATE TABLE users(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(60) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX users_email_lower_idx ON users (lower(email));

CREATE TYPE application_status AS ENUM('applied','interviewing','offer','rejected');
CREATE TABLE applications(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    status application_status NOT NULL DEFAULT 'applied',
    date_applied DATE NOT NULL DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER target_appl_update_at
BEFORE UPDATE ON applications
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER target_users_update_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_applications_user_status ON applications (user_id, status);
CREATE INDEX idx_applications_user_date   ON applications (user_id, date_applied DESC);
        `)

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.sql(`
    DROP TABLE applications;
    DROP TABLE users;
    DROP FUNCTION set_updated_at();
    DROP TYPE application_status;
  `);
};
