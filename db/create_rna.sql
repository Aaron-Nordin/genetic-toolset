insert into rna (user_id, rna_seq)
values (${user_id}, ${rna_seq})
returning *;