update gene
set aa_id = ${aa_id}
where user_id = ${user_id}
and rna_id = ${rna_id}
returning *;