INSERT INTO USER_ROLE (role_id, role_name, description) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4eb','ADMIN', 'Base role for admin') ON CONFLICT DO NOTHING;

INSERT INTO USER_PERMISSION (permission_id, uri, permission_key, permission_method) VALUES
    ('ccc7ff73-1989-413a-ab52-9bec7a049e33', '/users', 'create.user', 'POST') ON CONFLICT DO NOTHING;

INSERT INTO ROLE_PERMISSION (role_id, permission_id) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4eb', 'ccc7ff73-1989-413a-ab52-9bec7a049e33') ON CONFLICT DO NOTHING;

/*User*/
INSERT INTO USER_ROLE (role_id, role_name, description) VALUES
    ('0e02ed53-f5e2-4f7a-bd86-8aadcadeb4eb','USER', 'Base role for admin') ON CONFLICT DO NOTHING;

INSERT INTO USER_PERMISSION (permission_id, uri, permission_key, permission_method) VALUES
    ('ccc7ff73-1989-413a-ab52-9bec7a049e33', '/users', 'create.user', 'POST') ON CONFLICT DO NOTHING;

INSERT INTO ROLE_PERMISSION (role_id, permission_id) VALUES
    ('0e02ed53-f5e2-4f7a-bd86-8aadcadeb4eb', 'ccc7ff73-1989-413a-ab52-9bec7a049e33') ON CONFLICT DO NOTHING;

DELETE FROM USERS WHERE id='00000000-0000-0000-0000-000000000000';

INSERT INTO USERS (id, role_id, email, address, phone_number, first_name, last_name, hashed_password) VALUES
    ('00000000-0000-0000-0000-000000000000', '2e72ed53-f5e2-4f7a-bd86-8aadcadeb4eb', 'icesista@icesi.edu.com', 'Calle siempre viva 123 no es falsa','+573009876543', 'Root', 'Admin', 'c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f');

