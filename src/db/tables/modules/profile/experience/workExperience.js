module.exports = `
    create table if not exists work_experience
    (
        id                    mediumint auto_increment primary key not null,
        profile_id            mediumint                            not null,
        company_name          varchar(150),
        position              varchar(50),
        year_from             int,
        year_to               int,
        monthly_salary        int,
        is_full_time          bool,
        is_government_service bool,
        created_at            timestamp default now(),
        is_deleted            boolean   default false,
        deleted_at            timestamp,
        foreign key (profile_id) references profile (id)
    );
`;