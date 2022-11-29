INSERT INTO "ROLES" (rol_id, name, description) VALUES
    ('5f609a42-2138-4886-92bf-7cca9ba38fae', 'ADMINISTRATOR', 'This user can modify the database among other things');

INSERT INTO "ROLES" (rol_id, name, description) VALUES
    ('57992376-bdde-40c2-be47-ba7808bd09ce', 'USER', 'This user can buy items');

INSERT INTO "USERS" (id, user_rol_id, email, address, phone_number, first_name, last_name, hashed_password) VALUES
    ('00000000-0000-0000-0000-000000000000', '5f609a42-2138-4886-92bf-7cca9ba38fae', 'icesista@icesi.edu.com', 'Calle siempre viva 123 no es falsa','+573009876543', 'Root', 'Admin', 'c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f');