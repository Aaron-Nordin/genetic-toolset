insert into amino_acid (user_id, amino_acid_seq)
values (${user_id}, ${amino_acid_seq})
returning *;