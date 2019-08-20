insert into dna (user_id, dna_seq)
values (${user_id}, ${dna_seq})
returning *