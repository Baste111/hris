module.exports = `
    create table if not exists building
    (
        id              mediumint auto_increment primary key not null,
        name            varchar(300) not null,
        created_at      timestamp default now(),
        is_deleted      boolean   default false,
        deleted_at      timestamp
    );
`;
