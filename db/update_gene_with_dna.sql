update gene
set dna_id = ${dna_id}
where user_id = ${user_id}
and rna_id = ${rna_id}
returning *;