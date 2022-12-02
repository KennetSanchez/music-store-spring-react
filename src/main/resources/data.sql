

/*Admin*/
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

DELETE FROM ORDERS WHERE costumer_id='00000000-0000-0000-0000-000000000000';

DELETE FROM USERS WHERE id='00000000-0000-0000-0000-000000000000';

INSERT INTO USERS (id, role_id, email, address, phone_number, first_name, last_name, hashed_password) VALUES
    ('00000000-0000-0000-0000-000000000000', '2e72ed53-f5e2-4f7a-bd86-8aadcadeb4eb', 'icesista@icesi.edu.com', 'Calle siempre viva 123 no es falsa','+573009876543', 'Root', 'Admin', 'c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f');

/*Items / ordenes */
INSERT INTO ITEMS (item_id, name, includes_shipping, description, base_price, shipping_price) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4ed', 'ITEM PRUEBA', FALSE,  'xd', 13.0, 1.0) ON CONFLICT DO NOTHING;

INSERT INTO ITEMS (item_id, name, includes_shipping, description, base_price, shipping_price) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4a0', 'ITEM PRUEBA 2', TRUE,  'xd', 16.0, 0) ON CONFLICT DO NOTHING;

INSERT INTO ORDERS (order_id, costumer_id, total, status) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4ea', '00000000-0000-0000-0000-000000000000', 14, 'Probado bv') ON CONFLICT DO NOTHING;

INSERT INTO ORDER_X_ITEMS (order_id, item_id, quantity) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4ea', '2e72ed53-f5e2-4f7a-bd86-8aadcadeb4ed', 1) ON CONFLICT DO NOTHING;

INSERT INTO ORDER_X_ITEMS (order_id, item_id, quantity) VALUES
    ('2e72ed53-f5e2-4f7a-bd86-8aadcadeb4ea', '2e72ed53-f5e2-4f7a-bd86-8aadcadeb4a0', 1) ON CONFLICT DO NOTHING;