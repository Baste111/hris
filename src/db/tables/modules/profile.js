module.exports = `
    create table if not exists profile
    (
        id           mediumint auto_increment primary key not null,
        first_name   varchar(150)                         not null,
        middle_name  varchar(150)                         not null,
        last_name    varchar(150)                         not null,
        extension    varchar(50)                          not null,
        birth_date   date                                 not null,
        birth_place  varchar(150)                         not null,
        sex          varchar(50)                          not null,
        civil_status varchar(50)                          not null,
        blood_type   varchar(50),
        height       float,
        weight       float,
        photo        text,
        created_at   timestamp default now(),
        is_deleted   boolean   default false,
        deleted_at   timestamp
    );
`;