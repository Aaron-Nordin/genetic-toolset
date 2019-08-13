create table users (
     user_id serial primary key, 
     username varchar(50), 
     email varchar(150), 
     user_image text
);

create table dna (
    dna_id serial primary key, 
    user_id integer references users(user_id), 
    dna_seq text
);

create table rna (
    rna_id serial primary key, 
    user_id integer references users(user_id), 
    rna_seq text
);

create table amino_acid (
    amino_acid_id serial primary key, 
    user_id integer references users(user_id), 
    amino_acid_seq text
);

create table gene (
    gene_id serial primary key, 
    gene_name varchar(250), 
    gene_desc text, 
    user_id integer references users(user_id), 
    dna_id integer references dna(dna_id), 
    rna_id integer references rna(rna_id),
    amino_acid_id integer references amino_acid(amino_acid_id)
);

create table credentialsp (
    password_id serial primary key, 
    password varchar(50), 
    hash varchar(250), 
    user_id integer references users(user_id));

---------------------------DUMMY DATA-------------------------------------

insert into users (username, email, user_image)
values ('BiLlNyEiSaHaCk', 'therealbill@realsies.com', 'http://images2.memedroid.com/images/UPLOADED42/52ac600d38628.jpeg'),
('HeyNoImBillNye', 'therealrealbill@billsies.com', 'https://survivingcollege.com/wp-content/uploads/2012/11/Bill-Nye-Meme-10.jpg');

insert into credentialsp (password, hash, user_id)
values ('bill', null, 1), ('bill', null, 2);